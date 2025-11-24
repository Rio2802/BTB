# 3D Trading Academy 🎓📊

A modern, interactive trading education platform built with Next.js 14, featuring real-time candlestick chart animations and a comprehensive Forex curriculum.

## 🚀 Features

- **14 Comprehensive Modules**: From Forex basics to advanced institutional trading concepts
- **Live Candlestick Chart**: TradingView-style chart with real-time candle formation
- **Beautiful UI**: Modern design with smooth animations using Framer Motion and GSAP
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Contact Form**: Integrated with Resend for email notifications
- **3D Elements**: Ready for Spline 3D scene integration

## 📚 Curriculum Highlights

1. Basics of Forex & Terminologies
2. Candlestick Theory
3. Market Structure Mapping
4. Price Action Chart Patterns
5. Volume & Correlations
6. Market Sessions
7. BOS & CHOCH
8. Order Block & Breaker Block
9. FVG / Imbalance
10. Liquidity Concept
11. Topdown Analysis
12. Strategy Building / Trade Setup
13. Risk Management
14. Psychology Management

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, GSAP
- **3D**: Spline (ready to integrate)
- **Email**: Resend
- **Icons**: Lucide React

## 📦 Installation

1. Clone the repository:
```bash
cd 3d-trading-academy
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory:
```
RESEND_API_KEY=your_resend_api_key_here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
3d-trading-academy/
├── src/
│   ├── app/
│   │   ├── api/send/          # Resend email API
│   │   ├── courses/           # Curriculum page
│   │   ├── join/              # Enrollment page
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/
│   │   ├── CandlestickChart.tsx
│   │   ├── Hero.tsx
│   │   ├── SyllabusGrid.tsx
│   │   ├── ModuleCard.tsx
│   │   ├── Psychology.tsx
│   │   ├── JoinForm.tsx
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   ├── syllabus.ts
│   │   └── testimonials.ts
│   ├── lib/
│   │   ├── priceGenerator.ts
│   │   └── utils.ts
│   └── types/
│       ├── candle.ts
│       └── syllabus.ts
└── public/
```

## 🎨 Candlestick Chart

The `CandlestickChart` component features:

- **Real-time Updates**: New candles form every 2 seconds (configurable)
- **Dynamic Price Movement**: Realistic price simulation with volatility
- **Smooth Animations**: GSAP-powered chart scrolling
- **Current Candle Highlighting**: Visual indication of the active candle
- **Price Line**: Real-time current price indicator

### Usage

```tsx
<CandlestickChart
  height={400}
  candleWidth={14}
  visibleCandles={40}
  interval={2000}
  initialPrice={1.0950}
/>
```

## 🎯 Key Components

### Hero Section
- Animated text with gradient effects
- Live candlestick chart demo
- Key statistics display
- Call-to-action buttons

### Syllabus Grid
- All 14 modules with detailed topics
- Difficulty-based color coding
- Hover animations
- Preview/Full view modes

### Psychology Section
- 4 key mindset pillars
- Inspirational quotes
- Clean card layouts

## 📧 Email Integration

The contact form uses Resend API. To set up:

1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Update `.env.local` with your key
4. Update the `from` email in `src/app/api/send/route.ts`

## 🚧 Future Enhancements

- [ ] Integrate Spline 3D trading room scene
- [ ] Add student dashboard with authentication
- [ ] Implement LMS with video lessons
- [ ] Create quiz/assessment system
- [ ] Add multiple chart timeframes
- [ ] Build paper trading simulator
- [ ] Add technical indicators (RSI, MACD)

## 🎓 Pricing Plans

- **Starter**: $297 - Complete curriculum with lifetime access
- **Pro**: $497 - Includes mentorship and live trading room
- **Elite**: $997 - Unlimited mentorship and custom strategies

## 📱 Pages

- **Home** (`/`): Hero, features, syllabus preview, psychology
- **Courses** (`/courses`): Full curriculum with pricing
- **Join** (`/join`): Enrollment form with testimonials

## 🎨 Design Principles

- **Dark Theme**: Professional trading aesthetic
- **Blue Accents**: Trust and professionalism
- **Smooth Animations**: Enhanced user experience
- **Mobile-First**: Responsive on all devices

## 🤝 Contributing

This is a single-purpose educational platform. For custom modifications, feel free to fork and adapt.

## 📄 License

MIT License - feel free to use and modify for your trading academy.

## 🙏 Credits

Built with passion for trading education using modern web technologies.

---

**Start your trading journey today!** 🚀📈
