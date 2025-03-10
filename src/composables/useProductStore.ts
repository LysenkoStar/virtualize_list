import { ref, computed, onMounted } from "vue";
import type {Product} from "../types/product.ts";

export function useProductStore() {
    const allProducts = ref<Product[]>([]);
    const searchQuery = ref<string>('');

    const filteredProducts = computed(() => {
        return allProducts.value.filter((product) =>
            product.title.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
    });

    const fetchProducts = async () => {
        try {
            const response = await fetch("https://dummyjson.com/products?limit=100");
            const data = await response.json();

            allProducts.value = new Array(10000)
                .fill(null)
                .map((_, index) => ({ ...data.products[index % 100], id: index }));
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    onMounted(fetchProducts);

    return { searchQuery, filteredProducts };
}
