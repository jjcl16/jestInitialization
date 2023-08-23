const reverseString = require("./reverseString");

it("is a string?", () => {
  expect(typeof(reverseString("Hola"))).toBe("string");
})

it("is reversed?", () =>{
  expect(reverseString("madrid")).toBe("dirdam")
})

it("is reversed 2?", () =>{
  expect(reverseString("arepera")).toBe("arepera")
})