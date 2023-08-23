const reverseString = (string) => {
  let stringSplitted = string.split("");
  return stringSplitted.reverse().join("");
}

module.exports = reverseString;