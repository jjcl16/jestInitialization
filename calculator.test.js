const calculator = require("./calculator");

it("is adding ok?",()=>{
  expect(calculator.add(8,4)).toBe(12);
})

it("is subtracting ok?",()=>{
  expect(calculator.subtract(8,4)).toBe(4);
})

it("is dividing ok?",()=>{
  expect(calculator.divide(8,4)).toBe(2);
})

it("is multiplying ok?",()=>{
  expect(calculator.multiply(8,4)).toBe(32);
})