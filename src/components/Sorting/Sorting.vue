<template>
  <div class="sorting">
    <div>
      <select v-model="sorting" v-on:change="hanldleChange">
        <option>По умолчанию</option>
        <option>По названию</option>
        <option>По возрастанию</option>
        <option>По убыванию</option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import store from "@/store";
import "./style.scss";

export default defineComponent({
  name: "Sorting",
  data: () => ({
    sorting: store.getters.getSorting,
  }),
  methods: {
    hanldleChange(e: Event) {
      const target = e.target as HTMLSelectElement;

      store.commit("setSorting", target.value);
    },
  },
});
</script>
