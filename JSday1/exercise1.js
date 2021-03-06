let array = [1991, 1999, 2001, 2002];

////////////////////////////////////////////////// Filter //////////////////////////////////////////////////
function myFilter(array, callback) {
  let a = [];

  array.forEach((element) => {
    if (callback(element)) {
      a.push(element);
    }
  });
  return a;
}

function filter(i) {
  if (i > 2000) {
    return true;
  } else {
    return false;
  }
}

let result = myFilter(array, filter, 2000);

console.log(result);

const result2 = array.filter((x) => x > 2000);

console.log(result2);

////////////////////////////////////////////////// Map //////////////////////////////////////////////////

function myMap(array, callback) {
  let b = [];

  array.forEach((element) => {
    b.push(callback(element));
  });
  return b;
}

function map(i) {
  return i * 2;
}

let result3 = myMap(array, map);

console.log(result3);

let result4 = array.map((x) => x * 2);

console.log(result4);

////////////////////////////////////////////////// Prototype - Filter //////////////////////////////////////////////////

Array.prototype.myFilter = function (callback) {
  let a = [];

  this.forEach((element) => {
    if (callback(element)) {
      a.push(element);
    }
  });
  return a;
};

let result5 = array.myFilter((x) => x > 2000);

console.log(result5);

////////////////////////////////////////////////// Prototype - Map //////////////////////////////////////////////////

Array.prototype.myMap = function (callback) {
  let b = [];

  this.forEach((element) => {
    b.push(callback(element));
  });
  return b;
};

let result6 = array.myMap((x) => x * 2);

console.log(result6);

//////////////////////////////////////////////////  Join  //////////////////////////////////////////////////

var all = ["Lars", "Peter", "Jan", "Bo"];

let hej = all.join();
let hej2 = all.join(" ");
let hej3 = all.join("#");

console.log(hej);
console.log(hej2);
console.log(hej3);

//////////////////////////////////////////////////  Reduce  //////////////////////////////////////////////////

var numbers = [2, 3, 67, 33];

const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(numbers.reduce(reducer));

let members = [
  { name: "Peter", age: 18 },
  { name: "Jan", age: 35 },
  { name: "Janne", age: 25 },
  { name: "Martin", age: 22 },
];

var reducer2 = function (accumulator, member, index, arr) {
  total = accumulator + member.age;
  if (index + 1 == arr.length) {
    total = total / arr.length;
  }
  return total;
};

console.log(members.reduce(reducer2, 0));

var votes = [
  "Clinton",
  "Trump",
  "Clinton",
  "Clinton",
  "Trump",
  "Trump",
  "Trump",
  "None",
];

let countedVotes = votes.reduce(function (allVotes, candidate) {
  if (candidate in allVotes) {
    allVotes[candidate]++;
  } else {
    allVotes[candidate] = 1;
  }
  return allVotes;
}, {});

console.log(countedVotes);
