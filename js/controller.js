import './Post'
import {renderPost} from "./Post";

export function init() {
    const postsContainer =
    fetch('http://localhost:3000/posts?title_like=b&_page=1&_limit=10').then(res => res.json()).then(res => {
        const postsContainer = document.getElementById('posts');
        console.log(res)
        res.map(post => {
            const postDiv = renderPost(post)
            postsContainer.appendChild(postDiv);
        })
    })
}

// bej nje funksion qe i kalon array me poste, edhe i ben render (duke bere setup dhe pagination)

// const pagination = {
//     search: '',
//     sort: '',
//     page: 1,
//     limit: 10,
//     total: 0
// }

