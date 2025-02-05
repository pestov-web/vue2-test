<script>
import PriceDisplay from './PriceDisplay.vue';

export default {
  name: 'GoodsList',
  props: {
    category: String,
    data: Array,
  },
  components: {
    PriceDisplay,
  },
  methods: {
    handleOpenModal(good) {
      this.$emit('open-modal', good);
    },
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

<template>
  <section class="section goods">
    <h2 class="section__title">{{ category }}</h2>
    <ul class="goods__list">
      <li v-for="good in data" :key="good.id" class="goods__item">
        <img
          class="goods__img"
          :src="`/images/${good.pictures[0]}`"
          :alt="good.title"
          @click="handleOpenModal(good)"
          @keydown.enter="handleOpenModal(good)"
        />
        <div class="goods__info">
          <h3
            class="goods__info__title"
            @click="handleOpenModal(good)"
            @keydown.enter="handleOpenModal(good)"
          >
            {{ good.title }}
          </h3>
          <div v-if="good.stock" class="goods__info__stock">
            <div class="goods__info__container">
              <PriceDisplay :good="good" />
            </div>
            <button class="goods__info__btn">Купить</button>
          </div>
          <div v-else class="goods__info__stock">
            <p class="goods__info__sold">Продана на аукционе</p>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<style lang="scss">
.goods {
  &__list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    gap: 32px;
  }
  &__item {
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    border: $border solid 1px;
    gap: 1rem;
    max-width: 280px;
    width: 100%;
    min-height: 328px;
  }
  &__img {
    cursor: pointer;
    transition: transform 0.3s ease;
    &:hover {
      transform: scale(1.03);
    }
  }
  &__info {
    padding: 4px 25px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    &__container {
      display: flex;
      flex-direction: column;
    }
    &__title {
      cursor: pointer;
      transition: color 0.3s ease;
      &:hover {
        color: #007bff;
      }
    }
    &__stock {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-height: 48px;
      height: 48px;
    }
  }
}
</style>
