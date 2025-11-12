# Architecture & Data Flow Diagram

## System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        AtlaMed Frontend                          │
│                                                                   │
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│  │   LandingPage    │  │  AuthModals      │  │  AddListingPage  │
│  │                  │  │  (Registration)  │  │                  │
│  │ Newsletter Form  │  │ + Newsletter     │  │ Practice Form    │
│  │ source: 'lp'     │  │ source: 'reg'    │  │ source: 'listing'│
│  └────────┬─────────┘  └────────┬─────────┘  └────────┬─────────┘
│           │                     │                     │
│           └─────────────────────┼─────────────────────┘
│                                 │
│                     ┌───────────▼────────────┐
│                     │  EmailSignupForm       │
│                     │  Component             │
│                     │ - Validation           │
│                     │ - Loading State        │
│                     │ - Error Handling       │
│                     │ - Success Message      │
│                     └───────────┬────────────┘
│                                 │
└─────────────────────────────────┼──────────────────────────────────┘
                                  │
                    ┌─────────────▼──────────────┐
                    │   Supabase Client          │
                    │  (src/lib/supabase.ts)     │
                    └─────────────┬──────────────┘
                                  │
┌─────────────────────────────────┼──────────────────────────────────┐
│                    Supabase Backend                                 │
│                                 │                                   │
│  ┌──────────────────────────────▼──────────────────────────────┐   │
│  │  Database (PostgreSQL)                                       │   │
│  │                                                              │   │
│  │  ┌─────────────────────────┐    ┌───────────────────────┐   │   │
│  │  │  email_signups          │    │ provider_submissions  │   │   │
│  │  │ ─────────────────────── │    │ ──────────────────── │   │   │
│  │  │ id (UUID, PK)           │    │ id (UUID, PK)        │   │   │
│  │  │ email (TEXT, UNIQUE)    │    │ user_id (FK)         │   │   │
│  │  │ name (TEXT)             │    │ full_name (TEXT)     │   │   │
│  │  │ source (TEXT)           │    │ credentials (TEXT)   │   │   │
│  │  │ subscribed_newsletter   │    │ specialty_areas []   │   │   │
│  │  │ created_at              │    │ practice_name        │   │   │
│  │  │ updated_at              │    │ address              │   │   │
│  │  │                         │    │ city, state, zip     │   │   │
│  │  │ ✓ UNIQUE(email)         │    │ phone, email, web    │   │   │
│  │  │ ✓ RLS Policies          │    │ insurance_accepted   │   │   │
│  │  │ ✓ Indexes (email, src)  │    │ status               │   │   │
│  │  │                         │    │ submitted_at         │   │   │
│  │  │                         │    │ ✓ RLS Policies       │   │   │
│  │  └─────────────────────────┘    └───────────────────────┘   │   │
│  │                                                              │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

## Data Flow

### Flow 1: Landing Page Newsletter Signup
```
User Types Email
         ↓
EmailSignupForm Component Validates
         ↓
Send to Supabase (email_signups table)
         ↓
  Set source = 'landing_page'
  Set subscribed_to_newsletter = true
         ↓
Response Received
         ↓
Show Success Message
Clear Input
```

### Flow 2: Registration + Newsletter
```
User Fills Registration Form
         ↓
Validate Passwords & Email
         ↓
Call signUp() from AuthContext
         ↓
If Newsletter Checkbox Checked:
  ├─ Save to auth.users (Supabase Auth)
  └─ ALSO Save to email_signups table
     ├─ source = 'registration'
     ├─ subscribed_to_newsletter = checked state
     └─ name = full_name
         ↓
Show Success Message
Close Modal
```

### Flow 3: Practice Listing Submission
```
User Fills Listing Form (20+ fields)
         ↓
Client-side Validation
  ├─ Required fields check
  ├─ Email format check
  └─ Terms acceptance check
         ↓
Form Valid?
├─ NO → Show Errors, Scroll to First Error
└─ YES → Continue to Submission
         ↓
Submit Handler (Async)
         ↓
Step 1: Save Email to email_signups
  ├─ email
  ├─ name (first + last name)
  ├─ source = 'add_listing'
  └─ subscribed_to_newsletter = true
         ↓
Step 2: Save Full Listing to provider_submissions
  ├─ Personal: name, email, phone
  ├─ Professional: credentials, specialty, experience
  ├─ Practice: name, address, city, state, zip, website
  ├─ Services: insurance, languages, bio
  └─ status = 'pending'
         ↓
Error Handling?
├─ YES → Show Error Alert, Keep Form Data
└─ NO → Continue
         ↓
Show Success Message
Wait 3 Seconds
Auto-Reset Form
```

## File Structure

