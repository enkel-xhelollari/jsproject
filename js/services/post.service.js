import { Post } from '../models/Post'

export class PostService {
    url = 'http://localhost:3000/posts';

    pagination = {
        search: '',
        page: 1,
        limit: 8,
        total: 0
    }
    fetchPosts() {
        return fetch(this.url).then(resp => resp.json())
    }

    fetchPost(id) {
        return fetch(`${this.url}/id`).then(resp => resp.json)
    }

    fetchPostsPaginated(pagination) {
        const {search, page, limit} = pagination;
        return fetch(`${this.url}?_page=${page}&_limit=${limit}&title_like=${search}`).then(async resp => {
            const total = +resp.headers.get("x-total-count");
            const result = await resp.json()
            return {pagination: {search, page, limit, total}, result}
        })
    }
}