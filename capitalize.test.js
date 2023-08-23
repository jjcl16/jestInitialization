const capitalize = require("./capitalize");

it("Is a string?", () => {
  expect(typeof(capitalize("marcador"))).toBe("string");
})

it("can capitalize just one letter?", () => {
  expect(capitalize("m")).toBe("M");
})

it("Is capitalized?", () => {
  expect(capitalize("madrid")).toBe("Madrid");
})

