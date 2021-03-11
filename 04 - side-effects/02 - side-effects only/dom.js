function $ (selector) {
	return document.querySelector(selector);
}

function $$ (selector) {
	return document.querySelectorAll(selector);
}

/**
 * Handle click events
 * @param  {Event} event The event object
 */
function clickHandler (event) {

	// Only run if the clicked element is a button
	if (!event.target.matches('button')) return;

	// Alert the button text
	alert(`You clicked button ${event.target.innerText}!`);

}


// Listen for click events
document.addEventListener('click', clickHandler);


// You don't have to export anything
// export {$, $$};