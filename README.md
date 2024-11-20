# Mortgage Calculator

A simple web application for calculating mortgage payments using various parameters

## Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [PNPM](https://pnpm.io/) (preferred package manager)

## Setup Instructions

1. Clone the repository or download the project files:

   ```bash
   git clone <repository-url>
   cd mortgage-calculator
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

## Running the Application Locally

1. Start the development server:

   ```bash
   pnpm dev
   ```

2. Open your browser and navigate to:

   ```
   http://localhost:5173
   ```

## Building for Production

To create an optimized production build:

```bash
pnpm build
```

The output files will be located in the `dist` directory.

## Linting and Code Quality

Run ESLint to check for code issues:

```bash
pnpm lint
```

## File Structure

- **src/**: Contains all source code, including components, styles, and utilities.
- **public/**: Static assets like images and meta files.
- **package.json**: Project dependencies and scripts.
- **postcss.config.js**: PostCSS configuration for Tailwind CSS and Autoprefixer.
- **tailwind.config.js**: Tailwind CSS configuration.
- **vite.config.ts**: Vite configuration file for building the application.
