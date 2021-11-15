const maxSequence = (arr) => {
  if (arr === [] || arr.length === 0) return 0;

  const removeDuplicateNumber = arr
    .sort((a, b) => a - b)
    .filter((e, i, a) => (e > 0 ? a[i] !== a[i + 1] : e));

  const removeNegativeNumbers = removeDuplicateNumber.filter((e) => e > 1);
  return removeNegativeNumbers.reduce((acc, element) => acc + element, 0);
};

console.log(maxSequence([5, 2, 1, -2]));

// TODO: Refactor
