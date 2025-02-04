<script>
import NavMenu from './NavMenu.vue';

export default {
  name: 'AppHeader',
  components: {
    NavMenu,
  },
};
</script>

<template>
  <header class="header">
    <div class="header__container">
      <NavMenu />
    </div>
  </header>
</template>

<style lang="scss">
.header {
  display: flex;
  height: 92px;
  border-bottom: $border solid 1px;
  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
