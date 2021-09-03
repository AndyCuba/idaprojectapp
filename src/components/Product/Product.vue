<template>
  <div class="product">
    <div v-on:click="handleClick" class="product__delete-button"></div>
    <img :src="imageUrl" alt="product image" />
    <div class="product__content">
      <h2>{{ name }}</h2>
      <p v-if="description">{{ description }}</p>
      <p class="product__price">{{ price }} руб</p>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import { defineComponent } from "vue";
import "./style.scss";

export default defineComponent({
  name: "Product",
  props: {
    name: String,
    description: String,
    imageUrl: String,
    price: String,
    id: String,
  },
  methods: {
    handleClick() {
      store.commit("deleteProduct", this.id);
    },
  },
});
</script>
