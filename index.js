const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  switch (req.url) {
    case "/":
      res.end("<h1>Homepage</h1>");
      break;
    case "/about":
      res.end("<h1>About</h1>");
      break;
    case "/contact-me":
      res.end("<h1>Contact Me</h1>");
      break;
    default:
      res.end("<h1>404 Not Found</h1>");
      break;
  }
});

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
