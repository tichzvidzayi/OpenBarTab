<template>
  <div class="flex flex-col absolute top-4 justify-center items-center">
    <table class="table-auto w-full border-collapse border-gray-300">
      <thead>
      <tr>
        <th class="px-4 py-2 text-left text-gray-900 border-b border-gray-300">Beverage Name</th>
        <th class="px-4 py-2 text-left text-gray-900 border-b border-gray-300">Price</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="beverage in beverages" :key="beverage.name" @click="selectBeverage(beverage)" class="hover:bg-gray-100">
        <td class="px-4 py-2 text-left text-black border-b border-gray-300">{{ beverage.name }}</td>
        <td class="px-4 py-2 text-right text-black border-b border-gray-300">R {{ beverage.price }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  setup() {
    const beverages = [
      { name: 'Beer', price: 45.00 },
      { name: 'Cider', price: 52.00 },
      { name: 'Premix', price: 59.00 },
    ];

    function selectBeverage(beverage) {
      emit('beverage-selected', beverage);
    }

    return {
      beverages,
      selectBeverage,
    };
  },
};
</script>