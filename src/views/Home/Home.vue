<template>
  <div class="home">
    <h1>Добавление товара</h1>
    <Form />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Form from "@/components/Form/Form.vue";

export default defineComponent({
  name: "Home",
  components: {
    Form,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../utilities/variables.scss";
.home {
  padding: 32px;
}
h1 {
  font-weight: 600;
  font-size: 28px;
  color: $mainFontColor;
  padding-bottom: 16px;
}
</style>
