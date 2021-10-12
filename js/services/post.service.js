import { Post } from '../models/Post'

export class PostService {
    url = 'http://localhost:3000/posts';

    fetchPosts() {
        return fetch(this.url).then(resp => resp.json())
    }

    fetchPost(id) {
        return fetch(`${this.url}/id`).then(resp => resp.json)
    }
}