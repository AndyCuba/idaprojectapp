<template>
  <div class="form">
    <form v-on:submit.prevent="handleSubmit">
      <label for="name">Наименование товара</label>
      <div :class="{ form__invalidWrapper: errors.name }">
        <input
          type="text"
          v-model="name"
          v-on:blur="handleInputBlur('name')"
          v-on:focus="handleInputFocus('name')"
          :class="{ form__invalidInput: errors.name }"
          placeholder="Введите наименование товара"
          id="name"
        />
      </div>
      <label for="description">Описание товара</label>
      <textarea
        v-model="description"
        placeholder="Введите описание товара"
        id="description"
      />
      <label for="url">Ссылка на изображение товара</label>
      <div :class="{ form__invalidWrapper: errors.url }">
        <input
          type="text"
          v-model.lazy="url"
          v-on:blur="handleInputBlur('url')"
          v-on:focus="handleInputFocus('url')"
          :class="{ form__invalidInput: errors.url }"
          placeholder="Введите ссылку"
          id="url"
        />
      </div>
      <label for="price">Цена товара</label>
      <div :class="{ form__invalidWrapper: errors.price }">
        <input
          type="number"
          v-model="price"
          v-on:blur="handleInputBlur('price')"
          v-on:focus="handleInputFocus('price')"
          :class="{ form__invalidInput: errors.price }"
          placeholder="Введите цену"
          id="price"
        />
      </div>
      <button :disabled="handleButtonDisable" type="submit">
        Добавить товар
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import store from "@/store";
import { defineComponent } from "vue";
import "./style.scss";

interface FormErrors {
  name: boolean;
  url: boolean;
  price: boolean;
}

interface FormData {
  name: string;
  description: string;
  url: string;
  price: string;
  errors: FormErrors;
}

export default defineComponent({
  name: "Form",
  data: (): FormData => ({
    name: "",
    description: "",
    url: "",
    price: "",
    errors: {
      name: false,
      url: false,
      price: false,
    },
  }),
  methods: {
    handleSubmit() {
      const newProduct = {
        name: this.name,
        description: this.description,
        url: this.url,
        price: this.price,
        id: new Date().valueOf().toString(),
      };
      store.commit("addNewProduct", newProduct);
    },
    // If inputs prop is empty, adds error in data object after loss of focus
    handleInputBlur(prop: keyof FormData) {
      if (!this[prop]) {
        const errorPropName = prop as keyof FormErrors;
        this.errors[errorPropName] = true;
      }
    },
    // Deletes input's error after focus
    handleInputFocus(prop: keyof FormErrors) {
      this.errors[prop] = false;
    },
  },
  computed: {
    handleButtonDisable() {
      if (this.name && this.url && this.price) {
        return false;
      } else return true;
    },
  },
});
</script>
