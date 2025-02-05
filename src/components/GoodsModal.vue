<template>
  <div
    class="modal"
    v-if="modalContent"
    @click.self="$emit('close')"
    @keydown.enter="$emit('close')"
  >
    <div class="modal__content">
      <button class="modal__close" @click="$emit('close')">✖</button>
      <GoodsSlider :pictures="modalContent.pictures" class="modal__slider" />
      <h3 class="modal__title">{{ modalContent.title }}</h3>
      <p class="modal__description">{{ modalContent.description }}</p>
      <p class="modal__price">{{ modalContent.price }}</p>
    </div>
  </div>
</template>

<script>
import GoodsSlider from './GoodsSlider.vue';

export default {
  name: 'GoodsModal',
  props: {
    modalContent: Object,
  },
  components: {
    GoodsSlider,
  },
};
</script>

<style lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease-in-out;

  &__content {
    position: relative;
    background: #fff;
    padding: 20px;
    border-radius: 12px;
    max-width: 500px;
    width: 90%;
    text-align: center;
    position: relative;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
    animation: slideIn 0.3s ease-in-out;
  }

  &__close {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
    color: #333;
  }

  &__title {
    font-size: 24px;
    margin-top: 10px;
  }

  &__description {
    font-size: 16px;
    margin: 10px 0;
    color: #666;
  }

  &__price {
    font-size: 18px;
    font-weight: bold;
    color: #e74c3c;
  }
}

/* Анимации */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
