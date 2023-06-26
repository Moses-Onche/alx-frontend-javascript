export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (let idx in array) {
    let value = idx;
    newArray.push(appendString + value);
  }

  return newArray;
}
