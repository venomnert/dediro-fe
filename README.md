This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## FAQ

### Which router is the project using?

This project is using the **App Router**. You can learn more about it in the [Next.js documentation](https://nextjs.org/docs/app/building-your-application/routing).

### General Guidelines

- **Consistent Naming Conventions:** Use camelCase for variables and functions, PascalCase for classes and components, and UPPER_SNAKE_CASE for constants.
- **Comments:** Write clear and concise comments. Use them to explain the "why" rather than the "what." Avoid redundant comments.
- **Indentation:** Use 2 spaces or 4 spaces consistently for indentation. Avoid using tabs.
- **Line Length:** Limit lines to 80-100 characters to enhance readability.
- **File Structure:** Organize files by feature or functionality. Keep related files together.

### Front-End Guidelines

#### HTML

- **Semantic HTML:** Use appropriate HTML5 tags to enhance accessibility and SEO.
- **Indentation:** Indent nested elements consistently.
- **Attributes Order:** Follow a consistent order: **`id`**, **`class`**, **`name`**, **`data-*`**, **`src`**, **`alt`**, **`type`**, **`href`**, **`title`**, **`role`**, **`aria-*`**.

```html <!-- Example: -->
<button id="submit" class="btn primary" type="button">Submit</button>
```

### CSS/SCSS

- **Naming Conventions:** Use BEM (Block Element Modifier) for naming classes.
- **Modularity:** Break down styles into smaller, reusable components.
- **Variables:** Use variables for colors, font sizes, spacing, etc.
- **ESLint:** Use ESLint with a predefined configuration (e.g., Airbnb, Google).

### JavaScript / TypeScript

- **Modules:** Use ES6 modules and import/export syntax.
- **Arrow Functions:** Prefer arrow functions for anonymous functions.
- **Destructuring:** Use object and array destructuring when possible.
- **Async/Await:** Use async/await for asynchronous code.

```js
// Example:
import { useState, useEffect } from 'react';

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
```
