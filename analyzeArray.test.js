const analyzeArray = require("./analyzeArray");

const object = {
  average: 4,
  min: 1,
  max: 8,
  length: 6
};

it("analyze ok?", () => {
  //console.log(analyzeArray())
  expect(analyzeArray([1,8,3,4,2,6])).toEqual(object);
})