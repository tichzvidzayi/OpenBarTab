import { reactive, computed } from 'vue';

const OrderStore = reactive({
    beverages: [
        { name: 'Beer', price: 45.00, quantity: 0 },
        { name: 'Cider', price: 52.00, quantity: 0 },
        { name: 'Premix', price: 59.00, quantity: 0 }
    ],
    get totalBill() {
        return computed(() => {
            return OrderStore.beverages.reduce((total, beverage) => {
                return total + (beverage.price * beverage.quantity);
            }, 0).toFixed(2);
        });
    },
    setBeverageQuantity(name, quantity) {
        const beverage = OrderStore.beverages.find(bev => bev.name === name);
        if (beverage) beverage.quantity = quantity;
    }
});

export default OrderStore;
