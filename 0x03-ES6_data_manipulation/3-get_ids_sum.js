export default function getStudentIdsSum(objList) {
  return objList.reduce((count, Obj) => count + Obj.id, 0);
}
