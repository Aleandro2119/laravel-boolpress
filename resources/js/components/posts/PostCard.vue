<template>
  <div class="col-12">
    <div class="card border-info my-3">
      <div class="card-body text-info">
        <h5 class="card-title text-success">
          {{ post.title }}
          <span :class="`badge badge-pill badge-${post.category.color}`"
            >{{ post.category.label }}
          </span>
          <div>
            <router-link
              v-if="!$route.params.slug"
              class="btn btn-sm btn-danger"
              :to="{ name: 'post-detail', params: { slug: post.slug } }"
              >Vedi</router-link
            >
          </div>
        </h5>
        <p class="card-text">
          {{ post.description }}
        </p>
      </div>
      <div class="card-footer d-flex justify-content-between">
        <span>
          {{ getFormattedDate }}
        </span>
        <div>
          <span
            v-for="tag in post.tags"
            :key="tag.id"
            class="badge badge-dark mx-1"
            :style="`background-color: ${tag.color}`"
            >{{ tag.label }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostCard",
  props: ["post"],
  computed: {
    getFormattedDate() {
      const date = new Date(this.post.updated_at);
      const day = date.getDate();
      const month = date.getMonth();
      const year = date.getFullYear();
      const hour = date.getHours();
      const minute = date.getMinutes();
      return `${day}/${month}/${year} - ${hour}:${minute}`;
    },
  },
};
</script>

<style>
</style>