import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, Calendar, Tag, ArrowLeft, Share2, BookOpen } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { BlogPost } from '../types';

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      loadBlogPost(slug);
    }
  }, [slug]);

  async function loadBlogPost(postSlug: string) {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', postSlug)
        .eq('is_published', true)
        .maybeSingle();

      if (error) throw error;
      if (data) {
        setPost(data);
        await incrementViewCount(data.id);
        await loadRelatedPosts(data.id);
      }
    } catch (error) {
      console.error('Error loading blog post:', error);
    } finally {
      setLoading(false);
    }
  }

  async function incrementViewCount(postId: string) {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .update({ view_count: (post?.view_count || 0) + 1 })
        .eq('id', postId);

      if (error) throw error;
    } catch (error) {
      console.error('Error incrementing view count:', error);
    }
  }

  async function loadRelatedPosts(currentPostId: string) {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('is_published', true)
        .neq('id', currentPostId)
        .limit(3);

      if (error) throw error;
      setRelatedPosts(data || []);
    } catch (error) {
      console.error('Error loading related posts:', error);
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post?.title,
        text: post?.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-slate-100 rounded-2xl h-96 animate-pulse" />
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <BookOpen className="w-16 h-16 text-slate-300 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Post Not Found</h2>
          <Link to="/considerations" className="text-blue-600 hover:text-blue-700 font-medium">
            Back to Considerations
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-br from-blue-600 to-purple-600 overflow-hidden">
        {post.featured_image_url && (
          <>
            <img
              src={post.featured_image_url}
              alt={post.title}
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-slate-900/30" />
          </>
        )}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {formatDate(post.published_date)}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.read_time_minutes} min read
              </div>
              <div className="text-sm">By {post.author_name}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          {/* Back Button */}
          <Link
            to="/considerations"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Considerations
          </Link>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium"
              >
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>

          {/* Article Content */}
          <div className="bg-white rounded-3xl border border-slate-200 p-8 lg:p-12 mb-12 shadow-xl">
            {post.content ? (
              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            ) : (
              <div className="text-center py-20">
                <BookOpen className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Content Coming Soon</h3>
                <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto">
                  {post.excerpt}
                </p>
                <p className="text-slate-500 mt-4">
                  This article is currently being developed. Check back soon for the full content.
                </p>
              </div>
            )}
          </div>

          {/* Share Section */}
          <div className="bg-slate-50 rounded-2xl p-6 mb-12 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">Found this article helpful?</h3>
              <p className="text-slate-600 text-sm">Share it with others</p>
            </div>
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
            >
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`/considerations/${relatedPost.slug}`}
                    className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-blue-300 transition-all"
                  >
                    <div className="relative h-40 bg-gradient-to-br from-blue-600 to-purple-600">
                      {relatedPost.featured_image_url && (
                        <img
                          src={relatedPost.featured_image_url}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-slate-600 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
