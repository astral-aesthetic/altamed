import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import LandingPage from './pages/LandingPage';
import DirectoryPage from './pages/DirectoryPage';
import PractitionerDetailPage from './pages/PractitionerDetailPage';
import ConsiderationsPage from './pages/ConsiderationsPage';
import BlogPostPage from './pages/BlogPostPage';
import OurStoryPage from './pages/OurStoryPage';
import ResourcesPage from './pages/ResourcesPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/directory" element={<DirectoryPage />} />
            <Route path="/practitioner/:id" element={<PractitionerDetailPage />} />
            <Route path="/considerations" element={<ConsiderationsPage />} />
            <Route path="/considerations/:slug" element={<BlogPostPage />} />
            <Route path="/our-story" element={<OurStoryPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
