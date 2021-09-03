import { createStore } from "vuex";

export type ProductTypes = {
  id: string;
  name: string;
  description?: string;
  imageUrl: string;
  price: string;
};

interface Store {
  products: ProductTypes[];
}

export default createStore<Store>({
  state: {
    products: [
      {
        name: "Golden Hind1",
        description:
          "The Manila galleons sailed the Pacific for 250 years, bringing to the Americas cargoes of luxury goods such as spices and porcelain in exchange for New World silver.The Manila galleons sailed the Pacific for 250 years, bringing to the Americas cargoes of luxury goods such as spices and porcelain in exchange for New World silver.",
        imageUrl:
          "https://www.herbkanehawaii.com/wp-content/uploads/2020/02/Herb-Kane_Manila-Galleon-off-Puna-Coast.jpg",
        price: "100000",
        id: "1",
      },
      {
        name: "Golden Hind2",
        description:
          "The Manila galleons sailed the Pacific for 250 years, bringing to the Americas cargoes of luxury goods such as spices and porcelain in exchange for New World silver.",
        imageUrl:
          "https://www.herbkanehawaii.com/wp-content/uploads/2020/02/Herb-Kane_Manila-Galleon-off-Puna-Coast.jpg",
        price: "100000",
        id: "2",
      },
      {
        name: "Golden Hind",
        description:
          "The Manila galleons sailed the Pacific for 250 years, bringing to the Americas cargoes of luxury goods such as spices and porcelain in exchange for New World silver.",
        imageUrl:
          "https://www.herbkanehawaii.com/wp-content/uploads/2020/02/Herb-Kane_Manila-Galleon-off-Puna-Coast.jpg",
        price: "100000",
        id: "3",
      },
      {
        name: "Golden Hind",
        description:
          "The Manila galleons sailed the Pacific for 250 years, bringing to the Americas cargoes of luxury goods such as spices and porcelain in exchange for New World silver.",
        imageUrl:
          "https://www.herbkanehawaii.com/wp-content/uploads/2020/02/Herb-Kane_Manila-Galleon-off-Puna-Coast.jpg",
        price: "100000",
        id: "4",
      },
      {
        name: "Golden Hind",
        description:
          "The Manila galleons sailed the Pacific for 250 years, bringing to the Americas cargoes of luxury goods such as spices and porcelain in exchange for New World silver.",
        imageUrl:
          "https://www.herbkanehawaii.com/wp-content/uploads/2020/02/Herb-Kane_Manila-Galleon-off-Puna-Coast.jpg",
        price: "100000",
        id: "5",
      },
      {
        name: "Golden Hind",
        description:
          "The Manila galleons sailed the Pacific for 250 years, bringing to the Americas cargoes of luxury goods such as spices and porcelain in exchange for New World silver.",
        imageUrl:
          "https://www.herbkanehawaii.com/wp-content/uploads/2020/02/Herb-Kane_Manila-Galleon-off-Puna-Coast.jpg",
        price: "100000",
        id: "6",
      },
    ],
  },
  mutations: {
    addNewProduct(state, product: ProductTypes) {
      state.products = [...state.products, product];
    },
    deleteProduct(state, id: string) {
      state.products = state.products.filter((product) => product.id !== id);
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
