<template>
  <nav>
    <ul class="pagination">
      <li
        class="page-item"
        role="button"
        v-if="currentPage > 1"
        @click="$emit('on-page-change', currentPage - 1)"
      >
        <span class="page-link">Previous</span>
      </li>
      <li
        class="page-item"
        :class="{ active: currentPage == page }"
        role="button"
        v-for="page in lastPage"
        :key="page"
        @click="$emit('on-page-change', page)"
      >
        <span class="page-link">{{ page }}</span>
      </li>
      <li
        class="page-item"
        role="button"
        v-if="currentPage < lastPage"
        @click="
          currentPage == page ? '' : $emit('on-page-change', currentPage + 1)
        "
      >
        <span class="page-link">Next</span>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Pagination",
  props: ["currentPage", "lastPage"],
};
</script>

<style>
</style> 