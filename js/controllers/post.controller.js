import {PostService} from "../services/post.service";
import {Post} from "../models/Post";
import {postsContainer} from '../utils/dom_elements'

export function init() {
    const postService = new PostService();

        postService.fetchPosts().then(data => {
            const posts = data.map(post => convertToPost(post))
            console.log(posts)
            // ?title_like=b&_page=1&_limit=10
            renderPosts(posts)
    })

// funksion vec per pagination

// funksion vec per sorting

// funksion vec per searching

// funksion qe i ve elementet e postit ne html
function renderPosts(posts) {

    posts.forEach(post => {
        const postDiv = post.renderHTML();
        postsContainer.appendChild(postDiv);
    })
}

function convertToPost(postObj) {
    return new Post(postObj);
}

}



// const pagination = {
//     search: '',
//     sort: '',
//     page: 1,
//     limit: 10,
//     total: 0
// }

