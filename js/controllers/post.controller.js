import {PostService} from "../services/post.service";
import {Post} from "../models/Post";
import {pagination, postsContainer} from '../utils/dom_elements';
import {searchSpace} from '../utils/dom_elements';
import {Pagination} from "../models/Pagination";

export class PostController {

    constructor() {
        this.paginationEl = new Pagination()
        this.postService = new PostService();
        this.init();
        upload.addEventListener('click', () => {
            const newPost = {
                title:titleInput.value,
                image: option.value,
                description: text.value
            }
            fetch('http://localhost:3000/posts',
                {
                    method: 'POST',
                    mode: 'cors',
                    cache: 'no-cache',
                    credentials: 'same-origin',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    redirect: 'follow',
                    referrerPolicy: 'no-referrer',
                    body: JSON.stringify(newPost)}).then(res => console.log(res));
        })
    }

    init() {
        this.postService.fetchPostsPaginated(this.postService.pagination).then(response => {
            this.postService.pagination = {...response.pagination};
            const posts = response.result.map(post => this.convertToPost(post));

            this.renderPosts(posts);
            this.renderPagination(response.pagination);

        })

    }

    renderPagination(p) {
        pagination.innerHTML = '';
        pagination.appendChild(this.paginationEl.renderHTML(p.page, p.limit, p.total));
        const previous = document.getElementById('previous');
        const next = document.getElementById('next');
        previous.addEventListener('click', () => {
            if(p.page > 1) {
                this.postService.pagination = {
                    ...this.postService.pagination,
                    page: p.page - 1,
                }
                this.init();
            }
        });
        next.addEventListener('click', () => {
            if(p.page < this.paginationEl.getTotalPages(p.total, p.limit)) {
                this.postService.pagination = {
                    ...this.postService.pagination,
                    page: p.page + 1,
                }
                this.init();
            }
        });
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
            this.renderPagination(response.pagination)
        })
    }

    renderPosts(posts) {
        postsContainer.innerHTML = ''
        posts.forEach(post => {
            const postDiv = post.renderHTML();
            postsContainer.appendChild(postDiv);
        })
    }


 paginatePosts(page,limit) {
     this.postService.fetchPostsPaginated({search: this.postsService.pagination, page, limit}).then(response => {
         console.log(response)
         this.postService.pagination = {...response.pagination};
         const posts = response.result.map(post => this.convertToPost(post));
         this.renderPosts(posts);
     })

 }
}
