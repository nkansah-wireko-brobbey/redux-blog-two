import Post from "../components/Post"
import React from "react"
import { Button } from "../components/ui/button"
import { Link } from "react-router-dom"

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
            <h1 className="text-3xl font-bold mb-8 flex justify-between">Blog Posts
                <Link
                    to={{
                        pathname: "/add-post"
                    }}
                >
                    <Button className="bg-primary p-6">
                        Add Post
                    </Button>
                </Link>
            </h1>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {blogPosts.map((post) => (
                    <Post key={post.id} post={post} />
                ))}
            </div>
        </div>
    )
}

