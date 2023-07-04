export default function getListStudentIds(objList) {
  if (Array.isArray(objList)) return objList.map((obj) => obj.id);
  else return [];
}
