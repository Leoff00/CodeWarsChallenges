const number = function (array) {
  if (array.length === 0 || array === []) return [];

  return array.map((v, i, a) => `${i + 1}: ${v}`);
};

console.log(number(["a", "b", "c", "d", "e", "f"]));
