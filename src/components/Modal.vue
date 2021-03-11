<template>
  <div class="modal">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Modal",
  setup() {
    return {};
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap");
.modal {
  top: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(73, 73, 73, 0.8);

  z-index: 100;
}
</style>
