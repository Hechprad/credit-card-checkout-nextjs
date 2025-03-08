# 🚀 Credit Card Checkout Next.JS 15

![React](https://img.shields.io/badge/React.js-19-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-15-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-✔-blue.svg)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-✔-green.svg)
![Zod](https://img.shields.io/badge/Zod-✔-purple.svg)
![ShadCN UI](https://img.shields.io/badge/ShadCN_UI-✔-yellow.svg)
![ESLint](https://img.shields.io/badge/ESLint-✔-red.svg)
![Prettier](https://img.shields.io/badge/Prettier-✔-orange.svg)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-✔-blue.svg)
![Vercel](https://img.shields.io/badge/Vercel-✔-black.svg)

## 🌟 Overview

This project is built with **Next.js 15**, **TypeScript**, and **Tailwind CSS** to provide a modern and scalable web application. It includes **React Hook Form**, **Zod** for form validation, **ShadCN UI** for beautiful components, and follows best coding practices with **ESLint**, **Prettier**, and **Husky**. CI/CD is handled by **GitHub Actions** with automatic deployments to **Vercel**.

## 🚀 Live Demo

🔗 **[Check out the deployed application here!](https://credit-card-checkout-nextjs.vercel.app/)**

## 📖 Table of Contents

- [🚀 Credit Card Checkout Next.JS 15](#-credit-card-checkout-nextjs-15)
  - [🌟 Overview](#-overview)
  - [🚀 Live Demo](#-live-demo)
  - [📖 Table of Contents](#-table-of-contents)
  - [🚀 Project Setup](#-project-setup)
  - [🛠 Running Tests](#-running-tests)
  - [📂 Project Structure](#-project-structure)
  - [🌍 Available Routes](#-available-routes)
  - [🤖 GitHub Actions](#-github-actions)
  - [🔮 Future Improvements](#-future-improvements)
  - [👤 Author](#-author)
  - [📜 License](#-license)

## 🚀 Project Setup

To get started, make sure you have **Node.js >= 22** and **npm >= 10** installed.

```bash
# Clone the repository
git clone https://github.com/Hechprad/credit-card-checkout-nextjs.git
cd credit-card-checkout-nextjs

# Install dependencies
npm install

# Start the development server
npm run dev
```

## 🛠 Running Tests

```bash
# Run all tests
npm test

# Run all tests with watch mode
npm test:watch

# Run tests with coverage
npm run test:coverage
```

## 📂 Project Structure

```bash
📦 project-name
 ┣ 📂 .github             # GitHub-related workflows (e.g., Actions, issue templates)
 ┣ 📂 .husky              # Husky configuration for pre-commit and pre-push hooks
 ┣ 📂 .vscode             # VS Code settings and extensions for the project
 ┣ 📂 src                 # Main source code folder
 ┃ ┣ 📂 app               # Next.js App Router structure
 ┃ ┣ 📂 assets            # Static assets (images, icons, bgs, etc.)
 ┃ ┣ 📂 components        # Reusable UI components
 ┃ ┣ 📂 config            # Application configuration files (Jest)
 ┃ ┣ 📂 lib               # Utility functions and helpers (ShadCN)
 ┃ ┣ 📂 services          # API calls and business logic
 ┃ ┣ 📂 styles            # Global styles (Tailwind configurations, custom styles)
 ┃ ┣ 📂 types             # TypeScript type definitions
 ┣ 📜 .editorconfig       # Code style consistency across different editors
 ┣ 📜 .gitattributes      # Git configuration (e.g., line endings, file handling)
 ┣ 📜 .gitignore          # Files and folders to be ignored by Git
 ┣ 📜 .prettierignore     # Files ignored by Prettier formatting
 ┣ 📜 .prettierrc.json    # Prettier formatting rules
 ┣ 📜 components.json     # ShadCN UI component registry
 ┣ 📜 eslint.config.mjs   # ESLint configuration file
 ┣ 📜 jest.config.ts      # Jest configuration for unit testing
 ┣ 📜 next.config.ts      # Next.js configuration file
 ┣ 📜 package.json        # Project dependencies, scripts, and metadata
 ┣ 📜 postcss.config.mjs  # PostCSS configuration for Tailwind
 ┣ 📜 README.md           # Project documentation
 ┣ 📜 tsconfig.json       # TypeScript compiler settings
```

## 🌍 Available Routes

| Route                    | Description                |
| ------------------------ | -------------------------- |
| `/`                      | Home page                  |
| `/checkout/cart`         | Empty page - Step 1        |
| `/checkout/payment`      | Main feature page - Step 2 |
| `/checkout/confirmation` | Empty page - Step 3        |
| `/???`                   | Not found page             |

## 🤖 GitHub Actions

This project includes a **CI/CD pipeline** with GitHub Actions:

- **Lint & Test**: Runs ESLint and Jest tests on pull requests
- **Build & Deploy**: Deploys to Vercel on push to the `main` branch

## 🔮 Future Improvements

- [ ] Implement **more unit tests** 🧪
- [ ] Add **internationalization (i18n)** 🌍
- [ ] Build **cart and confirmation pages** 📃

## 👤 Author

**Jorge Hecherat**
💻 [GitHub](https://github.com/hechprad) • 📧 [Email](mailto:hecherat@gmail.com)

## 📜 License

This project is licensed under the **MIT License**. Feel free to use and modify it!
