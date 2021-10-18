import {PostService} from "../services/post.service";
import {Post} from "../models/Post";
import {postsContainer} from '../utils/dom_elements';
import {searchBtn} from '../utils/dom_elements';
import {searchSpace} from '../utils/dom_elements';

export class PostController {

    constructor() {
        this.postService = new PostService();
        this.init()
    }

    init() {
        this.postService.fetchPostsPaginated(this.postService.pagination).then(response => {
            console.log(response)
            this.postService.pagination = {...response.pagination};
            const posts = response.result.map(post => this.convertToPost(post));
            this.renderPosts(posts);
        })

    }

    convertToPost(postObj) {
        return new Post(postObj);

    }

    setSearch(search) {
        this.postService.pagination = {...this.postService.pagination, search};
    }

    searchPosts(search) {
        this.postService.fetchPostsPaginated({search, page: 1, limit: 8}).then(response => {
            console.log(response)
            this.postService.pagination = {...response.pagination};
            const posts = response.result.map(post => this.convertToPost(post));
            this.renderPosts(posts);
        })
    }

    renderPosts(posts) {
        postsContainer.innerHTML = ''
        posts.forEach(post => {
            const postDiv = post.renderHTML();
            postsContainer.appendChild(postDiv);
        })
    }

/*
* paginatePosts(page,limit) {
* this.postService.fetchPostsPaginated({search: this.postsService.pagination, page, limit}).then(response => {
            console.log(response)
            this.postService.pagination = {...response.pagination};
            const posts = response.result.map(post => this.convertToPost(post));
            this.renderPosts(posts);
        })

* */
}


// const pagination = {
//     search: '',
//     sort: '',
//     page: 1,
//     limit: 10,
//     total: 0
// }

