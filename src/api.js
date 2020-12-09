export function login(username) {
  return fetch('https://run.mocky.io/v3/f02bf977-f840-4fd6-9f9b-50fa9569f4af', {
    method: 'POST',
    body: JSON.stringify({
      username,
    }),
  }).then((res) => res.json());
}
