import trueTypeOf from './trueTypeOf.js';


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


export default buildQuery;