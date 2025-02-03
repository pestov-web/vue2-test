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

<style lang="scss"></style>
