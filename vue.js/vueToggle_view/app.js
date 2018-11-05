Vue.component('item-list', {
    props: ['items'],
    template:

        `
        <div>
            <div>
                <button class="btn btn-primary" @click="toggleView">Toggle View</button>
            </div>
            <div class="item-list row">
                <item v-for="item in items"
                :itemData="item"
                :class="gridView ? 'col-sm-4' : 'col-sm-12'">
                </item>
            </div>
        </div>
    `,
    data() {
        return {
            gridView: false,
        }
    },
    methods: {
        toggleView() {
            this.gridView = !this.gridView;
        }
    }
});

Vue.component('item', {
    props: ['itemData'],
    template: `
        <div>
            <div class="item">
                <img :src="itemData.photo"/>
                    <h5>{{ itemData.name }}</h5>
                    <h6>{{ itemData.price }}</h6>
                    <p>{{ itemData.description }}</p>
            </div>
        </div>
    `,
});

new Vue({
    el: "#app",
    data: {
        products: [
            {
                name: 'Toaster',
                price: 24.99,
                description: 'Hellu\'va toaster if you ask me, trust.',
                photo: 'toaster.jpg',
            },
            {
                name: 'Cell Phone',
                price: 99.99,
                description: 'It\'s a phone that you can bring around with you anywhere.',
                photo: 'cellphone.jpg',
            },
            {
                name: 'Car',
                price: 999.99,
                description: 'Not like your normal Ferarri.',
                photo: 'car.jpg',
            },
            {
                name: 'Toaster',
                price: 24.99,
                description: 'Hellu\'va toaster if you ask me, trust.',
                photo: 'toaster.jpg',
            },
            {
                name: 'Book',
                price: 14.99,
                description: 'Cuz you dumb! "UH DUHH UH DOY!"',
                photo: 'book.jpg',
            },
            {
                name: 'Car',
                price: 999.99,
                description: 'Not like your normal Ferarri.',
                photo: 'car.jpg',
            },
            {
                name: 'Cell Phone',
                price: 99.99,
                description: 'It\'s a phone that you can bring around with you anywhere.',
                photo: 'cellphone.jpg',
            },
            {
                name: 'Book',
                price: 14.99,
                description: 'Cuz you dumb! "UH DUHH UH DOY!"',
                photo: 'book.jpg',
            },

        ],
    }
});