```
atlamed/
├── src/
│   ├── pages/
│   │   ├── LandingPage.tsx          ✅ Newsletter signup section
│   │   ├── AddListingPage.tsx       ✅ Supabase submission handler
│   │   └── ...
│   │
│   ├── components/
│   │   ├── EmailSignupForm.tsx      ✅ NEW - Reusable signup form
│   │   ├── AuthModals.tsx           ✅ Newsletter checkbox added
│   │   ├── GeneProofSponsored.tsx   ✅ Image path fixed
│   │   ├── ProfessionalProviderShowcase.tsx  ✅ Image path fixed
│   │   └── ...
│   │
│   └── lib/
│       └── supabase.ts              (existing client)
│
├── public/
│   └── images/                      ✅ All 20 images verified
│       ├── practitioners/ (9 files)
│       └── *.jpg, *.png (11 files)
│
├── supabase/
│   └── tables/
│       ├── email_signups.sql        ✅ NEW - Email collection table
│       ├── provider_submissions.sql  (existing)
│       └── ...
│
└── docs/
    ├── form_integration_email_collection_report.md  ✅ Comprehensive guide
    ├── IMPLEMENTATION_COMPLETE.md    ✅ Quick summary
    └── ...

Root:
└── COMPLETION_CHECKLIST.md          ✅ Full checklist
```

## Component Hierarchy

```
App
├── LandingPage
│   ├── EmailSignupForm              ✅ Newsletter section
│   ├── FeaturedPractitioners
│   ├── GeneProofSponsored           ✅ Fixed image paths
│   ├── ProfessionalProviderShowcase ✅ Fixed image paths
│   └── ProviderListingCTA
│
├── AddListingPage                   ✅ Supabase integration
│   └── Form with 20+ fields
│       └── Submits to Supabase
│
├── DirectoryPage
│   └── PractitionerCards
│
├── Header
│   └── AuthModals                   ✅ Newsletter checkbox
│       ├── LoginModal
│       └── RegisterModal            ✅ Newsletter signup
│
└── ...
```

## State Management

### AddListingPage State
```typescript
const [formData, setFormData] = useState({
  firstName, lastName, email, phone,
  credentials, specialty, yearsExperience, licenseNumber,
  practiceName, practiceAddress, city, state, zipCode, website,
  servicesOffered, acceptsInsurance, telehealth, consultationFee,
  bio, specializations, agreeToTerms
});

const [submitted, setSubmitted] = useState(false);        // Success state
const [errors, setErrors] = useState<Record<...>>({});   // Validation errors
const [isLoading, setIsLoading] = useState(false);        // Submission loading
const [submitError, setSubmitError] = useState('');       // Submission error
```

### EmailSignupForm State
```typescript
const [email, setEmail] = useState('');
const [isLoading, setIsLoading] = useState(false);
const [message, setMessage] = useState<{
  type: 'success' | 'error';
  text: string;
} | null>(null);
```

### AuthModals State
```typescript
const [loginData, setLoginData] = useState({
  email: '', password: ''
});

const [registerData, setRegisterData] = useState({
  fullName: '', email: '', password: '', confirmPassword: '',
  userType: 'patient',
  addListing: false,
  subscribeNewsletter: true      // ✅ NEW
});

const [error, setError] = useState('');
const [loading, setLoading] = useState(false);
const [success, setSuccess] = useState('');
```

## Validation Rules

### EmailSignupForm
- Email must match regex: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
- Email required (can't be empty)

### AddListingPage
- First Name: required
- Last Name: required
- Email: required + valid format
- Phone: required
- Credentials: required
- Specialty: required
- License Number: required
- Practice Name: required
- Address: required
- City: required
- State: required
- ZIP Code: required
- Bio: required
- Terms: must be checked

### AuthModals (Registration)
- Full Name: required
- Email: required + valid format
- Password: required, min 8 characters
- Confirm Password: must match password

## Security Features

### RLS (Row Level Security)
- email_signups:
  - Public INSERT: Anyone can signup
  - Public SELECT: Anyone can view
  - Service role UPDATE/DELETE: Admin only

- provider_submissions:
  - Existing RLS policies maintained
  - User can view own submissions
  - Admin/service role can manage all

### Validation
- Client-side: Email format, required fields
- Server-side: UNIQUE constraint on email

### Error Handling
- Graceful duplicate handling (UNIQUE constraint)
- Silent failure for duplicate emails in newsletter signup
- Detailed error messages in practice listing form
- TypeScript type safety for all Supabase queries

## Performance Considerations

1. **Form Validation:** Real-time client-side checks
2. **Async Submission:** Non-blocking form submission
3. **Loading States:** Visual feedback during submission
4. **Database Indexes:** email_signups has indexes on email and source
5. **Component Reusability:** EmailSignupForm used across multiple pages

## Future Extensibility

```
New Signup Sources:
├── 'contact' → ContactPage form
├── 'email_verification' → Email confirmation
└── Custom sources as needed

Newsletter Management:
├── Preference center
├── Unsubscribe links
└── Segment tracking

Admin Features:
├── Email export
├── List management
├── Campaign sending
└── Analytics dashboard
```
