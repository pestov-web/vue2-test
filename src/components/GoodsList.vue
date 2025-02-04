<script>
export default {
  name: 'GoodsList',
  data() {
    return {
      goods: [
        {
          id: 1,
          title: '«Рождение Венеры» Сандро Боттичелли',
          stock: true,
          price: '1000000',
          description: '#',
          pictures: ['1.png'],
        },
        {
          id: 2,
          title: '«Тайная вечеря» Леонардо да Винчи',
          stock: true,
          price: '3000000',
          description: '#',
          pictures: ['2.png'],
        },
        {
          id: 3,
          title: '«Сотворение Адама» Микеланджело',
          stock: true,
          price: '5000000',
          description: '#',
          pictures: ['3.png'],
        },
        {
          id: 4,
          title: '«Урок анатомии» Рембрандт',
          stock: false,
          price: '7000000',
          description: '#',
          pictures: ['4.png'],
        },
      ],
    };
  },
};
</script>

<template>
  <section class="section goods">
    <ul class="goods__list">
      <li v-for="good in goods" :key="good.id" class="goods__item">
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

<style lang="scss" scoped>
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
  }
}
</style>
