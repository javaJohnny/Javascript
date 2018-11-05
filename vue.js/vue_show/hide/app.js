new Vue ({
    el: "#demo-1",
    data: {
        activeButton: true,
    },
    methods: {
        toggleButton() {
            //toggles between 1 and 2 to show corresponding button
        //     if(this.activeButton == 1) {
        //         this.activeButton = 2
        //     } else {
        //         this.activeButton = 1
        //     }
        // }

            // true/false for booleans
        this.activeButton = !this.activeButton
    },
}
});
