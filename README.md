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

## todo

how can i build this in to a firewall ?
checking eevery request goign in an coming out and adding behavior if conditions aren't meant ?
maybe an all in one next.js security plugin
logging
obersvaibility
auth
author
visualization
sentry agent


--------

---
title: header-sentry
description: HeaderSentry helps developers secure their web applications by analyzing HTTP security headers in real-time. The tool checks for ten essential security headers, explains each header's purpose and security implications, and provides clear implementation guidance for developers.
date: "2024-12-01"
url: https://header-sentry.vercel.app
published: true
repository: "dmc2015/header-sentry"
---

<div class="flex items-center space-x-5">
  <span>
    <img src="/header-sentry-logo.svg" alt="HeaderSentry" width="300" height="300"/>
  </span>
  <span>
    Strengthen your web application's security posture by analyzing, understanding, and implementing critical security headers. HeaderSentry provides real-time analysis, educational insights, and practical implementation guidance for developers and security professionals.
  </span>
</div>

###### Instant Security Analysis
Check your website's security headers in real-time and get immediate feedback on your security posture

###### Educational Insights
Learn about each security header's purpose, risks it mitigates, and when to implement it

###### Implementation Guidance
Get practical, copy-paste ready code snippets for proper security header implementation

###### Situational Context
Understand when and why each security header is needed with clear, contextual explanations

## Key Features

### 🛡️ Comprehensive Security Scanning
- Real-time analysis of 10 critical security headers
- Visual indicators for present/missing headers
- Priority-based recommendations
- Situational context for each header

### 📚 Developer Education
- Detailed explanations of security risks
- Real-world vulnerability examples
- Best practices for implementation
- Use-case specific guidance

### 💻 Developer Experience
- Clean, intuitive interface
- Copy-ready implementation snippets
- Batch URL processing
- Exportable results

## Technology Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide
- **API**: Edge Runtime
- **Testing**: Jest, Cypress (Coming Soon)

## Security Headers Analyzed

| Header | Protection | Priority |
|--------|------------|----------|
| Content-Security-Policy | XSS, Injection Attacks | Critical |
| Strict-Transport-Security | MITM Attacks | Critical |
| X-Frame-Options | Clickjacking | High |
| X-Content-Type-Options | MIME Sniffing | Medium |
| Permissions-Policy | Feature Control | High |
| Referrer-Policy | Information Leakage | Medium |
| Cross-Origin Headers | Resource Isolation | Medium |
| Cache-Control | Data Exposure | Medium |
| Clear-Site-Data | Data Cleanup | Medium |

## Roadmap

### Q1 2024
- [ ] Advanced header value validation
- [ ] Security score calculation
- [ ] PDF report generation
- [ ] CI/CD integration

### Q2 2024
- [ ] Batch URL processing
- [ ] Custom header rules
- [ ] API access
- [ ] Team collaboration features

## Made With

- 💡 Modern web security principles
- 🚀 Performance-first architecture
- 🎯 Developer-centric design
- 📊 Real-time analysis

## Open Source

HeaderSentry is open source and welcomes contributions. Whether you're fixing bugs, improving documentation, or adding new features, your contributions are welcome.

Visit [github.com/dmc2015/header-sentry](https://github.com/dmc2015/header-sentry) to contribute.