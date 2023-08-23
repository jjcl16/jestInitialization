const caesarCipher = require("./caesarCipher")

it("it ciphering?", () => {
  expect(caesarCipher("abc")).toBe("bcd");
})

it("it ciphering?", () => {
  expect(caesarCipher("abc",3)).toBe("def");
})