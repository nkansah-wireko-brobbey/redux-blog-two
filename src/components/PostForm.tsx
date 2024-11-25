import React from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'

const PostForm = ({ submitData }: { submitData: ({ title,excerpt }: { title: string, excerpt: string }) => void }) => {

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();


        const form = e.target as HTMLFormElement

        const title = (form.elements.namedItem('title') as HTMLInputElement).value;
        const excerpt = (form.elements.namedItem('content') as HTMLInputElement).value;


        submitData({ title, excerpt })
    }

    return (
        <>
            <form onSubmit={submitHandler} className='flex flex-col gap-8'>
                <Input type='text' name='title' className='p-6' placeholder='Enter the title' />
                <Textarea rows={6} name='content' placeholder='Enter the content for the post' className='p-6' />
                <Button className="bg-primary p-6">
                    Create Post
                </Button>
            </form>
        </>
    )
}

export default PostForm