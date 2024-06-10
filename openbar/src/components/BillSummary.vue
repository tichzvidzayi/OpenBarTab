<template>
  <div class="flex flex-col  absolute top-4 right-0.5 items-center h-screen">
    <p class="text-orange-500 font-bold text-gray-800">Total Bill: R {{ totalBill }}</p>
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
}
</script>
