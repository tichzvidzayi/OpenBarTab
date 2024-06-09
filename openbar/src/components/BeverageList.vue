<!-- BeverageList.vue -->
<template>
  <div>
    <h2>Beverages</h2>
    <ul>
      <li v-for="beverage in beverages" :key="beverage.name" @click="selectBeverage(beverage)">
        {{ beverage.name }} - R {{ beverage.price }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      beverages: [
        { name: 'Beer', price: 45.00 },
        { name: 'Cider', price: 52.00 },
        { name: 'Premix', price: 59.00 },
      ],
    };
  },
  methods: {
    selectBeverage(beverage) {
      this.$emit('beverage-selected', beverage);
    },
  },
};
</script>