var handyman = (function (exports) {
	'use strict';

	/**
	 * Randomly shuffle an array
	 * https://stackoverflow.com/a/2450976/1293256
	 * @param  {Array} array The array to shuffle
	 * @return {String}      The first item in the shuffled array
	 */
	function shuffle (array) {

		var currentIndex = array.length;
		var temporaryValue, randomIndex;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {
			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// And swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}

		return array;

	}

	/**
	 * Debounce functions for better performance
	 * @param  {Function} fn The function to debounce
	 */
	function debounce (fn) {

		// Setup a timer
		var timeout;

		// Return a function to run debounced
		return function () {

			// Setup the arguments
			var context = this;
			var args = arguments;

			// If there's a timer, cancel it
			if (timeout) {
				window.cancelAnimationFrame(timeout);
			}

			// Setup the new requestAnimationFrame()
			timeout = window.requestAnimationFrame(function () {
				fn.apply(context, args);
			});

		};

	}

	/**
	 * Remove duplicate items from an array
	 * @param  {Array} arr The array
	 * @return {Array}     A new array with duplicates removed
	 */
	function dedupe (arr) {
		return [...new Set(arr)];
	}

	exports.debounce = debounce;
	exports.dedupe = dedupe;
	exports.shuffle = shuffle;

	Object.defineProperty(exports, '__esModule', { value: true });

	return exports;

}({}));
