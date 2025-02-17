const API_URL = "https://fakestoreapi.com";

export const apiService = {
  getProducts: () => {
    return fetch(`${API_URL}/products?offset=1050`)
      .then((response) => response.json())
      .then((data) => data);
  },
};
