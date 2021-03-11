import {$, $$} from './dom.js';

function getButtons () {
	return $$('button');
}

function getFirstParagraph () {
	return $('p');
}

export {getButtons, getFirstParagraph};