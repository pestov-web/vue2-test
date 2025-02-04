<template>
  <div class="modal" v-if="modalContent">
    <div class="modal__content">
      <button class="modal__close" @click="$emit('close')">✖</button>
      <img :src="`/images/${modalContent.pictures[0]}`" :alt="modalContent.title" />
      <h3 class="modal__title">{{ modalContent.title }}</h3>
      <p class="modal__description">{{ modalContent.description }}</p>
      <p class="modal__price">{{ modalContent.price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsModal',
  props: {
    modalContent: Object,
  },
};
</script>

<style lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  &__content {
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  }
  &__title {
    font-size: 24px;
    margin-bottom: 10px;
    cursor: pointer;
  }
  &__description {
    margin-bottom: 10px;
  }
}
</style>
