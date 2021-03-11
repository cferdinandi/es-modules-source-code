function $ (selector) {
	return document.querySelector(selector);
}

function $$ (selector) {
	return document.querySelectorAll(selector);
}

function clickHandler (event) {

	// Only run if the clicked element is a button
	if (!event.target.matches('button')) return;

	// Alert the button text
	alert(`You clicked button ${event.target.innerText}!`);

}

document.addEventListener('click', clickHandler);


export {$, $$};