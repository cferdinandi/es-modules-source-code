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


export default debounce;