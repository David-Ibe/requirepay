# RequirePay - Business Payment Platform

## Overview
RequirePay is a modern business payment platform built with Next.js, Supabase, and TypeScript. It provides businesses with user authentication, profile management, and payment processing capabilities.

## Features
- 🔐 Secure Authentication with Email Verification
- 👤 Business Profile Management
- 💼 Dashboard Interface
- 🎨 Responsive Design with Tailwind CSS
- 🔄 Real-time Updates
- ⚡ Fast Performance
- 📱 Mobile-Friendly Interface

## Tech Stack
- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **Backend**: Supabase (Auth, Database)
- **State Management**: React Hooks
- **Styling**: Tailwind CSS
- **Forms**: React Hook Form
- **Notifications**: React Hot Toast

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Supabase account

### Installation
1. Clone the repository
bash
git clone https://github.com/yourusername/requirepay.git
cd requirepay

Fill in your Supabase credentials:

NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
bash
npm run dev
sql
-- Create business_profiles table
CREATE TABLE business_profiles (
user_id UUID REFERENCES auth.users(id),
email TEXT NOT NULL,
first_name TEXT NOT NULL,
last_name TEXT NOT NULL,
business_name TEXT NOT NULL,
business_website TEXT,
phone_number TEXT,
country_code TEXT,
created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
PRIMARY KEY (user_id)
);
-- Enable RLS
ALTER TABLE business_profiles ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view own profile"
ON business_profiles FOR SELECT
USING (auth.uid() = user_id);
CREATE POLICY "Users can update own profile"
ON business_profiles FOR UPDATE
USING (auth.uid() = user_id);

requirepay/
├── src/
│ ├── app/
│ │ ├── dashboard/
│ │ ├── login/
│ │ ├── register/
│ │ └── verification/
│ ├── components/
│ │ └── ProfileEditor.tsx
│ └── lib/
│ └── supabase.ts
├── public/
└── package.json

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
- Next.js Team
- Supabase Team
- Tailwind CSS Team
  
This README provides:
Project overview
Feature list
Tech stack details
Setup instructions
Database configuration
Project structure
Contributing guidelines

  
