<script>
import NavMenu from './NavMenu.vue';

export default {
  name: 'AppFooter',
  components: {
    NavMenu,
  },
};
</script>
<template>
  <footer class="footer">
    <div class="footer__container">
      <NavMenu />
    </div>
  </footer>
</template>
<style lang="scss">
.footer {
  margin-top: 30px;
  display: flex;
  height: 92px;
  align-items: center;
  justify-content: center;
  background-color: $background-footer;
  &__container {
    max-width: 1280px;
    display: flex;
    justify-content: space-between;
  }
}
</style>
