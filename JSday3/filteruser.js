const { filterDirMyPromise } = require("./filterdir");

async function tester() {
  try {
    const files = await filterDirMyPromise(__dirname, ".js");
    console.log(files);
  } catch (err) {
    console.log(err);
  }
}

tester();
