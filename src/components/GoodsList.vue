<script>
export default {
  name: 'GoodsList',
  props: {
    category: String,
    data: Array,
  },
};
</script>

<template>
  <section class="section goods">
    <h2 class="section__title">{{ category }}</h2>
    <ul class="goods__list">
      <li v-for="good in data" :key="good.id" class="goods__item">
        <img :src="`/images/${good.pictures[0]}`" :alt="good.title" />
        <h3 class="goods__title">{{ good.title }}</h3>
        <div v-if="good.stock" class="goods__stock">
          <p class="goods__price">{{ good.price }}</p>
          <button class="goods__btn">Добавить в корзину</button>
        </div>
        <div v-else class="goods__stock">
          <p class="goods__price">Продано на аукционе</p>
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
    border: $border solid 1px;
    padding: 1rem;
    gap: 1rem;
    max-width: 280px;
    width: 100%;
  }
}
</style>
