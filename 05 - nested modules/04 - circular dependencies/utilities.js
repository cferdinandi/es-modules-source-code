import {$, $$} from './dom.js';

function toArray (thing) {
	return Array.from(thing);
}

function getButtons () {
	return $$('button');
}

function getFirstParagraph () {
	return $('p');
}

export {toArray, getButtons, getFirstParagraph};