export class Pagination {
    constructor() {
    }


    getTotalPages(total, limit) {
        return Math.ceil(+total / +limit)
    }


    renderHTML(page, limit, total) {
        const template = `
          <div class="col-md-10 text-center">
            <button id="previous" class="previous-btn"><i class="fas fa-arrow-left"></i></button>
            <button class="current-btn">${page}</button>
            <button id="next" class="next-btn"><i class="fas fa-arrow-right"></i></button>
            <p>Total pages: ${this.getTotalPages(total, limit)}</p>
          </div>
    `
        const pagination = document.createElement('div');
        pagination.className = 'offset-1 row justify-content-center pagination-buttons'
        pagination.insertAdjacentHTML('afterbegin', template);
        return pagination;
    }
}