const p = new Promise((resolve, reject) => {
  //Do some async work
  //Either resolve or
  //rejected
  //eg
  setTimeout(() => {
    // resolve(1); //1 will be replaced with whatever value we get
    reject(new Error("Error Message"));
  }, 2000);
});

p.then((result) => console.log(result)).catch(({ message }) =>
  console.log(message)
);
