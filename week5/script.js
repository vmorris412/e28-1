let app = new Vue({
    el: '#app',
    data: {
        randomNumber1: Math.floor((Math.random() * 10) + 1),
        randomNumber2: Math.floor((Math.random() * 10) + 1),
        answer: '',
    },
    methods: {
        submitAnswer() {
            console.log('Submit answer...');
        },
    }
})
