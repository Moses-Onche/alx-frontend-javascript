export default function (success) {
  return new Promise((resolve, reject) => {
    const object = {status: 200, body: 'Success'};
    success ? resolve(object) : reject(Error('The fake API is not working currently'));
  });
}
