<template>
  <p class="price">
    <!-- Если есть скидка, выводим оригинальную цену (зачёркнутую) -->
    <span v-if="good.discont" class="price__original">
      {{ formatPrice(good.price, good.currency) }}
    </span>
    <!-- Всегда выводим финальную цену:
         если скидка есть, то discount, иначе исходную цену -->
    <span :class="good.discont ? 'price__discount' : 'price__final'">
      {{ formatPrice(good.discont ? good.discont : good.price, good.currency) }}
    </span>
  </p>
</template>

<script>
import priceMixin from '../mixins/priceMixin';

export default {
  mixins: [priceMixin],
  name: 'PriceDisplay',
  props: {
    good: {
      type: Object,
      required: true,
    },
  },
};
</script>
