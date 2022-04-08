<template>
  <div>
    <Header />
    <div class="container">
      <main>
        <PostsList />
      </main>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import PostsList from "./posts/PostsList.vue";
export default {
  components: {
    Header,
    PostsList,
  },
};
</script>
