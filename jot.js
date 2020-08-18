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

//An express Application is nth but a bunch of middleware fcns
/*
  Middleware functions consitute Request Processing Pipeline
  A middleware function takes a request from the client, process it, then hands over
    the control to the next middleware function or terminate the pipeline and return response to client
  Example of first is json() middleware of express that takes in request, search for json object 
  in the body of the req, pass it into a json obj and use it to set req.body,
    then passes the control over (to maybe route)
  Example of second is route handler (the (req,res)=>{}), takes the req, process and return to client

  Finally, express already came with some bunch of middlewares, e.g. express.json()
*/

//Built in middlewares
/*
  express.json() for json payload
  express.urlencoded({extended:true}) for parding urlencoded payloads
  express.static(<directory name>) for serving files statically
*/

//Custom middlewares can be created
//third party middleware can be used likewise like helmet and morgan
//you can get environment by app.get("env") or with process.env.NODE_ENV

//configuration
/*
default.json  I don't like this
development.json
production.json
custom-environment-variables.json
export sensitive vars from terminal and map under custom-encodeURI...
*/

//Debug: Easily distinguish various debugging messages
/*
export DEBUG=<a namespace>
export DEBUG=< namespace>,<second namespace>
export DEBUG=*
export DEBUG=<a prefix>:* eg app:*   "wild card"
unset DEBUG or export DEBUG=

DEBUG=<so so> nodemon index.js

//to seperate logs, give it a namespace and assign it to a different variable
*/

//templating engine
/*
Pug, Mustache, EJS etc
create a "views" directory
*/

//Async                                                       E
// Callback                                                     RR
// Promises                                                         OR
// Await                                                                OBJECT
//Callback Hell (Nested callback)
//Named functions to rescue
//A promise promise to give you the result of an opeartion when it is done
//3 states=> Pending(when created) => Fulfilled(resolved)  [otherwise]  Rejected(error)
//with the use of .then and .catch
//Running promises in parallel with Promise static methods like all() and race()
//creating settled PROMISE
//You can create an already resolved or already rejected with Promise static methods resolve() and reject()
//try and catch to handle error in async-await method

//MongoDB
//Compass is just a client application for connecting to mongo server
//which is probably installed on system or hosted on cloud
//Mongo Atlas is the cloud management tools which gives the capability to create cluster
//A cluster created in Atlas can be accessed from Compass
//connection string     mongodb://localhost/<db_name>
//Relational database and Document database (NoSQL)

//Import json objects into database
/*
  mongoimport --db mongo-exercises --collection courses --file exercie-data.json --jsonArray
*/

//To sort with case insensitivity
//Add ".collation({local:"en"})"

//2 Approaches for update with mongoose
/*
  -Query first
    *Find the course using findById
    *Modity its properties
    *save()
  -Update first
   *Update directy
   *Optionally: get updated document
*/

//For Update first
/*
  const result = Class.update({_id:id} , {
    //use any of mongodb update operators => they include $set, $inc, $max , $dec, $unset etc
    $set:{
      key : value ...
    }
  })

  result here is the update report

  Class.findByIdAndUpdate(id, {})  //to get prev state of the updated doc
  Class.findByIdAndUpdate(id, {}, {new:true}) //to get new state of the updated doc
*/

//For removing/deleting object
/*
  Course.deleteOne({a:a_value})
  Course.deleteMany({a:a_value})
  ----both of them returns only report and not deleted objects

  use findBy...Delete/Remove to get back deleted stuffs
*/

//Built in validators
/*
  Required, [minlength, maxlength, match(for regex)] for string, [min,max] for Number and date
  enum to select between predefined values
  Required can be direct boolean or a function that evaluates for another property and return boolean
  Arrow fcn won't work here as it doesn't have it is own this, it will inherit the calling fcn
  or the global object and not the method we are requiring
*/

