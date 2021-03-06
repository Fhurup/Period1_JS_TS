const makeSecureRandom = require("./exercise2");

ms = makeSecureRandom.makeSecureRandom;
Promise.all([ms(48), ms(40), ms(32), ms(30)]).then((values) => {
  console.log(values);
});

async function testerParal() {
  try {
    const hex48 = ms(48);
    const hex40 = ms(40);
    const hex32 = ms(32);
    const hex24 = ms(24);
    const hex16 = ms(16);
    const hex8 = ms(8);
    const result = await Promise.all([hex48, hex40, hex32, hex24, hex16, hex8]);
    console.log("-Paral-", result);
  } catch (err) {
    console.log(err);
  }
}

testerParal();
