//creating settled PROMISE
//You can create an already resolved or already rejected with Promise static methods

const p = Promise.resolve({ name: "Promise", status: "Resolved" });
// const p = Promise.reject(new Error("reason for error"));

p.then((result) => console.log(result)).catch((err) => console.log(err));

//Running Promises in Parallel
const q = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Running first async operation like calling twitter API");
    resolve(1);
  }, 2000);
});

///try rejecting in one of them
const r = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Running second async operation like calling facebook API");
    // resolve(2);
    reject(new Error("because something happened"));
  }, 2000);
});

//When both async calls are completed
//all static mtd will reject as error if any of them reject error
Promise.all([q, r])
  .then((result) => console.log("from all", result))
  .catch((err) => console.log(err));

//The first async call completed
//all static mtd will reject if only the first completed rejected error
Promise.race([q, r])
  .then((result) => console.log("from race", result))
  .catch((err) => console.log(err));
