# Soulsadhna - Habit Building Program

![Soulsadhna Banner](public/images/banner.png)

Soulsadhna is India's first comprehensive habit-building program that combines traditional wellness practices with modern techniques. Our platform offers yoga, meditation, and fitness classes designed to help users build lasting healthy habits.

## 🌟 Features

- **Live Online Classes**: Daily yoga and fitness sessions with expert trainers
- **Flexible Scheduling**: Multiple time slots to fit your routine
- **Progress Tracking**: Monitor your wellness journey
- **Community Support**: Connect with like-minded individuals
- **Expert Guidance**: Learn from certified instructors
- **Multi-device Access**: Join from anywhere, on any device

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn package manager
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/soulsadhna.git
cd soulsadhna
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```
Update the `.env.local` file with your configuration.

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3001](http://localhost:3001) to view the application.

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Authentication**: Custom Authentication
- **Database**: [MongoDB](https://www.mongodb.com/atlas)
- **Deployment**: [Vercel](https://vercel.com)

## 📱 Key Components

- **Authentication System**: Secure user authentication with SSO options
- **Live Session Management**: Real-time class scheduling and attendance
- **Progress Dashboard**: Personal progress tracking and analytics
- **Community Features**: User interaction and support system
- **Admin Panel**: Comprehensive management dashboard

## 🔧 Development

### Testing
```bash
# Run tests
npm run test

# Run tests with coverage
npm run test:coverage
```

## 🚀 Deployment

The application is automatically deployed to Vercel with each push to the main branch.

For manual deployment:
```bash
npm run build
npm run start
```