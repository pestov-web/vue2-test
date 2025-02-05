<template>
  <nav class="nav-menu">
    <ul class="nav-menu__list">
      <li v-for="(link, index) in links" :key="index" class="nav-menu__item">
        <a :href="link.url" class="nav-menu__link">{{ link.text }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavMenu',
  data() {
    return {
      links: [
        { text: 'Каталог', url: '#' },
        { text: 'Доставка', url: '#' },
        { text: 'Оплата', url: '#' },
        { text: 'Контакты', url: '#' },
        { text: 'О компании', url: '#' },
      ],
    };
  },
};
</script>
