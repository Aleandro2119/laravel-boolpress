<template>
  <div :class="`alert alert-${type || 'danger'}`" role="alert">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: "Alert",
  props: ["message"],
  props: ["type"],
};
</script>

<style>
</style> 