# RequirePay

RequirePay is a modern financial management platform that provides seamless access to corporate cards, multi-currency accounts, and global payouts, all in one account. Built with Next.js and TypeScript, it offers a robust and user-friendly interface for businesses to manage their financial operations.

## Features

- **User Authentication**
  - Secure login and registration system
  - Password recovery functionality
  - Session management

- **Dashboard**
  - Overview of financial metrics
  - Recent transactions
  - Quick access to key features

- **Profile Management**
  - User profile customization
  - Business information management
  - Settings configuration

- **Modern UI/UX**
  - Responsive design
  - Dark mode support
  - Intuitive navigation
  - Loading states and animations

## Tech Stack

- **Frontend**
  - Next.js 14 (App Router)
  - TypeScript
  - Tailwind CSS
  - Shadcn UI Components
  - React Hook Form
  - Zod Validation

- **Development Tools**
  - ESLint
  - Prettier
  - TypeScript
  - Husky (Git hooks)

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/requirepay.git
   cd requirepay
   ```

2. Install dependencies:
   ```bash
   cd client
   npm install
   ```

3. Create a `.env.local` file in the client directory with the following variables:
   ```
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
client/
├── src/
│   ├── app/                 # Next.js app router pages
│   ├── components/          # Reusable UI components
│   ├── lib/                 # Utility functions and configurations
│   └── styles/             # Global styles and Tailwind config
├── public/                 # Static assets
└── package.json           # Project dependencies and scripts
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [TypeScript](https://www.typescriptlang.org/)

  
