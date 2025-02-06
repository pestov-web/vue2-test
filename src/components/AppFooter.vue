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
