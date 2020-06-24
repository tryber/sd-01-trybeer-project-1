exports.fetchApi = async ({ endpoint, method, body, headers = { 'Content-Type': 'application/json' } }) => {
  const response = await fetch(
    endpoint,
    {
      method,
      headers,
      body: JSON.stringify({ ...body }),
    })
  const data = await response.json();
  return data;
}
