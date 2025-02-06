<template>
  <nav class="nav-menu" aria-label="Главное меню">
    <ul :class="['nav-menu__list', { 'nav-menu__list--mobile': isMobile }]">
      <li
        v-for="link in links"
        :key="link.text"
        :class="['nav-menu__item', { 'nav-menu__item--mobile': isMobile }]"
      >
        <a :href="link.url" :class="['nav-menu__link', { 'nav-menu__link--mobile': isMobile }]">{{
          link.text
        }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavMenu',
  props: {
    links: {
      type: Array,
      default: () => [
        { text: 'Каталог', url: '#' },
        { text: 'Доставка', url: '#' },
        { text: 'Оплата', url: '#' },
        { text: 'Контакты', url: '#' },
        { text: 'О компании', url: '#' },
      ],
    },
    isMobile: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
