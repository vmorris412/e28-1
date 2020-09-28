// Vue v2
const app = new Vue({
    el: '#app',
    data: {
        item: '',
        qty: '',
        items: [],
        itemsCount: 0,
    },
    methods: {
        addItem() {
            this.items.push({ name: this.item, qty: this.qty });
            this.itemsCount += this.qty;

            // Clear inputs
            this.item = '';
            this.qty = '';
        }
    }
})

// Vue v3
// const app = Vue.createApp({
//     data() {
//         return {
//             item: '',
//             items: [],
//         }
//     }
// }).mount('#app');


