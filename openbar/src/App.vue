<template>
  <div id="app">
    <OrderForm />
    <BillSummary />
    <BeverageList/>
  </div>
</template>

<script>
import { provide } from 'vue';
import OrderForm from './components/OrderForm.vue';
import BillSummary from './components/BillSummary.vue';
import BeverageList from "./components/BeverageList.vue";
import orderStore from './store';

export default {
  components: {
    BillSummary,
    OrderForm,
    BeverageList
  },
  setup() {
    provide('orderStore', orderStore);
  }
}
</script>

