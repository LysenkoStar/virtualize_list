<template>
  <div class="product-item">
    <img :src="product.thumbnail" class="product-image" :alt="product.title" />
    <div class="product-details">
      <h4 class="product-title">{{ product.title }}</h4>
      <p class="product-description">{{ product.description }}</p>
      <div class="product-discount-brand">
        <span class="product-discount">Discount {{ product.discountPercentage}} %</span>
        <span class="product-brand">
          {{ product.brand}}
        </span>
      </div>
      <div class="product-price-rating-category">
        <p class="product-price">${{ product.price }}</p>
        <p class="product-rating">⭐ {{ product.rating }}</p>
        <p class="product-category">{{ product.category }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import type {Product} from "../types/product.ts";

defineProps<{ product: Product }>();
</script>

<style scoped>
.product-item {
  display: flex;
  align-items: center;
  background: white;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  color: black;
}
.product-image {
  width: 80px;
  height: 80px;
  border-radius: 8px;
  margin-right: 10px;
  z-index: 9;
}
.product-details {
  text-align: left;
  flex: 1;
}
.product-title {
  margin: 0;
}
.product-description {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 280px;
  color: gray;
  font-size: 0.9em;
}
.product-details p {
  margin: 0;
}
.product-category {
  color: gray;
  font-size: 0.9em;
}
.product-price {
  font-weight: bold;
}
.product-discount-brand {
  display: flex;
  justify-content: space-between;
  font-size: 0.9em;
}
.product-discount {
  color: red;
  font-weight: bold;
}
.product-brand {
  color: blue;
  font-weight: bold;
}
.product-price-rating-category {
  display: flex;
  justify-content: space-between;
}
.product-rating {
  color: orange;
}
</style>
