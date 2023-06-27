import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((valueList) => {
    const paramArray = [];
    for (const item of valueList) {
      paramArray.push({ status: item.status, value: item.valueList || item.reason });
    }
    return paramArray;
  });
}
