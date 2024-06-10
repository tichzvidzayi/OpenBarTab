<template>
  <div class="bg-white p-6 rounded-lg shadow-md">
    <h2 class="text-2xl font-semibold mb-4">Beverages</h2>
    <ul>
      <li v-for="beverage in beverages" :key="beverage.name" class="mb-4 flex justify-between items-center">
        <span>{{ beverage.name }} - R {{ beverage.price }}</span>
        <input
            type="number"
            v-model.number="orders[beverage.name]"
            min="0"
            class="ml-4 p-2 border rounded w-24"
            placeholder="Quantity"
        />
      </li>
    </ul>
    <button @click="addToTab" class="mt-6 w-full py-2 bg-blue-600 text-white rounded-lg">Add to Tab</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      beverages: [
        { name: 'Beer', price: 45 },
        { name: 'Cider', price: 52 },
        { name: 'Premix', price: 59 },
      ],
      orders: {
        Beer: 0,
        Cider: 0,
        Premix: 0,
      },
    };
  },
  methods: {
    addToTab() {
      this.$emit('add-to-tab', this.orders);
      this.orders = { Beer: 0, Cider: 0, Premix: 0 };
    },
  },
};
</script>

<style scoped>
/* Add any scoped styles here */
</style>
