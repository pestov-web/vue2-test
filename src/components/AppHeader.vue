<script>
import { Icon } from '@iconify/vue2';
import NavMenu from './NavMenu.vue';
import SearchInput from './SearchInput.vue';
import MobileMenu from './MobileMenu.vue';

export default {
  name: 'AppHeader',
  components: {
    NavMenu,
    SearchInput,
    MobileMenu,
    Icon,
  },
  data() {
    return {
      isMobileMenuOpen: false,
    };
  },
  methods: {
    emitSearch(query) {
      this.$emit('search', query);
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
  },
};
</script>

<template>
  <header class="header">
    <div class="header__container">
      <NavMenu class="header__nav" />
      <SearchInput @search="emitSearch" />
      <button class="burger-menu" @click.stop="toggleMobileMenu">
        <Icon class="burger-menu__icon" icon="stash:burger-arrow-left" />
      </button>
    </div>
    <MobileMenu :isOpen="isMobileMenuOpen" @close="toggleMobileMenu" />
  </header>
</template>
