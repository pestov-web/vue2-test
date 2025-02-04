<template>
  <div id="app">
    <AppHeader />
    <main class="page">
      <GoodsList :data="goods" :category="category" @open-modal="openModal" />
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
      isModalOpen: false,
      modalContent: null,
    };
  },
  methods: {
    openModal(content) {
      console.log('Открытие модального окна:', content);
      this.modalContent = content;
      this.isModalOpen = true;
    },
    closeModal() {
      console.log('Закрытие модального окна');
      this.isModalOpen = false;
      this.modalContent = null;
    },
  },
  computed: {
    // filteredProducts() {
    //   // eslint-disable-next-line max-len
    //   return this.data.filter((item) =>
    //     item.title.toLowerCase().includes(this.searchQuery.toLowerCase())
    //   );
    // },
  },
};
</script>

<style lang="scss"></style>
