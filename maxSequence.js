const maxSequence = (arr) => {
  if (arr === []) return 0;

  const removeDuplicateNumber = arr
    .sort((a, b) => a - b)
    .filter((e, i, a) => a[i] !== a[i + 1]);
  const removeNegativeNumbers = removeDuplicateNumber.filter((e) => e > 1);

  return removeNegativeNumbers.reduce((acc, element) => acc + element, 0);
};

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); //output: 6
