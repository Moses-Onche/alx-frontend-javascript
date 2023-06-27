export default function handleResponseFromAPI(promise) {
  const success = { status: 200, body: 'success' };

  return promise
    .then(() => success)
    .catch((error) => error)
    .finally(() => console.log('Got a response from the API'));
}
