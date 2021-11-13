function uniqueInOrder1(iterable) {
  if (typeof iterable === "string") {
    return Array.from(iterable)
      .filter((v, i, a) => a[i] !== a[i + 1])
      .sort((a, b) => a - b);
  }

  if (typeof iterable === "object") {
    return iterable
      .sort((a, b) => a - b)
      .filter((v, i, a) => a[i] !== a[i + 1]);
  }
}

console.log(uniqueInOrder1("aaaaabbbbcccddd")); // output: [ 'a', 'b', 'c', 'd' ]
console.log(uniqueInOrder1([1, 2, 3, 4, 4, 4, 2])); // output: [ 1, 2, 3, 4 ]

function uniqueInOrder2(iterable) {
  return typeof iterable === "object"
    ? iterable.sort((a, b) => a - b).filter((v, i, a) => a[i] !== a[i + 1])
    : iterable
        .split("")
        .filter((v, i, a) => a[i] !== a[i + 1])
        .sort((a, b) => a - b);
}

console.log(uniqueInOrder2("aabbccddeeff" )); // output: [ 'a', 'b', 'c', 'd', 'e', 'f' ]
console.log(uniqueInOrder2([1, 2, 2, 3, 3, 3, 4, 1, 5, 5, 6])); // output: [ 1, 2, 3, 4, 5, 6 ]

let uniqueInOrder = (iterable) =>
  iterable === "object"
    ? iterable.sort((a, b) => a - b).filter((v, i, this) => a[i] !== a[i + 1])
    : iterable
        .split("")
        .filter((v, i, a) => a[i] !== a[i + 1])
        .sort((a, b) => a - b);
