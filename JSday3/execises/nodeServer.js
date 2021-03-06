const http = require("http");
const makeSecureRandom = require("./exercise2");
ms = makeSecureRandom.makeSecureRandom;

const server = http.createServer((req, res) => {
  if (req.url === "/api/os-info") {
    res.setHeader("Content-Type", "application/json");

    Promise.all([ms(48), ms(40), ms(32), ms(30)]).then((values) => {
      console.log(values);
      res.write(JSON.stringify(values));
      return res.end();
    });
    //Return a response with OS-info, using the code implemented in part-a
  }
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<h2>Simple node HTTP server demo</h2>
      <p>Exposes this endpoint <code>/api/os-info</code></p>
    `);
    return res.end();
  }
});
server.on("connection", (sock) => {
  // You can get the client-IP in here, using sock.remoteAddress)
});
server.listen(3000);
console.log("listening on 3000");
//Register for the "DosDetected" event and console.log the url and time info.
