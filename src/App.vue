<template>
  <div class="app-container">
    <input v-model="searchQuery" placeholder="Search products..." class="search-box" />

    <VirtualList :products="filteredProducts">
      <template v-slot:default="{ product }">
        <ProductItem :product="product" />
      </template>
    </VirtualList>
  </div>
</template>

<script setup lang="ts">
import {useProductStore} from "./composables/useProductStore";
import ProductItem from "./components/ProductItem.vue";
import VirtualList from "./components/VirtualList.vue";

const { searchQuery, filteredProducts } = useProductStore();
</script>

<style scoped>
.app-container {
  padding: 20px;
  width: 400px;
  margin: auto;
}
.search-box {
  background-color: white;
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  font-size: 16px;
  color: black;
}
</style>
