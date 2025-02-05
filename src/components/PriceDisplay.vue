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
        {{ formatPrice(good.price, good.currency) }}
      </p>
    </template>
  </div>
</template>

<script>
export default {
  name: 'PriceDisplay',
  props: {
    good: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatPrice(price, currency) {
      let symbol = '';
      switch (currency) {
        case 'rub':
          symbol = '₽';
          break;
        case 'usd':
          symbol = '$';
          break;
        default:
          symbol = ' уе';
      }
      return `${price} ${symbol}`;
    },
  },
};
</script>

<style lang="scss">
.price {
  display: flex;
  flex-direction: column;
  &__original {
    text-decoration: line-through;
    margin-right: 8px;
  }

  &__discount {
    font-weight: bold;
    color: #e60000; /* можно задать свой цвет для скидочной цены */
  }
}
</style>
