<template>
  <div>
    <template v-if="good.discont">
      <p class="price">
        <span class="price__original">
          {{ formatPrice(good.price, good.currency) }}
        </span>
        <span class="price__discount">
          {{ formatPrice(good.discont, good.currency) }}
        </span>
      </p>
    </template>
    <template v-else>
      <p class="price">
        <span class="price__discount">
          {{ formatPrice(good.price, good.currency) }}
        </span>
      </p>
    </template>
  </div>
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
