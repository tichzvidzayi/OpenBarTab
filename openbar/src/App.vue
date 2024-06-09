<template>
  <div id="app">
    <OrderForm />
    <BillSummary />
  </div>
</template>

<script>
import { provide } from 'vue';
import OrderForm from './components/OrderForm.vue';
import BillSummary from './components/BillSummary.vue';
import orderStore from './store';

export default {
  components: {
    OrderForm,
    BillSummary
  },
  setup() {
    provide('orderStore', orderStore);
  }
}
</script>

<style>
/* Styles omitted for brevity */
</style>
