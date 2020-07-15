//Global object

//In Js
/*
console.log
setTimeout
clearTimeout
setInterval
clearInterval
var message = 'something'

*/

//In Broswer

/*
window object
all the above are accessible via the window object
*/

//In Node

/*
Global Object
but variable is only scoped to this file and not accessible outside due to node module system
*/

/*Module Wrapper function */

//Semantic versioning or simply semvar

let aPackage = {
  dependencies: {
    mongoose: "^5.9.23", //major . minor . patch  //path is for bug fix , minor is for new non breaking feature
    underscore: "^1.10.2", //major is for new major feature with potential to break some things
    // ^2.4.5  => 2.x  //karet
    // ~2.4.5  => 2.4.x //tilde
    //  2.4.5  => 2.4.5
  },
};

//check exact dependency version
/*
    npm list
    npm list --depth=0
*/

//Viewing registry info for a package
/*
    npm view <package> eg npm view underscore
    npm view <package> <property>
    npm view underscore dependencies
    npm view underscore devDependencies
    npm view underscore versions
*/

//Updating Local packages
/*
    npm outdated 
    npm update will update minor changes alone, not entire package
    npm i -g npm-check-updates  or simply npm-check-updates or more simply  ncu
    ncu -u to upgrade package.json
    npm i to install update node_modules with the upgraded package.json
*/

//dev dependencies
//with flag --save-dev

//remove package
//npm un <package-name>  un or uninstall

//working with global package
/*
  all previous commands work with it e g
  npm -g outdated
*/

//starting a new project that uses dependencies
/*-- 
    ---
      ---
      npm init
      npm init --yes to accept default config
      ---
    ---
  ---
*/

//publish package
//npm publish

//updated published package
//npm version <level>  level can be major, minor or patch
//npm publish


//set and get env variable
/*
  To set:   export <varName> = <varValue> eg export PORT = 4000
  To get:   process.env.<varName> eg process.env.PORT
*/

//query string parameter are used for addtional non-essential information or optional to the server
//route parameters for essentials