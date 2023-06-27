import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((userData) => {
      console.log(`${userData[0].body} ${userData[1].firstName} ${userData[1].lastName}`);
    })

    .catch(() => console.log('Signup system offline'));
}
