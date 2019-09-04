// ###### import ######
import addClass from "../functions/addClass.js";
import removeClass from "../functions/removeClass.js";

// ####################
// ##### settings #####
// ####################
const class__jsIsAvailable = 'js';
const class__jsIsNotAvailable = 'no-js';

// ###### script ######
export default function setJsAvailability(selector) {
	var selector = document.querySelectorAll(selector);
	selector.forEach(function() {
		addClass(selector, class__jsIsAvailable);
		removeClass(selector, class__jsIsNotAvailable);
	});
}
