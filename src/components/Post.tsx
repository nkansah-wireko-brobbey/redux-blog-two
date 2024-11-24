import { formatDate } from '../lib/utils'
import { Card, CardHeader, CardTitle, CardContent } from './ui/card'
import type { Post } from '../interfaces/postInterface'

const Post = ({post}:{post: Post}) => {
  return (
    <div> <Card key={post.id} className='bg-inherit text-inherit'>
    <CardHeader>
      <CardTitle>{post.title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>{ typeof post.author === 'string' ? post.author : post.author?.id || 'unknown author'}</span>
        <time dateTime={post.date}>{formatDate(post.date)}</time>
      </div>
    </CardContent>
  </Card></div>
  )
}

export default Post