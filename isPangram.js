function isPangram(string) {
  return "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .every((value) => string.includes(value));
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."));
console.log(isPangram("Probably not a pangram"));
