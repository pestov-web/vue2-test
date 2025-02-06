<script>
import { Icon } from '@iconify/vue2';
import NavMenu from './NavMenu.vue';

export default {
  name: 'AppFooter',
  components: {
    NavMenu,
    Icon,
  },
};
</script>
<template>
  <footer class="footer">
    <div class="footer__container">
      <NavMenu class="footer__nav" />
      <div class="footer__contacts">
        <a class="footer__contacts__info" href="tel:+78125555555" target="_blank"
          ><Icon icon="f7:phone-fill" /> +7 (812) 555-55-55</a
        >
        <a
          class="footer__contacts__info"
          href="https://yandex.ru/maps/2/saint-petersburg/house/ulitsa_yefimova_3s/Z0kYdQVgSE0HQFtjfXVzdH1mYQ==/?indoorLevel=1&ll=30.320180%2C59.925155&z=16.93"
          target="_blank"
          ><Icon icon="bxs:map" /> г. Санкт-Петербург, ул. Ефимова, 3</a
        >
      </div>
    </div>
  </footer>
</template>
<style lang="scss">
.footer {
  margin-top: 30px;
  display: flex;
  box-sizing: border-box;
  min-height: 92px;
  align-items: center;
  justify-content: center;
  background-color: $background-footer;
  &__nav {
    display: none;
    @include md {
      display: flex;
    }
  }
  &__container {
    max-width: 1280px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 0 20px;
    gap: 20px;
    justify-content: center;
    align-items: center;
    @include lg {
      justify-content: space-between;
    }
    @include xl {
      padding: 0;
    }
  }
  &__contacts {
    color: $text-footer;
    display: flex;
    gap: 30px;
    font-size: 14px;
    flex-direction: column;
    @include sm {
      flex-direction: row;
    }
    &__info {
      color: $text-footer;
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }
}
</style>
