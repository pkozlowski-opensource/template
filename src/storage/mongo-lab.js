const M_LAB_URL = 'https://api.mlab.com/api/1/databases';
const M_LAB_KEY = '4fb51e55e4b02e56a67b0b66';

export function list(collection) {
  return fetch(`${M_LAB_URL}/angular_issues/collections/${collection}?apiKey=${
                   M_LAB_KEY}`)
      .then(r => r.json());
}

export function save(collection, data) {
  return fetch(
      `${M_LAB_URL}/angular_issues/collections/${collection}?apiKey=${
          M_LAB_KEY}`,
      {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      });
}

export function remove(collection, id) {
  return fetch(
      `${M_LAB_URL}/angular_issues/collections/${collection}/${id}?apiKey=${
          M_LAB_KEY}`,
      {method: 'DELETE'});
}