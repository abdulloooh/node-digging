console.log(1);
getUser(2, getGetGithubRepo);

function getGetGithubRepo(user) {
  getGithubRepo(user.githubUsername, getGetCommits);
}

function getGetCommits(repos) {
  getCommits(repos[0], dDisplayCommits);
}

function dDisplayCommits(commits) {
  console.log(commits);
}

// Callback
// Promises
// Await
//Callback Hell
//Named functions to rescue
//A promise promise to give you the result of an opeartion when it is done
//3 states=> Pending(when created) => Fulfilled(resolved)  [otherwose]  Rejected(error)

console.log(3);

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading a user from database");
    callback({ id: id, githubUsername: "abdulloooh" });
  }, 1000);
}

function getGithubRepo(username, callback) {
  setTimeout(() => {
    console.log("Fetching repos for user " + username);
    callback(["repo1", "repo2"]);
  }, 1000);
}

function getCommits(repo, callback) {
  setTimeout(() => {
    console.log("Fetching commits for " + repo);
    callback(6);
  }, 1000);
}
