<script>
export default {
  name: 'SearchInput',
  data() {
    return {
      searchQuery: '',
    };
  },
  methods: {
    handleSubmit() {
      this.$emit('search', this.searchQuery);
    },
  },
};
</script>
<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="searchQuery" placeholder="Поиск по названию картины" />
    <button type="submit">Найти</button>
  </form>
</template>
<style lang="scss"></style>
