console.log(1);
getUser(2)
  .then(({ githubUsername }) => getGithubRepo(githubUsername))
  .then((repos) => getCommits(repos[0]))
  .then((commits) => console.log(commits))
  .catch((err) => console.log(err.message));

console.log(3);

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Reading a user from database");
      resolve({ id: id, githubUsername: "abdulloooh" });
    }, 1000);
  });
}

function getGithubRepo(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetching repos for user " + username);
      resolve(["repo1", "repo2"]);
    }, 1000);
  });
}

function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetching commits for " + repo);
      resolve(["a", "b"]);
    }, 1000);
  });
}
