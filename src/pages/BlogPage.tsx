import Post from "../components/Post"
import React from "react"
import { Button } from "../components/ui/button"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { postSelector } from "../store/slices/postSlices"


export default function BlogPage() {

    const posts = useSelector(postSelector)

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
                {posts.map((post) => (
                    <Post key={post.id} post={post} />
                ))}
            </div>
        </div>
    )
}

