const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello world");
    res.end();
  }
  if (req.url === "/api/debts") {
    res.write(JSON.stringify({ a: 100, b: 200, c: 3000 }));
    res.end();
  }
});

// //need to regsiter a listener to handle incoming event
// server.on("connection", (socket) => {
//   console.log("New connection...");
// });

server.listen(3000);

console.log("Listening on port 3000...");
