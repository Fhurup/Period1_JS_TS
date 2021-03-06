const crypto = require("crypto");
let size = 48;
function randomHex() {
  const randomHexes = {
    title: "3 Secure Randoms",
    randoms: [],
  };

  let size = 48;
  crypto.randomBytes(size, function (err, buffer) {
    let secureHex = buffer.toString("hex");
    let hex48 = {
      length: buffer.length,
      random: secureHex,
    };

    size = 40;
    crypto.randomBytes(size, function (err, buffer) {
      let secureHex = buffer.toString("hex");
      let hex40 = {
        length: buffer.length,
        random: secureHex,
      };

      size = 32;
      crypto.randomBytes(size, function (err, buffer) {
        let secureHex = buffer.toString("hex");
        let hex32 = {
          length: buffer.length,
          random: secureHex,
        };

        let allHexes = [hex48, hex40, hex32];
        randomHexes.randoms = { ...allHexes };

        console.log(randomHexes);
      });
    });
  });
}

randomHex();
