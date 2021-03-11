/**
 * Get an array of all matching elements in the DOM
 * @param  {String} selector The element selector
 * @param  {Node}   parent   The parent to search in [optional]
 * @return {Array}           The elements
 */
function $ (selector, parent) {
    return Array.from((parent ? parent : document).querySelectorAll(selector));
}


export default $;