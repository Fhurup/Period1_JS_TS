const crypto = require("crypto");

function makeSecureRandom(size) {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(size, function (err, buffer) {
      if (err) {
        return reject(err);
      }
      resolve(buffer.toString("hex"));
    });
  });
}

Promise.all([
  makeSecureRandom(48),
  makeSecureRandom(40),
  makeSecureRandom(32),
  makeSecureRandom(30),
]).then((values) => {
  console.log(values);
});

module.exports.makeSecureRandom = makeSecureRandom;
