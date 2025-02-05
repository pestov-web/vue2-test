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
  }
}

/* Стили для управления слайдером */
.VueCarousel-navigation-button {
  top: 89% !important;
}

.VueCarousel-navigation-prev,
.VueCarousel-navigation-next {
  color: $text-dark !important;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  position: absolute !important;
  transform: none !important;
  z-index: 1;
  cursor: pointer;
}

.VueCarousel-dot {
  background: $button-disabled !important;
  width: 5px !important;
  height: 5px !important;
  border-radius: 50%;
  margin: 5px;
  transition: all 0.3s ease;
}

.VueCarousel-dot--active {
  background: $button !important;
}
</style>
