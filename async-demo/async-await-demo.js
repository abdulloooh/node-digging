console.log(1);
//Using Promise

// getUser(2)
//   .then(({ githubUsername }) => getGithubRepo(githubUsername))
//   .then((repos) => getCommits(repos[0]))
//   .then((commits) => console.log(commits))
//   .catch((err) => console.log(err.message));

//Using Async-Await
async function displayCommits() {
  try {
    const { githubUsername } = await getUser(2);
    const repos = await getGithubRepo(githubUsername);
    const commits = await getCommits(repos[0]);
    console.log(commits);
  } catch (err) {
    console.log(err.message);
  }
}

displayCommits();

console.log(3);

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Reading a user from database");
      resolve({ id: id, githubUsername: "abdulloooh" });
      // reject(new Error("error because..."));
    }, 1000);
  });
}

function getGithubRepo(username) {
  return new Promise((resolve) => {
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
      // resolve(["a", "b"]);
      reject(new Error("sth terrible"));
    }, 1000);
  });
}
