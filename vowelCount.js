function getCount(str) {
  if (!str) return "Invalid data.";

  const vowel = ["a", "e", "i", "o", "u"];

  const strLowerCase = str.toLowerCase();

  const vowelsCount = Array.from(strLowerCase).filter((letters) =>
    vowel.includes(letters)
  ).length;

  return vowelsCount;
}

console.log(getCount("Lorem Ipsum is simply dummy text of the printing."));
