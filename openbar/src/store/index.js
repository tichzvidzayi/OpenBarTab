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
        // Logic to submit order to backend or perform other actions
        console.log('Order submitted:', this.beverages);
        alert("Order submitted: ")
        // You can perform any further action needed here
    }
});

export default orderStore;
