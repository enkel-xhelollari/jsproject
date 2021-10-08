export function renderPost(post) {
    const template = `

                <img class="image-wid"
                   src="${post?.image || './img/post-sample.jpg'}"
                  alt="Blog Image"
                />
                <div class="container">
                  <h6 class="mt-3">
                    <b><a class="post-title" href="http://localhost:1234/index.html/${post.id}">${post.title}</a></b>
                  </h6>
                  <p>${post.published_at}</p>
                  <p>${post.description.slice(0, 180) + '...'}</p>
                </div>
               
    `
    const card = document.createElement('div');
    card.className = 'card col-md-5'
    card.insertAdjacentHTML('afterbegin', template);
    return card;

}

