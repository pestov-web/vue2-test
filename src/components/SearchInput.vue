<script>
export default {
  name: 'SearchInput',
  props: { data: Array },
};
</script>
<template>
  <input v-model="searchQuery" placeholder="Поиск..." />
</template>
<style lang="scss"></style>
