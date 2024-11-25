import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import PostForm from '../components/PostForm'

const CreatePost = () => (
    <div className="container mx-auto py-8">

        <div className="flex justify-between">

            <h1 className="text-3xl font-bold mb-8"><span className='text-primary'>Add</span> Blog Posts</h1> 
            <Link
                to={{
                    pathname: "/"
                }}
            >
                <Button className="outline outline-primary bg-inherit p-6">
                    Visit Post
                </Button>
            </Link>
        </div>

       <div className='w-[600px] mx-auto mt-10'>
        <PostForm />
       </div>

    </div>
)

export default CreatePost