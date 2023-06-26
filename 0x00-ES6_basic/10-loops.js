export default function appendToEachArrayValue(array, appendString) {
  const newArr = [];
  for (const idx of array) {
    const item = idx;
    newArr.push(appendString + item);
  }

  return arr;
}
