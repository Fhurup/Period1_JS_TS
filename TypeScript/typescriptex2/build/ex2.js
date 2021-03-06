"use strict";
function printArray(s1, s2, s3) {
    return [s1, s2, s3];
}
function printArrayUpperCased(s1, s2, s3) {
    return [s1.toUpperCase(), s2.toUpperCase(), s3.toUpperCase()];
}
let f2 = function logger(f1) {
    let [a, b, c] = ["A", "B", "c"];
    console.log(f1(a, b, c));
};
function printArrayfail(s1, s2) {
    return [s1, s2];
}
f2(printArrayUpperCased);
f2(printArray);
//f2(printArrayfail)
//# sourceMappingURL=ex2.js.map