import * as postsController from './js/controllers/post.controller.js';
import {modal, postsContainer} from './js/utils/dom_elements';
import {addPostBtn} from './js/utils/dom_elements';
import {closeModal} from './js/utils/dom_elements';
import {searchBtn} from './js/utils/dom_elements';
import {searchSpace} from './js/utils/dom_elements';
import {PostController} from "./js/controllers/post.controller.js";



function init() {
  const postsController = new PostController();


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////




// When the user clicks on the button, open the modal
  addPostBtn.onclick = function () {
    modal.style.display = "block";
  };

// When the user clicks on <span> (x), close the modal
  closeModal.onclick = function () {
    modal.style.display = "none";
  };

// When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  searchBtn.addEventListener('click', () => {
    postsController.setSearch(searchSpace.value)
    postsController.searchPosts(searchSpace.value);
  })

}

init()



