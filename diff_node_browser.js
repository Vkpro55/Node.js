
/**
 * Return type of setTimeout is a Timeout object inside Node.js
 * 
 * Return type of setTimeout ia a Number inside Node.js
 */

/**
 * Different runtime have different implementaion of same feature.
 */


const x = setTimeout(function exec() {
    console.log("complete timer");
}, 1000);

console.log(x);