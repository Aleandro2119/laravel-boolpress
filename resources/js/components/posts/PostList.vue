<template>
  <div class="container">
    <div class="row" v-if="posts.length">
      <PostCard v-for="post in posts" :key="post.id" :post="post" />
    </div>
    <Paginate />
  </div>
</template>

<script>
import PostCard from "./PostCard.vue";
import Paginate from "../Paginate.vue";
export default {
  name: "PostsList",
  components: {
    PostCard,
    Paginate,
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