const capitalize = (string) => {
  firstLetter = string.charAt(0).toUpperCase();
  restOfWord = string.slice(1);
  return firstLetter+restOfWord;
};

module.exports = capitalize;