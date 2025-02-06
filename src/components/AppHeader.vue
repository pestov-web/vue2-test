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
      <!-- Основное меню: скрыто на мобильных -->
      <NavMenu class="header__nav" />
      <SearchInput @search="emitSearch" />
      <!-- Кнопка бургер-меню: отображается только на мобильных -->
      <button class="burger-menu" @click="toggleMobileMenu">
        <Icon class="burger-menu__icon" icon="stash:burger-arrow-left" />
      </button>
    </div>
    <!-- Мобильное меню, выезжающее справа -->
    <MobileMenu :isOpen="isMobileMenuOpen" @close="toggleMobileMenu" />
  </header>
</template>

<style lang="scss">
@import '@/assets/scss/abstracts/_mixins.scss'; // путь к файлу с вашими миксинами

.header {
  display: flex;
  height: 72px;
  align-items: center;
  justify-content: center;
  border-bottom: $border solid 1px;
  @include lg {
    height: 92px;
  }
  &__container {
    max-width: 1216px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;

    @include xl {
      padding: 0;
    }
  }
  &__nav {
    display: none;
    @include md {
      display: flex;
    }
  }
}

.burger-menu {
  background: none;
  border: none;
  cursor: pointer;
  height: 40px;
  width: 40px;
  font-size: 34px;
  color: $text-dark;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: $button-hover;
    color: $text-white;
  }
  @include md {
    display: none;
  }
}
</style>
