export default function appendToEachArrayValue(array, appendString) {
  let newArray = [];
  for (let idx in array) {
    //let value = idx;
    newArray.push(appendString + idx);
  }

  return newArray;
}
