function alphabetizeString(inputString, customAlphabet) {
  // Handle case where no customAlphabet provided
  if (!customAlphabet) {
    return inputString.toLowerCase().split("").sort().join("");
  }

  // Create a map to store the index of each character if customAlphabet provided
  const characterMap = {};
  customAlphabet.forEach((char, index) => {
    characterMap[char.toLowerCase()] = index;
  });

  // Sort inputString based off customAlphabet indexes
  return inputString
    .toLowerCase()
    .split("")
    .sort((a, b) => characterMap[a] - characterMap[b])
    .join("");
}

module.exports = alphabetizeString;
