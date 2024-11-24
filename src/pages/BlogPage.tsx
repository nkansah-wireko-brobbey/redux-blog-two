import Post from "../components/Post"
import React from "react"

// This would typically come from an API or database
const blogPosts = [
  {
    id: "1",
    title: "Getting Started with Next.js",
    excerpt: "Learn how to build modern web applications with Next.js, the React framework for production.",
    date: "2023-06-01",
    author: "Jane Doe"
  },
  {
    id: "2",
    title: "The Power of Server Components",
    excerpt: "Explore how React Server Components can improve your application's performance and user experience.",
    date: "2023-06-15",
    author: "John Smith"
  },
  {
    id: "3",
    title: "Styling in Next.js: A Comprehensive Guide",
    excerpt: "Discover various styling options in Next.js, from CSS Modules to Tailwind CSS and styled-components.",
    date: "2023-07-01",
    author: "Alice Johnson"
  }
]

export default function BlogPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}

