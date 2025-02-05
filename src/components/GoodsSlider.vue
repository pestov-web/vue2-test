<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'GoodsSlider',
  props: {
    pictures: Array,
  },
  components: {
    Carousel,
    Slide,
  },
};
</script>

<template>
  <carousel class="slider" :per-page="1" :pagination-enabled="true" :navigation-enabled="true">
    <slide v-for="item in pictures" :key="item" class="slider__item">
      <img :src="`/images/${item}`" :alt="item" class="slider__image" />
    </slide>
  </carousel>
</template>

<style lang="scss">
.slider {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  border-radius: 8px;
  overflow: hidden;

  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__image {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 8px;
    overflow: hidden;
  }
}
</style>
