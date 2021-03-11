// Rename the import
import {getTheAnswer as answer} from './helpers.js';

// Tell them the total
function getTheAnswer () {
	alert(`The answer is ${answer()}`);
}

getTheAnswer();