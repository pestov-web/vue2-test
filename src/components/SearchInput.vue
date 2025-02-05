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
  <form @submit.prevent="handleSubmit" class="search-form">
    <input
      v-model="searchQuery"
      placeholder="Поиск по названию картины"
      class="search-form__input"
    />
    <button class="search-form__btn" type="submit">Найти</button>
  </form>
</template>
