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
    <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
    <label for="search-input" class="visually-hidden">Поиск по названию картины</label>
    <input
      id="search-input"
      v-model="searchQuery"
      placeholder="Поиск по названию картины"
      class="search-form__input"
    />
    <button class="search-form__btn" type="submit">Найти</button>
  </form>
</template>

<style lang="scss">
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  clip: rect(0 0 0 0);
  overflow: hidden;
}
</style>
