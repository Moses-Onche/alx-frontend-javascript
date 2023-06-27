export default function createIteratorObject(report) {
  let result = [];
  for (const item of Object.values(report.result)) {
    result = [...result, ...item];
  }
  return result;
}
