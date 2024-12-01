# HeaderSentry

<div align="center">
  <h3>Real-time Security Header Analysis Tool</h3>
  <p>Analyze, understand, and implement web security headers with confidence.</p>

  [![TypeScript](https://img.shields.io/badge/TypeScript-4.9-blue.svg)](https://www.typescriptlang.org/)
  [![Next.js](https://img.shields.io/badge/Next.js-14.0-black.svg)](https://nextjs.org/)
  [![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
  ![Stage](https://img.shields.io/badge/stage-beta-orange)
</div>

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/dmc2015/header-sentry.git

# Navigate to the project
cd header-sentry

# Install dependencies
npm install

# Run the development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

## 🛡️ Features

- **Real-time Header Analysis**: Instantly check any website's security headers
- **Comprehensive Coverage**: Analysis of 10 critical security headers
- **Educational Context**: Learn about each header's purpose and importance
- **Implementation Guidance**: Get practical code snippets and best practices

## 🔧 Technology Stack

- Framework: [Next.js 14](https://nextjs.org/)
- Language: [TypeScript](https://www.typescriptlang.org/)
- Styling: [Tailwind CSS](https://tailwindcss.com/)
- Icons: [Lucide](https://lucide.dev/)
- Development Tools:
  - ESLint
  - Prettier
  - Jest (Coming Soon)
  - Cypress (Coming Soon)

## 📖 Documentation

### Project Structure
```
header-sentry/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   └── check-headers/ # Header checking endpoint
│   └── page.tsx          # Main page
├── components/            # React components
│   ├── header-checker.tsx
│   └── header-result.tsx
├── types/                # TypeScript types
│   └── headers.ts       # Header definitions
└── tests/               # Test files (Coming Soon)
```

### Security Headers Analyzed

HeaderSentry analyzes the following security headers:

1. **Content-Security-Policy (CSP)**
   - Prevents XSS attacks
   - Controls resource loading

2. **Strict-Transport-Security (HSTS)**
   - Enforces HTTPS
   - Prevents downgrade attacks

3. **X-Frame-Options**
   - Prevents clickjacking
   - Controls frame embedding

[View full list in documentation](docs/HEADERS.md)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/dmc2015/header-sentry.git
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

### Testing

```bash
# Run unit tests
npm test

# Run e2e tests
npm run test:e2e

# Run all tests
npm run test:all
```

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

### Development Process

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [OWASP Secure Headers Project](https://owasp.org/www-project-secure-headers/)
- [Mozilla Web Security Guidelines](https://infosec.mozilla.org/guidelines/web_security)