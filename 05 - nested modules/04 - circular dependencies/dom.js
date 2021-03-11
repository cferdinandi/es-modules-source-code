import {toArray} from './utilities.js';

function $ (selector) {
	return document.querySelector(selector);
}

function $$ (selector) {
	return toArray(document.querySelectorAll(selector));
}

export {$, $$};