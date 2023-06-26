export default function appendToEachArrayValue(array, appendString) {
  for (let idx in array) {
    //let value = idx;
    idx = appendString + idx;
  }

  return array;
}
