import { createStore } from "vuex";

interface Product {
  name: string;
  description?: string;
  imageUrl: string;
  price: number;
}
interface Store {
  products: Product[];
}

export default createStore<Store>({
  state: {
    products: [],
  },
  mutations: {
    addNewProduct(state, product: Product) {
      state.products = [...state.products, product];
    },
  },
  getters: {
    getAllProducts(state) {
      return state.products;
    },
  },
  actions: {},
  modules: {},
});
