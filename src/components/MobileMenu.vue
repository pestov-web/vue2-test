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
  methods: {
    closeMenu() {
      this.$emit('close');
    },
  },
};
</script>

<template>
  <div class="mobile-menu" :class="{ 'mobile-menu--open': isOpen }">
    <button class="mobile-menu__close" @click="closeMenu">
      <Icon icon="stash:times-duotone" />
    </button>
    <NavMenu :isMobile="true" />
  </div>
</template>

<style lang="scss">
.mobile-menu {
  position: fixed;
  top: 0;
  right: -100%;
  width: 260px;
  height: 100vh;
  background: #fff;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.2);
  transition: right 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;

  &--open {
    right: 0;
  }

  &__close {
    align-self: flex-end;
    background: none;
    border: none;
    font-size: 24px;
    color: #333;
    cursor: pointer;
  }
}
</style>
