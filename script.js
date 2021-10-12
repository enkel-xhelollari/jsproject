import * as controller from './js/controllers/post.controller.js';
import {modal} from './js/utils/dom_elements';
import {btn} from './js/utils/dom_elements';
import {span} from './js/utils/dom_elements';



controller.init();


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

