const object = {
  average: 4,
  min: 1,
  max: 8,
  length: 6
};

function analyzeArray(array){

  object.average = average(array);
  object.min = min(array);
  object.max = max(array);
  object.length = array.length;
  return object;
}

module.exports = analyzeArray;


function average(array){
  //console.log(array);
  const arrayLength = array.length;
  const arraySum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return arraySum/arrayLength;

}

function min(array){
  const min = array.reduce((accumulator, currentValue) => {
    return (accumulator>currentValue) ? currentValue : accumulator;
  });
  return min;
}

function max(array){
  const max = array.reduce((accumulator, currentValue) => {
    return (accumulator<currentValue) ? currentValue : accumulator;
  });
  return max;
}

