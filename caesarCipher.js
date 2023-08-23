function caesarCipher(stringToCipher, shiftFactor = 1) {
  let stringToCipherArray = stringToCipher.split("");
  let newString = "";
  for (let index = 0; index < stringToCipherArray.length; index++) {
    newString += String.fromCharCode(stringToCipherArray[index].charCodeAt()+shiftFactor);
  }
  return newString;
}

module.exports = caesarCipher;