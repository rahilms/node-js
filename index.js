const http = require("http");

http
  .createServer((req, res) => {
    res.write("<h1>This is the local server created using nodejs</h1>");
    res.end();
  })
  .listen(4500);
