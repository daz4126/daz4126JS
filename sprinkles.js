// monkeypatches and useful helper functions, mainly inspired on Ruby

// Number
Number.prototype.isEven = function () {
  return this % 2 === 0;
};

Number.prototype.isOdd = function () {
  return this % 2 === 1;
};

// String
String.prototype.last = function () {
  return this[this.length - 1];
};

String.prototype.reverse = function () {
  return this.split("").reverse().join("");
};

// Arrays
Array.prototype.first = function () {
  return this[0];
};

// returns the last element in an array
Array.prototype.last = function () {
  return this[this.length - 1];
};

Array.prototype.sorted = function () {
  const a = [...this];
  if (typeof a[0] === "number") {
    return a.sort((a, b) => a - b);
  } else {
    return a.sort();
  }
};

// returns a random element from an array
Array.prototype.random = function () {
  return this[Math.floor(Math.random() * this.length)];
};

Array.prototype.insert = function (item, pos = this.length) {
  const a = [...this];
  return [...a.slice(0, pos), item, ...a.slice(pos)];
};

Array.prototype.remove = function (item) {
  const a = [...this];
  return a.filter((x) => x !== item);
};

Array.prototype.update = function (item, newItem) {
  const a = [...this];
  a.map((x) => (x === item ? newItem : x));
};

Array.prototype.unique = function () {
  return [...new Set(this)];
};

// returns an array populated with integers from a to b
function Range(a, b) {
  // if only one argument supplied then return random number between 1 and argument
  if (b === undefined) {
    b = a;
    a = 1;
  }
  return [...Array(b - a + 1).keys()].map((x) => x + a);
}

function random(a, b) {
  // if only one argument supplied then return random number between 1 and argument
  if (b === undefined) {
    b = a;
    a = 1;
  }
  return Math.floor(Math.random() * (b - a + 1) + a);
}
