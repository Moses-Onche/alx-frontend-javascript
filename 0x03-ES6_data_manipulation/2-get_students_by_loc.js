export default function getStudentsByLocation(objList, city) {
  return objList.filter((obj) => obj.location === city);
}
