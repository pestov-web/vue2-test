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
      <p class="modal__price">
        {{
          formatPrice(
            modalContent.discont ? modalContent.discont : modalContent.price,
            modalContent.currency
          )
        }}
      </p>
    </div>
  </div>
</template>

<script>
import GoodsSlider from './GoodsSlider.vue';
import priceMixin from '../mixins/priceMixin';

export default {
  name: 'GoodsModal',
  mixins: [priceMixin],
  props: {
    modalContent: Object,
  },
  components: {
    GoodsSlider,
  },
};
</script>
