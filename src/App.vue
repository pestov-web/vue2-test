<template>
  <div id="app">
    <AppHeader @search="handleSearch" />
    <main class="page">
      <GoodsList :data="filteredGoods" :category="category" @open-modal="openModal" />
    </main>
    <GoodsModal v-if="isModalOpen" :modalContent="modalContent" @close="closeModal" />
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import GoodsList from './components/GoodsList.vue';
import GoodsModal from './components/GoodsModal.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    GoodsList,
    GoodsModal,
  },
  data() {
    return {
      category: 'Картины эпохи Возрождения',
      goods: [
        {
          id: 1,
          title: '«Рождение Венеры» Сандро Боттичелли',
          stock: true,
          price: '2000000',
          discont: '1000000',
          currency: 'rub',
          description:
            '«Рождение Венеры» — картина выдающегося итальянского живописца периода кватроченто (раннего итальянского Возрождения) флорентийской школы Сандро Боттичелли.',
          pictures: ['1.webp', '1_1.webp', '1_2.webp', '1_3.webp'],
        },
        {
          id: 2,
          title: '«Тайная вечеря» Леонардо да Винчи',
          stock: true,
          price: '3000000',
          discont: '',
          currency: 'usd',
          description:
            '«Та́йная ве́черя» — монументальная роспись работы Леонардо да Винчи, изображающая сцену последней трапезы Христа со своими учениками.',
          pictures: ['2.webp', '2_1.webp', '2_2.webp', '2_3.webp'],
        },
        {
          id: 3,
          title: '«Сотворение Адама» Микеланджело',
          stock: true,
          price: '6000000',
          discont: '4000000',
          currency: 'usd',
          description:
            '«Сотворение Адама» (итал. La creazione di Adamo) — фреска Микеланджело, написанная около 1511 года.',
          pictures: ['3.webp', '3_1.webp', '3_2.webp', '3_3.webp'],
        },
        {
          id: 4,
          title: '«Урок анатомии» Рембрандт',
          stock: false,
          price: '7000000',
          discont: '',
          currency: 'usd',
          description:
            '«Урок анатомии доктора Тульпа» — картина выдающегося голландского живописца Рембрандта ван Рейна, написанная в 1632 году.',
          pictures: ['4.webp'],
        },
      ],
      isModalOpen: false,
      modalContent: null,
      searchQuery: '',
    };
  },
  methods: {
    openModal(content) {
      this.modalContent = content;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
      this.modalContent = null;
    },
    handleSearch(query) {
      this.searchQuery = query;
    },
  },
  computed: {
    filteredGoods() {
      if (!this.searchQuery) {
        return this.goods;
      }
      return this.goods.filter((good) => {
        const title = good.title.toLowerCase();
        return title.includes(this.searchQuery.toLowerCase());
      });
    },
  },
};
</script>

<style lang="scss"></style>
