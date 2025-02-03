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

<style lang="scss">
.nav-menu {
  background-color: #f8f9fa;
  padding: 1rem;
}

.nav-menu__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 1rem;
}

.nav-menu__item {
  margin: 0;
}

.nav-menu__link {
  text-decoration: none;
  color: $text-dark;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-menu__link:hover {
  color: #007bff;
}
</style>
