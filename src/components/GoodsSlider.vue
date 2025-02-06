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
  <carousel class="slider" :per-page="1" :pagination-enabled="true" :autoplay="true">
    <slide v-for="item in pictures" :key="item" class="slider__item">
      <img :src="`/images/${item}`" :alt="item" class="slider__image" />
    </slide>
  </carousel>
</template>
