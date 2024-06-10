import { reactive, computed } from 'vue';

const orderStore = reactive({
    beverages: [
        { name: 'Beer', price: 45.00, quantity: 0 },
        { name: 'Cider', price: 52.00, quantity: 0 },
        { name: 'Premix', price: 59.00, quantity: 0 }
    ],
    get totalBill() {
        return computed(() => {
            return this.beverages.reduce((total, beverage) => {
                return total + (beverage.price * beverage.quantity);
            }, 0).toFixed(2);
        });
    },
    submitOrder() {
        alert(`Your order was successfully submitted`);
    }
});

export default orderStore;
