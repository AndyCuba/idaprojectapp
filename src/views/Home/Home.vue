<template>
  <div class="home">
    <Sorting />
    <div class="home__form">
      <h1>Добавление товара</h1>
      <Form />
    </div>
    <div class="home__content">
      <Product
        v-for="product in getAllProducts"
        v-bind:key="product.id"
        v-bind="product"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Form from "@/components/Form/Form.vue";
import Product from "@/components/Product/Product.vue";
import Sorting from "@/components/Sorting/Sorting.vue";
import store from "@/store";

export default defineComponent({
  name: "Home",
  components: {
    Form,
    Product,
    Sorting,
  },
  computed: {
    getAllProducts() {
      return store.getters.getAllProducts;
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../utilities/variables.scss";
.home {
  padding: 32px;
  display: flex;
  position: relative;
}

.home__content {
  padding-top: 48px;
  max-width: 1028px;
  min-width: 320px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(332px, 332px));
  grid-gap: 16px;
}

h1 {
  font-weight: 600;
  font-size: 28px;
  color: $mainFontColor;
  padding-bottom: 16px;
}

@media (max-width: 740px) {
  .home {
    padding: 10px;
    flex-direction: column;
  }
  .home__form {
    width: 320px;
  }
}

@media (max-width: 400px) {
  .home {
    padding: 0;
  }
  
}
</style>
