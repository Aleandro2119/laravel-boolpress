<template>
  <section id="post-detail">
    <div class="container">
      <h2 class="text-center mt-3">Dettaglio Post</h2>
      <Loader v-if="isLoading" message="Post" />

      <PostCard :post="post" v-if="post" />

      <Alert message="Si è vericato un errore" v-if="hasError" />
    </div>
  </section>
</template>


<script>
import PostCard from "../posts/PostCard.vue";
import Loader from "../Loader.vue";
import Alert from "../Alert.vue";
export default {
  name: "PostDetail",
  components: { PostCard, Loader, Alert },
  data() {
    return {
      post: null,
      isLoading: false,
      hasError: false,
    };
  },
  methods: {
    getPost() {
      this.isLoading = true;
      axios
        .get("http://localhost:8000/api/posts/" + this.$route.params.slug)
        .then((res) => {
          this.post = res.data;
        })
        .catch((err) => {
          console.error(err);
          this.hasError = true;
        })
        .then(() => {
          this.isLoading = false;
          this.hasError = false;
        });
    },
  },
  mounted() {
    this.getPost();
  },
};
</script>

<style>
</style> 