import { ProductTypes } from "@/store";

const sortByName = (a: ProductTypes, b: ProductTypes): number => {
  const nameA = a.name.toLowerCase(),
    nameB = b.name.toLowerCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
};

const sortByAscending = (a: ProductTypes, b: ProductTypes): number => {
  const priceA = a.price,
    priceB = b.price;

  if (priceA < priceB) {
    return -1;
  }
  if (priceA > priceB) {
    return 1;
  }
  return 0;
};

const sortByDescending = (a: ProductTypes, b: ProductTypes): number => {
  const priceA = a.price,
    priceB = b.price;
  if (priceA > priceB) {
    return -1;
  }
  if (priceA < priceB) {
    return 1;
  }
  return 0;
};

export { sortByName, sortByAscending, sortByDescending };
