import {
  sortByAscending,
  sortByDescending,
  sortByName,
} from "@/helpers/helpers";
import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export interface ProductTypes {
  id: string;
  name: string;
  description?: string;
  imageUrl: string;
  price: string;
}

interface Store {
  products: ProductTypes[];
  sorting: string;
}

export default createStore<Store>({
  plugins: [createPersistedState()],
  state: {
    products: [
      {
        name: "Golden Hind",
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
          "https://www.goldenhinde.co.uk/images/goldenhinde/Blog_Articles_2020/A_Ships_Fate/joelrogers-at-sea.jpg",
        price: "100000",
        id: "2",
      },
      {
        name: "Aolden Hind",
        description:
          "The Manila galleons sailed the Pacific for 250 years, bringing to the Americas cargoes of luxury goods such as spices and porcelain in exchange for New World silver.",
        imageUrl:
          "https://sdmaritime.org/wp-content/uploads/2018/08/sanSalvadorCatalina1200w.jpg",
        price: "200000",
        id: "3",
      },
      {
        name: "Bolden Hind",
        description:
          "The Manila galleons sailed the Pacific for 250 years, bringing to the Americas cargoes of luxury goods such as spices and porcelain in exchange for New World silver.",
        imageUrl:
          "https://w0.peakpx.com/wallpaper/476/28/HD-wallpaper-ship-art-fantasy-boat-sea.jpg",
        price: "400000",
        id: "4",
      },
    ],
    sorting: "По умолчанию",
  },
  mutations: {
    addNewProduct(state, product: ProductTypes) {
      state.products = [...state.products, product];
    },
    deleteProduct(state, id: string) {
      state.products = state.products.filter((product) => product.id !== id);
    },
    setSorting(state, sorting: string) {
      state.sorting = sorting;
    },
  },
  getters: {
    getAllProducts(state) {
      const { sorting, products } = state;

      if (sorting === "По умолчанию") {
        return products;
      } else if (sorting === "По названию") {
        //return new array in order to save the default order
        return [...products].sort(sortByName);
      } else if (sorting === "По возрастанию") {
        return [...products].sort(sortByAscending);
      } else if (sorting === "По убыванию") {
        return [...products].sort(sortByDescending);
      } else return products;
    },
    getSorting(state) {
      return state.sorting;
    },
  },
  actions: {},
  modules: {},
});
