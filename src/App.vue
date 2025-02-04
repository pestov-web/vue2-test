<!-- eslint-disable implicit-arrow-linebreak -->
<template>
  <div id="app">
    <AppHeader />
    <main class="page">
      <GoodsList
        :data="goods"
        :category="category"
        :isModalOpen="isModalOpen"
        :modalContent="modalContent"
      />
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import GoodsList from './components/GoodsList.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    GoodsList,
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
