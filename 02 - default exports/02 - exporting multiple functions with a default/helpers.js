function getTheAnswer () {
	return 42;
}

function add (num1, num2) {
	return num1 + num2;
}

function subtract (num1, num2) {
	return num1 - num2;
}

// Export all methods, with getTheAnswer() as the default
export {getTheAnswer as default, add, subtract};