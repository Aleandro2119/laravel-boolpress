<template>
  <div class="loader">
    <div class="d-flex align-items-center">
      <strong class="text-danger mx-3 h3">Posts Loading</strong>
      <div
        class="spinner-border text-danger h4 ms-auto"
        role="status"
        aria-hidden="true"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loader",
};
</script>


<style lang="scss" scoped>
.loader {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(rgb(0, 0, 0), 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  .spinner-border {
    width: 2.5rem;
    height: 2.5rem;
  }
}
</style> 