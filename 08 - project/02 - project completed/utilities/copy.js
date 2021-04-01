import trueTypeOf from './trueTypeOf.js';


/**
 * Create an immutable clone of an array or object
 * https://vanillajstoolkit.com/helpers/copy/
 * @param  {Array|Object} obj The array or object to copy
 * @return {Array|Object}     The clone of the array or object
 */
//
function copy (obj) {

	/**
	 * Create an immutable copy of an object
	 * @return {Object}
	 */
	function cloneObj () {
		let clone = {};
		for (let key in obj) {
			if (obj.hasOwnProperty(key)) {
				clone[key] = copy(obj[key]);
			}
		}
		return clone;
	}

	/**
	 * Create an immutable copy of an array
	 * @return {Array}
	 */
	function cloneArr () {
		return obj.map(function (item) {
			return copy(item);
		});
	}


	//
	// Inits
	//

	// Get object type
	let type = trueTypeOf(obj);

	// Return a clone based on the object type
	if (type === 'object') return cloneObj();
	if (type === 'array') return cloneArr();
	return obj;

}


export default copy;