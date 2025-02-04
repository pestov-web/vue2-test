<template>
  <div id="app">
    <AppHeader />
    <main class="page">
      <GoodsList />
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
};
</script>

<style lang="scss"></style>
