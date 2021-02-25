import ky from "ky";

const api = {
  async index(
    endpoint = "http://my-json-server.typicode.com/claim-academy-js/products/products"
  ) {
    return ky.get(endpoint).json();
  },
};

export default api;
