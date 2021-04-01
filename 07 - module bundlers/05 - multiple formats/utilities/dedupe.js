/**
 * Remove duplicate items from an array
 * @param  {Array} arr The array
 * @return {Array}     A new array with duplicates removed
 */
function dedupe (arr) {
	return [...new Set(arr)];
}


export default dedupe;