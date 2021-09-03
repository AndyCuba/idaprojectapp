<template>
  <Home />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Home from "./views/Home/Home.vue";

export default defineComponent({
  name: "App",
  components: {
    Home,
  },
});
</script>

<style lang="scss">
@import "utilities/variables.scss";
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: Source Sans Pro;
  font-style: normal;
  background-color: rgba($color: $bgColor, $alpha: 0.8);
  max-width: 1440px;
  margin: auto;
}
</style>
