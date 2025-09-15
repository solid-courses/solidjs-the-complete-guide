export type Post = {
  id: string;
  title: string;
  content: string;
}

const posts: Array<Post> = [
  {
    id: "1",
    title: "How to Learn JavaScript in 2025",
    content: "JavaScript continues to evolve, and staying up-to-date with the latest trends is crucial for developers. In 2025, JavaScript frameworks like React, Vue, and Svelte are at the forefront of web development. This guide will walk you through the most effective methods for learning JavaScript, from beginner resources to advanced techniques.",
  },
  {
    id: "2",
    title: "The Rise of AI: What It Means for Developers",
    content: "Artificial Intelligence is no longer just a buzzword. With the development of machine learning models and natural language processing tools, AI is becoming an integral part of many industries. In this post, we explore how AI is reshaping the tech landscape and what developers need to know to stay ahead.",
  },
  {
    id: "3",
    title: "10 Best Web Development Tools to Use in 2025",
    content: "Web development tools evolve quickly. From IDEs to testing frameworks, developers are spoiled for choice in 2025. In this post, we review 10 essential tools for web developers, including code editors, design systems, and version control systems, to help streamline your development process.",
  },
  {
    id: "4",
    title: "Understanding Serverless Architecture for Beginners",
    content: "Serverless computing has gained significant attention in recent years as businesses move to the cloud. But what exactly is serverless architecture, and why should developers care? This article explains the basics of serverless computing, its benefits, and how to get started with serverless platforms like AWS Lambda and Azure Functions.",
  },
  {
    id: "5",
    title: "Exploring the Future of Front-End Frameworks",
    content: "In 2025, the front-end development landscape is more diverse than ever. While React and Vue are still widely used, newer frameworks like Svelte and SolidJS are gaining traction. This post takes a deep dive into these frameworks, comparing their performance, ease of use, and ecosystem support.",
  },
  {
    id: "6",
    title: "Why Cybersecurity is a Developer’s Responsibility",
    content: "As the digital world grows, so do the threats. Security breaches, data leaks, and hacking attempts are becoming more frequent. Developers play a crucial role in ensuring the applications they build are secure. This article outlines key security practices every developer should implement, from secure coding techniques to vulnerability testing.",
  },
  {
    id: "7",
    title: "Mastering Git: A Comprehensive Guide for Developers",
    content: "Git is an essential tool for modern software development. Whether you’re working on a team or as a solo developer, understanding version control is a must. In this post, we cover everything from basic Git commands to advanced strategies for managing repositories and collaborating on large projects.",
  },
  {
    id: "8",
    title: "The Importance of Responsive Design in 2025",
    content: "Responsive design is no longer optional; it’s a must. With the increasing use of mobile devices and varying screen sizes, ensuring that your websites look great on all devices is critical. This article explores the best practices for responsive web design and how to implement them using CSS Grid, Flexbox, and other modern tools.",
  },
  {
    id: "9",
    title: "Building Your First Progressive Web App (PWA)",
    content: "Progressive Web Apps combine the best of web and mobile applications. They’re fast, reliable, and offer a native app-like experience. If you're interested in building a PWA, this step-by-step guide will show you how to convert a simple web app into a progressive web app using service workers, app manifests, and other technologies.",
  },
  {
    id: "10",
    title: "The Future of E-Commerce: Trends to Watch",
    content: "E-commerce is constantly evolving. With new technologies, changing consumer behavior, and global economic factors, online shopping continues to grow in new directions. In this post, we discuss the key trends that are shaping the future of e-commerce, including voice commerce, AR/VR shopping, and AI-driven product recommendations.",
  },
];


export async function getServerSidePosts(): Promise<Array<Post>> {
  return posts;
}

export async function getServerSidePostById(id: string): Promise<Post | undefined> {
  return posts.find(item => item.id === id);
}