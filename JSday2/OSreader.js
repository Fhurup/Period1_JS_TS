const os = require("os");

class OSreader {
  OSread() {
    const platform = os.platform();
    const type = os.type();
    const freemem = os.freemem();
    const totalmem = os.totalmem();
    const EOL = JSON.stringify(os.EOL);

    const OSdata = {
      platform,
      type,
      freemem,
      totalmem,
      EOL,
    };

    return OSdata;
  }
}

module.exports = OSreader;
