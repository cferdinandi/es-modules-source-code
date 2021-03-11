/**
 * More accurately check the type of a JavaScript object
 * https://vanillajstoolkit.com/helpers/truetypeof/
 * @param  {Object} obj The object
 * @return {String}     The object type
 */
function trueTypeOf (obj) {
	return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
}


export default trueTypeOf;