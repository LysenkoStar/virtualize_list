<template>
  <div ref="scrollContainer" class="scroll-container" @scroll="onScroll">
    <div :style="{ height: totalHeight + 'px', position: 'relative' }">
      <div v-for="(product, index) in visibleProducts" :key="product.id"
           :style="{ position: 'absolute', top: (startIndex + index) * itemHeight + 'px', height: itemHeight + 'px', width: '100%' }">
        <slot :product="product"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, defineProps } from 'vue';
import type {Product} from "../types/product.ts";

const props = defineProps<{ products: Product[] }>();

const containerHeight = 500;
const itemHeight = 125;

const startIndex = ref(0);
const scrollContainer = ref<HTMLElement | null>(null);

const totalHeight = computed(() => props.products.length * itemHeight);
const visibleProducts = ref<Product[]>([]);

const updateVisibleProducts = () => {
  const endIndex = Math.min(startIndex.value + Math.ceil(containerHeight / itemHeight), props.products.length);
  visibleProducts.value = props.products.slice(startIndex.value, endIndex);
};

const onScroll = () => {
  if (scrollContainer.value) {
    startIndex.value = Math.floor(scrollContainer.value.scrollTop / itemHeight);
    updateVisibleProducts();
  }
};

onMounted(updateVisibleProducts);
watch(() => props.products, updateVisibleProducts, { deep: true });
watch(startIndex, updateVisibleProducts);
</script>

<style scoped>
.scroll-container {
  width: 420px;
  height: 500px;
  overflow-y: auto;
}
</style>
