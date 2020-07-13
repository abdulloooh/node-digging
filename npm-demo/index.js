const _ = require("underscore");

//How does node check for required stuff
/*
    Core node module
    File or Folder (mostly written in form "./" tho)
    checks inside node_modules
*/

var response = _.contains([0, 1, 2, 3, 4, 5, 6], 1, 1);
console.log(response);
