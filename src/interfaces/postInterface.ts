import { Author } from "./authorInterface";

export interface Post {
    id: string;
    title: string;
    excerpt: string;
    author: Author | string;
    date: string;
}

