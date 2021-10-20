export class Post {
    constructor(obj) {
        this.id = obj.id;
        this.title = obj.title;
        this.description = obj.description;
        this.published_at = obj.published_at;
        this.image = obj.image;
    }


    renderHTML() {
        const template = `
                <img class="image-wid"
                   src="${this.image}"
                  alt="Blog Image"
                />
                <div class="container">
                  <h6 class="mt-3">
                    <b><a class="post-title" href="http://localhost:1234/index.html/${this.id}">${this.title}</a></b>
                  </h6>
                  <p>${this.published_at}</p>
                  <p>${this.description.slice(0, 180) + '...'}</p>
                </div>    
    `
        const card = document.createElement('div');
        card.className = 'card col-md-5'
        card.insertAdjacentHTML('afterbegin', template);
        return card;

    }
}