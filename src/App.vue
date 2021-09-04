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
@media (max-width: 1439px) {
  body {
    max-width: 1200px;
  }
}

@media (max-width: 1026px) {
  body {
    max-width: 800px;
  }
}

@media (max-width: 740px) {
  body {
    max-width: 320px;
  }
}
</style>
