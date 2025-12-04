# ChatApp Todo List

A small React + Redux Toolkit todo list app used for learning and demos.

This README contains just enough information to get the app running locally.

Prerequisites
- Node.js v16 or v18 installed (LTS recommended)

Install
1. Install dependencies:

```bash
npm install
```

Run (development)

```bash
npm start
```

Open http://localhost:3000 in your browser. The dev server reloads on code changes.

Build (production)

```bash
npm run build
```

This produces a `build/` folder you can serve with any static server (for example: `npx serve -s build`).

Tests

```bash
npm test
```

Notes
- This project uses `react-scripts@5.x` and TypeScript is pinned to `^4.9.x` for compatibility.
- The `uuid` package provides its own TypeScript definitions, so no extra `@types/` package is required.
- If you want to modernize the dev toolchain (reduce transitive vulnerabilities), consider migrating from Create React App to a Vite setup.