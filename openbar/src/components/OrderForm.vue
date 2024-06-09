<template>
  <div class="order-form-container">
    <h2 class="form-title">Order Form</h2>
    <form @submit.prevent="submitOrder" class="order-form">
      <div class="beverage-items">
        <div v-for="beverage in beverages" :key="beverage.name" class="beverage-item">
          <label class="beverage-label">{{ beverage.name }}</label>
          <input type="number" v-model.number="beverage.quantity" class="beverage-input" />
        </div>
      </div>
      <button type="submit" class="submit-button">Submit Order</button>
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
