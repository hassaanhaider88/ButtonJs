const BlogData = [
  {
    _id: "blog1a2b3c4d5e6f7g8h9i0",
    blogImg: "https://i.pinimg.com/736x/05/01/1c/05011ce43970ed0246d8e87746e39f84.jpg",
    blogName: "Mastering React Components",
    blogTag: "React",
    blogContent:
      "React components are the building blocks of any React app. Whether you're creating functional components or class components, understanding their lifecycle, props, and state is crucial for dynamic and responsive applications. In this blog, we will explore how components interact, the concept of composition vs inheritance, and how to optimize your components for performance using memoization and hooks like useMemo and useCallback. You'll also learn the best practices for splitting UI into smaller components for better code organization and reusability. By the end of this article, you will be confident in building scalable interfaces with React.",
    blogCreatedBy: "user123",
  },
  {
    _id: "blog2a2b3c4d5e6f7g8h9i0",
    blogImg: "https://i.pinimg.com/1200x/9f/ba/94/9fba945c7b794a14e68f2d0f935f6c19.jpg",
    blogName: "Understanding JavaScript Closures",
    blogTag: "JavaScript",
    blogContent:
      "Closures are a powerful feature in JavaScript that allow functions to retain access to their lexical scope even when executed outside of that scope. This blog covers how closures work, where they're used, and common interview questions based on closures. By the end, you'll be able to explain closures confidently and use them in real-world applications, like memoization and module patterns.",
    blogCreatedBy: "user123",
  },
  {
    _id: "blog3a2b3c4d5e6f7g8h9i0",
    blogImg: "https://i.pinimg.com/1200x/00/c8/68/00c868049eff59f3de309bdeb9b141ab.jpg",
    blogName: "CSS Grid vs Flexbox: Which One To Use?",
    blogTag: "CSS",
    blogContent:
      "CSS Grid and Flexbox are two modern layout systems in CSS. While Flexbox is one-dimensional, Grid is two-dimensional. This article walks you through their differences, use cases, and when to use one over the other. We’ll go over examples where each excels, and how combining both can lead to powerful, responsive designs.",
    blogCreatedBy: "user456",
  },
  {
    _id: "blog4a2b3c4d5e6f7g8h9i0",
    blogImg: "https://i.pinimg.com/1200x/1a/cc/fa/1accfaad36f50dc6397b6ea9755ed640.jpg",
    blogName: "Introduction to Web Accessibility",
    blogTag: "Accessibility",
    blogContent:
      "Web accessibility ensures that websites can be used by everyone, including people with disabilities. In this blog, learn about semantic HTML, ARIA roles, contrast ratios, and keyboard navigation. We'll also discuss tools like Lighthouse and screen readers, helping you make your apps more inclusive.",
    blogCreatedBy: "user789",
  },
  {
    _id: "blog5a2b3c4d5e6f7g8h9i0",
    blogImg: "https://i.pinimg.com/1200x/a8/93/03/a8930322627faa99fa041fffb1e30d40.jpg",
    blogName: "Top 10 VS Code Extensions for Front-End Developers",
    blogTag: "Tools",
    blogContent:
      "VS Code is the most popular code editor among web developers. This blog highlights the top 10 extensions that boost productivity, such as Prettier, ESLint, Live Server, GitLens, and Tailwind IntelliSense. Each tool is explained with its purpose and how it integrates with front-end workflows.",
    blogCreatedBy: "user123",
  },
  {
    _id: "blog6a2b3c4d5e6f7g8h9i0",
    blogImg: "https://i.pinimg.com/736x/d5/47/bc/d547bca247f8843e56889e2dc25a5c5b.jpg",
    blogName: "Building REST APIs with Node.js and Express",
    blogTag: "Node.js",
    blogContent:
      "Learn how to create powerful RESTful APIs using Node.js and Express. This tutorial walks you through setting up an Express server, defining routes, handling middleware, and connecting to MongoDB. We’ll also cover best practices like environment variables, request validation, and error handling.",
    blogCreatedBy: "user987",
  },
  {
    _id: "blog7a2b3c4d5e6f7g8h9i0",
    blogImg: "https://i.pinimg.com/1200x/e4/b6/31/e4b6315ad9fc1223c32c3625fb4f5a35.jpg",
    blogName: "NoSQL vs SQL: Choosing the Right Database",
    blogTag: "Database",
    blogContent:
      "Databases are the backbone of every application. This article explores the core differences between SQL (like PostgreSQL, MySQL) and NoSQL (MongoDB, Firebase). You’ll learn when to use each based on data structure, scalability, and performance requirements.",
    blogCreatedBy: "user456",
  },
  {
    _id: "blog8a2b3c4d5e6f7g8h9i0",
    blogImg: "https://i.pinimg.com/1200x/e0/99/98/e09998a27369a28de1fa4473d60786ac.jpg",
    blogName: "SEO Tips for Web Developers",
    blogTag: "SEO",
    blogContent:
      "SEO isn't just for marketers — developers play a huge role. This blog shares essential tips like proper HTML structure, meta tags, image alt attributes, page speed optimization, and mobile responsiveness to help your site rank better on Google.",
    blogCreatedBy: "user321",
  },
  {
    _id: "blog9a2b3c4d5e6f7g8h9i0",
    blogImg: "https://i.pinimg.com/736x/f8/dd/66/f8dd667f419cb4db2410b30f39bffa45.jpg",
    blogName: "Optimizing Web Performance",
    blogTag: "Performance",
    blogContent:
      "Page speed can make or break your user experience. This article explores techniques like lazy loading, code splitting, caching, image compression, and minimizing JavaScript to improve load time and user retention.",
    blogCreatedBy: "user654",
  },
  {
    _id: "blog10a2b3c4d5e6f7g8h9i0",
    blogImg: "https://i.pinimg.com/736x/b6/41/ca/b641ca4f72a2e3a7589503b55cf51f99.jpg",
    blogName: "TypeScript for JavaScript Developers",
    blogTag: "TypeScript",
    blogContent:
      "TypeScript brings static typing to JavaScript, helping catch bugs early and improve code readability. Learn how to get started, set up your project, and migrate JS code step-by-step. We’ll also cover interfaces, types, and generics.",
    blogCreatedBy: "user222",
  },
  {
    _id: "blog11a2b3c4d5e6f7g8h9i0",
    blogImg: "https://i.pinimg.com/1200x/fd/c4/35/fdc435e626be87e25f52e8fff03e8aba.jpg",
    blogName: "Modern Web Animations with GSAP",
    blogTag: "Animation",
    blogContent:
      "GSAP is a powerful JavaScript library for creating smooth, performant animations. This blog shows how to animate DOM elements, create scroll-triggered effects, and integrate GSAP with React for interactive UI experiences.",
    blogCreatedBy: "user999",
  },
  {
    _id: "blog12a2b3c4d5e6f7g8h9i0",
    blogImg: "https://i.pinimg.com/1200x/bb/65/1b/bb651b83647a11ab153c5c479b73ab8d.jpg",
    blogName: "Consuming REST APIs in React",
    blogTag: "API",
    blogContent:
      "Working with APIs is essential for modern web apps. Learn how to use `fetch` and `axios` in React, handle loading and error states, and manage async data with useEffect and custom hooks for cleaner, reusable code.",
    blogCreatedBy: "user123",
  },
  {
    _id: "blog13a2b3c4d5e6f7g8h9i0",
    blogImg: "https://i.pinimg.com/736x/f6/b7/7f/f6b77f354db412f9bd3c2aad879f1cd1.jpg",
    blogName: "Web Security Essentials Every Developer Should Know",
    blogTag: "Security",
    blogContent:
      "Security is often overlooked. This blog covers essential topics like HTTPS, Content Security Policy, Cross-Site Scripting (XSS), Cross-Site Request Forgery (CSRF), and how to secure authentication and sensitive data.",
    blogCreatedBy: "user456",
  },
  {
    _id: "blog14a2b3c4d5e6f7g8h9i0",
    blogImg: "https://i.pinimg.com/1200x/2f/70/02/2f70024be8146292a444f6e078cb6fef.jpg",
    blogName: "Deploying Apps with Vercel and Netlify",
    blogTag: "Deployment",
    blogContent:
      "Deploying your web app is easier than ever with platforms like Vercel and Netlify. Learn how to push your code from GitHub, configure custom domains, set up environment variables, and get your site live in minutes.",
    blogCreatedBy: "user987",
  },
  {
    _id: "blog15a2b3c4d5e6f7g8h9i0",
    blogImg: "https://i.pinimg.com/1200x/06/6c/75/066c756c33c13e435f01713c009686ee.jpg",
    blogName: "How AI is Changing Web Development",
    blogTag: "AI",
    blogContent:
      "AI tools like GitHub Copilot, ChatGPT, and design-to-code platforms are changing how we build apps. This blog explores how AI helps speed up coding, content generation, testing, and accessibility in front-end and full-stack projects.",
    blogCreatedBy: "user123",
  },
];


export default BlogData;