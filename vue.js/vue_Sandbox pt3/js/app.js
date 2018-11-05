var app = new Vue({
    el: '#app',
    data: {
        favoriteColors: ['Green', 'Red', 'Orange', 'Blue'],
        newColor: ' ',
    },
    methods: {
        // addColor: () => {
        //     // do something
        // },
        addColor(){
            // appends favoriteColors array with our new color
            this.favoriteColors.push(this.newColor),
            // clear the newColor input value
            this.newColor = " ";
        }
    }
});
