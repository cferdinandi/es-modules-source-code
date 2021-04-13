(function () {
	'use strict';

	var answer$1 = 42;

	function getTheAnswer () {
		return answer$1;
	}

	let answer = getTheAnswer();
	let wizard = 'Radagast';

	alert(`The answer is ${answer}, ${wizard}`);

}());
