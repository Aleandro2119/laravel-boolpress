<template>
  <div class="container">
    <PostCard />
  </div>
</template>

<script>
import PostCard from "./PostCard.vue";
export default {
  name: "PostsList",
  components: {
    PostCard,
  },
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    getPosts() {
      axios
        .get("http://localhost:8000/api/posts")
        .then((res) => {
          this.posts = res.data;
        })
        .catch((err) => {
          console.error(err);
        })
        .then(() => {
          console.log("Call finished");
        });
    },
  },
  mounted() {
    this.getPosts();
  },
};
</script>

<style>
</style>