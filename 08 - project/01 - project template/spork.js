/**
 * Spork.js
 * A simple utility library
 */
let spork = (function () {

	'use strict';

	/**
	 * More accurately check the type of a JavaScript object
	 * https://vanillajstoolkit.com/helpers/truetypeof/
	 * @param  {Object} obj The object
	 * @return {String}     The object type
	 */
	function trueTypeOf (obj) {
		return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
	}

	/**
	 * Build a query string from an object of data
	 * https://vanillajstoolkit.com/helpers/buildquery/
	 * @param  {Object} data The data to turn into a query string
	 * @return {String}      The query string
	 */
	function buildQuery (data) {
		if (trueTypeOf(data) === 'string') return data;
		return new URLSearchParams(data).toString();
	}

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


	//
	// Return the Public APIs
	//

	return {trueTypeOf, buildQuery, copy};

})();