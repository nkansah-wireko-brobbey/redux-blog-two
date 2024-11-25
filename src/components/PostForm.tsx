import React from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'

const PostForm = () => {
  return (
    <>
 <form action="" className='flex flex-col gap-8'>
            <Input type='text' className='p-6' placeholder='Enter the title'/>
            <Textarea rows={6} placeholder='Enter the content for the post' className='p-6'/>
            <Button className="bg-primary p-6">
                Create Post
            </Button>
        </form>
    </>
  )
}

export default PostForm