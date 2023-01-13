const http = require("http");
const data = require("./data");

// http
//   .createServer((req, res) => {
//     res.write("<h1>This is the local server created using nodejs</h1>");
//     res.end();
//   })
//   .listen(4500);

http
  .createServer((req, resp) => {
    resp.writeHead(200, { "Content-Type": "application/json" });
    resp.write(JSON.stringify(data));
    resp.end();
  })
  .listen(5000);
