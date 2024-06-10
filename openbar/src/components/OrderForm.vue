<template>
  <div class="flex flex-col  top-0 justify-center items-center h-screen">
    <h2 class="text-3xl font-bold text-gray-800">Order Form</h2>
    <form @submit.prevent="submitOrder" class="w-full max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="beverage-items">
        <div v-for="beverage in beverages" :key="beverage.name" class="beverage-item mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" :for="beverage.name">{{ beverage.name }}</label>
          <input type="number" v-model.number="beverage.quantity" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
      </div>
      <button type="submit" class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Submit Order</button>
    </form>
  </div>
</template>

<script>
import { inject } from 'vue';

export default {
  setup() {
    const orderStore = inject('orderStore');
    const { beverages, submitOrder } = orderStore;

    return { beverages, submitOrder };
  }
}
</script>

<style scoped>
/* Styles omitted for brevity */
</style>