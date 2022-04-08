<template>
  <div class="container">
    <div class="row" v-if="posts.length">
      <PostCard v-for="post in posts" :key="post.id" :post="post" />
    </div>
    <Paginate 
     v-if="!isLoading"
      :current-page="currentPage"
      :last-page="lastPage"
      @on-page-change="getPosts"/>

      <Loader v-if="isLoading" />
    <div class="posts" v-else>
      <div class="row" v-if="posts.length">
        <PostCard v-for="post in posts" :key="post.id" :post="post" />
      </div>
  </div>
</template>

<script>
import PostCard from "./PostCard.vue";
import Paginate from "../Paginate.vue";
import Loader from "../Loader.vue";
export default {
  name: "PostsList",
  components: {
    PostCard,
    Paginate,
    Loader,
  },
  data() {
    return {
      posts: [],
      isLoading: false,
      currentPage: 1,
      lastPage: undefined,
    };
  },
  methods: {
    getPosts(page = 1) {
      this.isLoading = true;
      axios
        .get("http://localhost:8000/api/posts?page=" + page)
        .then((res) => {
          this.posts = res.data.data;
          this.currentPage = res.data.current_page;
          this.lastPage = res.data.last_page;
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