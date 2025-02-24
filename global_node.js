/**
 * Generally they are accessible everywhere. Still there are exceptions where globals are not accessible.
 */

console.log("Process inside Node.js: ", process);/* object */
console.log("Module inside Node.js: ", module);/* object */
console.log("Require inside Node.js: ", require);/* function */
console.log("__dirname inside Node.js: ", __dirname);/* string */
console.log("Global inside Node.js: ", global); /* object */