function isIsogram(str) {
  if (!str) return "Please enter a String";

  const filterWords = new Set(str.toLowerCase()).size;
  return filterWords === str.length ? true : false;
}

console.log(isIsogram(""));
console.log(isIsogram("Ana"));
console.log(isIsogram("Paz"));
