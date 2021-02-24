const api = {
  async index(
    endpoint = "http://my-json-server.typicode.com/claim-academy-js/products/products"
  ) {
    // res is a RESPONSE STREAM
    const res = await fetch(endpoint);

    // Read the STREAM BODY as JSON
    return res.json();
  },
};

export default api;
