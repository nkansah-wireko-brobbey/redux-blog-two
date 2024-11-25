import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { Post } from "../../interfaces/postInterface";
import { RootState } from "../store";

const initialState: Post[] = [
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




const postSlices = createSlice({
    name: 'posts',
    initialState,
    reducers:{
        addPost: {

            reducer: (state, action: PayloadAction<Post>)=>{
                    state.push(action.payload)
                },
            
            prepare: (title:string, excerpt:string)=>{
                return {
                    payload:{
                        id: nanoid(),
                        title,
                        excerpt,
                        date: new Date().toISOString(),
                        author: ""
                    }
                }
            }


    }
}
    
})

export const {addPost} = postSlices.actions

export const postSelector = (state: RootState)=> state.posts;

export default postSlices.reducer