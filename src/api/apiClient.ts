const BASE_URL = "http://localhost:7070";

interface Item {
  id: number;
  price: number;
  count: number;
}

interface OrderPayload {
  owner: {
    phone: string;
    address: string;
  };
  items: Item[];
}

export const apiClient = {
  getTopSales: async () => {
    const response = await fetch(`${BASE_URL}/api/top-sales`);
    return response.json();
  },

  getCategories: async () => {
    const response = await fetch(`${BASE_URL}/api/categories`);
    return response.json();
  },

  getItems: async (offset?: number, q?: string, categoryId?: number) => {
    let url = `${BASE_URL}/api/items`;
    const params = new URLSearchParams();
    if (offset !== undefined) params.append("offset", offset.toString());
    if (q !== undefined) params.append("q", q);
    if (categoryId !== undefined)
      params.append("categoryId", categoryId.toString());
    url += `?${params.toString()}`;

    const response = await fetch(url);
    return response.json();
  },

  getItemById: async (id: number) => {
    const response = await fetch(`${BASE_URL}/api/items/${id}`);

    return response;
  },

  postOrder: async (payload: OrderPayload) => {
    const response = await fetch(`${BASE_URL}/api/order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (response.status === 204) {
      return null;
    } else {
      return response.json();
    }
  },
};
