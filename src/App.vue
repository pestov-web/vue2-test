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
import data from './data/data-placeholder';
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
      goods: data,
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
