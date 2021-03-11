/**
 * Spork.js
 * A simple utility library
 */
let spork = (function () {

	'use strict';

	/**
	 * Get an array of all matching elements in the DOM
	 * @param  {String} selector The element selector
	 * @param  {Node}   parent   The parent to search in [optional]
	 * @return {Array}           The elements
	 */
	function $ (selector, parent) {
	    return Array.from((parent ? parent : document).querySelectorAll(selector));
	}

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
		 * Copy properties from the original object to the clone
		 * @param {Object|Function} clone The cloned object
		 */
		function copyProps (clone) {
			for (let key in obj) {
				if (obj.hasOwnProperty(key)) {
					clone[key] = copy(obj[key]);
				}
			}
		}

		/**
		 * Create an immutable copy of an object
		 * @return {Object}
		 */
		function cloneObj () {
			let clone = {};
			copyProps(clone);
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

		/**
		 * Create an immutable copy of a Map
		 * @return {Map}
		 */
		function cloneMap () {
			let clone = new Map();
			for (let [key, val] of obj) {
				clone.set(key, copy(val));
			}
			return clone;
		}

		/**
		 * Create an immutable clone of a Set
		 * @return {Set}
		 */
		function cloneSet () {
			let clone = new Set();
			for (let item of set) {
				clone.add(copy(item));
			}
			return clone;
		}

		/**
		 * Create an immutable copy of a function
		 * @return {Function}
		 */
		function cloneFunction () {
			let clone = obj.bind(this);
			copyProps(clone);
			return clone;
		}


		//
		// Inits
		//

		// Get object type
		let type = trueTypeOf(obj);

		// Return a clone based on the object type
		if (type === 'object') return cloneObj();
		if (type === 'array') return cloneArr();
		if (type === 'map') return cloneMap();
		if (type === 'set') return cloneSet();
		if (type === 'function') return cloneFunction();
		return obj;

	}


	//
	// Return the Public APIs
	//

	return {$, trueTypeOf, buildQuery, copy};

})();