//Custom Validators
/*
  passing extra object "validate" with method "validator" that returns boolean, 
  validate obj can also has message property that returns as error msg if error
  make sure the incoming value is truthy, check the first element of the incoming if it is array also
  because empty string is casted into array (if expected is Array) and appear as if an element is present
*/

//getting more info validation errors
/*
  ex from exception has ppt errors => ex.errors
  which is an object with keys being path of the value (eg name, title)
  so, can be looped over with the keys to get any property
*/

//Other SchemaTypeObject_options
/*
  lowercase , uppercase, trim, get , set
*/

//Refactoring
/*
  seperate functions into models and keep routers only in route file
*/

//Modelling Relationships
/* 
  DocumentA DocumentB
  -Using References (Normalization) => consistency
     **Trade off between query performance and consistency
  -Using Embedded Documents (Denormalization) => query performance

  **There is actually no real relationship in mongoDB and NoSQL databases in generel,
  so, no data integrity enforced in relating one document to the other

          REFERENCES
  let author = {          let course = {
    name: name                      name: name,
  }                                 author : authorID  OR authors : [authorID1, authorID2, ...]
                                 }
       EMBEDDED                         HYBRID APPROACH
  let author = {            let author = { name: "Abdullah"  , ...other properties...}
    name: name              let course = {
    author: {                           name: courseName,
      name: authorName                  author: {
    }                                         name: "Abdullah",
  }                                           id: ref (authorID)
                                              }
                                            }  
                                            This is particulary useful when you only want to store
                                            a snapshot of just a property of the author at 
                                            every point in time while keeping other properties out.

                                            Thus will optimize the query performance while giving enough
                                            data to be known
                                            */

//Transaction or two-way commits => can use Fawn library but not effective yet for me

//Authentication and Authorization
/*
Authenticaton is ensuring user is who they say they are, validating them
Authorization is checking if a user has the right permission to make some changes or do some things
*/

//.email() attached to joi to ensure valid email

/*
  using bcrypt
  ===Registration===
  bcrypt.genSalt(10 [the giher d no the better, but the slower])                                      
  bcrypt.hash(-d password- , -the salt from above-)
  the salt is simple prepended to the hashed password

  ===Logging in===
  bcrypt.compare(incoming password, savedPassword)
  it simple uses the salt from the saved to hash the incoming and then compare

  All bcrypt method returns promise (is used as async which is default)
*/

//JWT
//JWT uses a dev defined private key as digital signature for the returned jwt to client
//The digital sig is generated from the two other parts of the jwt which must match with
//the private key when returned. So, any alteration in it will not verify

//=====Refactoring jwt generation===
//----Information expert principle---
//An object that has enough information an expert in an area should be the one responsible
//for making decision and performing tasks

//process.exit(x) . Apart from x = 0, any other value terminates the program

//Arrow fcn should not be avoided ==this== keyword is needed
//and generally, arrow fcn is used as standalone fcn when ==this== is needed
//not as a method in an object because arrow function do not have its own ==this==

//Don't ever store any secure in your codebase eg jwt_secureKey or jst_privateKey

//Login,authentication
/*
When user logs in, return his jwt but don't store it
Whenever he needs to make request that should be authenticated, he has to send the token on the header
Verify the token in your auth middleware function and get the data content

So, do not ever store token in database, if it is a must, hash it

==Logging out user===
Client side should be in charge of token and when user logs out, delete it

You can protect routes in two ways
1. Protect entire endpoint like "/" "/api/users" by requesting auth middleware before any sub-route
2. Pass auth middleware as second argument to route handler in the protected routes
*/

//Use jwt debugger to view jwt tokens @ jwt.io

//status codes
/*
400: Bad request
401: Unauthorized
403: Forbidden 
404: Not Found
*/

//Winston npm noduel ===Transport (storage device for your logs)====
// === Logging levels(severity of ex eg error,infor,warning, debug)====

/*
const levels = { 
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  verbose: 4,
  debug: 5,
  silly: 6
};
*/
