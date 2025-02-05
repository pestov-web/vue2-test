<script>
import NavMenu from './NavMenu.vue';
import SearchInput from './SearchInput.vue';

export default {
  name: 'AppHeader',
  components: {
    NavMenu,
    SearchInput,
  },
  props: {
    data: Array,
  },
  methods: {
    emitSearch(query) {
      this.$emit('search', query);
    },
  },
};
</script>

<template>
  <header class="header">
    <div class="header__container">
      <NavMenu />
      <SearchInput @search="emitSearch" />
    </div>
  </header>
</template>

<style lang="scss">
.header {
  display: flex;
  height: 92px;
  align-items: center;
  justify-content: center;
  border-bottom: $border solid 1px;
  &__container {
    max-width: 1216px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
