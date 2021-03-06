const dosDetector = require("./dosDetector.js");

const DOSDetector = new dosDetector(1000);

DOSDetector.on("DosDetected", (e) =>
  console.log(`DosDetected: ${JSON.stringify(e)}`)
);

DOSDetector.addUrl("https://nodejs.org/api/events.html");
DOSDetector.addUrl("https://nodejs.org/api/events.html");
DOSDetector.addUrl("https://nodejs.org/api/events.html");
