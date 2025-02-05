<script>
export default {
  name: 'GoodsList',
  props: {
    category: String,
    data: Array,
  },
  methods: {
    handleOpenModal(good) {
      this.$emit('open-modal', good);
    },
    formatPrice(good) {
      let symbol = '';
      switch (good.currency) {
        case 'rub':
          symbol = '₽';
          break;
        case 'usd':
          symbol = '$';
          break;
        default:
          symbol = ' уе';
      }
      return `${good.price} ${symbol}`;
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
            <p class="goods__info__price">{{ formatPrice(good) }}</p>
            <button class="goods__info__btn">Купить</button>
          </div>
          <div v-else class="goods__info__stock">
            <p class="goods__info__price">Продано на аукционе</p>
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
    gap: 1rem;
  }
  &__item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: $border solid 1px;
    gap: 1rem;
    max-width: 280px;
    width: 100%;
  }
  &__img {
    cursor: pointer;
    transition: transform 0.3s ease;
    &:hover {
      transform: scale(1.03);
    }
  }
  &__info {
    padding: 10px 15px;
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
    }
  }
}
</style>
