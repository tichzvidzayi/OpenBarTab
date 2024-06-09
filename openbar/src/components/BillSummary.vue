<template>
  <div class="bill-summary-container">
    <h2 class="summary-title">Bill Summary</h2>
    <p class="total-bill">Total Bill: R {{ totalBill }}</p>
  </div>
</template>

<script>
import { inject, computed } from 'vue';

export default {
  setup() {
    const orderStore = inject('orderStore');
    const totalBill = computed(() => orderStore.totalBill);

    return { totalBill };
  }
};
</script>

<style scoped>
/* Styles omitted for brevity */
</style>
