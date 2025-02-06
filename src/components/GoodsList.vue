<script>
import { Icon } from '@iconify/vue2';
import PriceDisplay from './PriceDisplay.vue';

export default {
  name: 'GoodsList',
  props: {
    category: String,
    data: Array,
  },
  components: {
    PriceDisplay,
    Icon,
  },
  data() {
    return {
      // Локальная копия товаров
      goods: [],
    };
  },
  mounted() {
    this.initializeGoods();
  },
  watch: {
    data: {
      handler() {
        this.initializeGoods();
      },
      immediate: true,
    },
  },
  methods: {
    // Инициализация с учетом сохраненного состояния из localStorage
    initializeGoods() {
      const storedCart = JSON.parse(localStorage.getItem('cart')) || {};
      this.goods = this.data.map((good) => ({
        ...good,
        inCart: storedCart[good.id] || false,
        buttonState: storedCart[good.id] ? 'in-cart' : 'default',
      }));
    },
    handleOpenModal(good) {
      this.$emit('open-modal', good);
    },
    handleBuy(good) {
      if (good.inCart || good.buttonState === 'processing') return;
      // Устанавливаем состояние "Обрабатывается"
      this.$set(good, 'buttonState', 'processing');
      setTimeout(() => {
        // Обновляем состояние на "В корзине"
        this.$set(good, 'buttonState', 'in-cart');
        this.$set(good, 'inCart', true);
        // Сохраняем состояние в localStorage
        const storedCart = JSON.parse(localStorage.getItem('cart')) || {};
        storedCart[good.id] = true;
        localStorage.setItem('cart', JSON.stringify(storedCart));
      }, 2000);
    },
    // Метод для очистки корзины
    clearCart() {
      // Очищаем localStorage
      localStorage.removeItem('cart');
      // Сбрасываем состояние для каждого товара
      this.goods.forEach((good) => {
        this.$set(good, 'inCart', false);
        this.$set(good, 'buttonState', 'default');
      });
    },
  },
};
</script>

<template>
  <section class="section goods">
    <h2 class="section__title">{{ category }}</h2>
    <ul class="goods__list">
      <li
        v-for="good in goods"
        :key="good.id"
        class="goods__item"
        :class="{ goods__item_disabled: !good.stock }"
      >
        <img
          class="goods__img"
          :src="`/images/${good.pictures[0]}`"
          :alt="good.title"
          tabindex="0"
          @click="handleOpenModal(good)"
          @keydown.enter="handleOpenModal(good)"
        />
        <div class="goods__info">
          <h3
            class="goods__info__title"
            tabindex="0"
            @click="handleOpenModal(good)"
            @keydown.enter="handleOpenModal(good)"
          >
            {{ good.title }}
          </h3>
          <div v-if="good.stock" class="goods__info__stock">
            <div class="goods__info__container">
              <PriceDisplay :good="good" />
            </div>
            <button class="goods__info__btn" @click="handleBuy(good)">
              <template v-if="good.buttonState === 'processing'">
                <Icon icon="eos-icons:loading" style="font-size: 22px" />
              </template>
              <template v-else-if="good.buttonState === 'in-cart'">
                <Icon icon="material-symbols:done-rounded" style="font-size: 22px" />
                В корзине
              </template>
              <template v-else> Купить </template>
            </button>
          </div>
          <div v-else class="goods__info__stock">
            <p class="goods__info__sold">Продана на аукционе</p>
          </div>
        </div>
      </li>
    </ul>
    <!-- Кнопка для очистки корзины -->
    <div class="goods__clear-cart-container">
      <button class="goods__clear-cart-btn" @click="clearCart">Очистить корзину</button>
    </div>
    <span v-if="!goods.length">Товары отсутствуют ...</span>
  </section>
</template>
