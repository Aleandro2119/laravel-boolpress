<template>
  <section id="posts">
    <h2 class="text-center mt-2">Benvenuti</h2>
    <PostsList />
  </section>
</template>

<script>
import PostsList from "../posts/PostsList.vue";
export default {
  components: {
    PostsList,
  },
};
</script>

<style>
</style>