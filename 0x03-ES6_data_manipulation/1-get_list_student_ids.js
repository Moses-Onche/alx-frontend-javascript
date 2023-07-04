export default function getListStudentIds(lst) {
  let arr = [];
  Array.isArray(lst) ? arr = lst.map((obj) => obj.id) : arr;
  return arr;
}
