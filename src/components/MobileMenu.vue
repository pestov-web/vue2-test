<script>
import { Icon } from '@iconify/vue2';
import NavMenu from './NavMenu.vue';

export default {
  name: 'MobileMenu',
  components: {
    NavMenu,
    Icon,
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleClickOutside);
  },
  methods: {
    closeMenu() {
      this.$emit('close');
    },
    handleClickOutside(event) {
      if (this.isOpen && !this.$el.contains(event.target)) {
        this.closeMenu();
      }
    },
  },
};
</script>

<template>
  <div class="mobile-menu" :class="{ 'mobile-menu--open': isOpen }" @click.stop>
    <button class="mobile-menu__close" @click="closeMenu">
      <Icon icon="stash:times-duotone" />
    </button>
    <div class="mobile-menu__content" @click.stop>
      <NavMenu :isMobile="true" @item-click="closeMenu" />
    </div>
  </div>
</template>
