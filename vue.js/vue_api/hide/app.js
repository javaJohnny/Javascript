Vue.component('search', {
    name: 'search',
    data() {
        return{
            search: null,
            gifs: [],
            selectedGif: ' ',
            dropDown: false,
        }
    },
    template:
    `
        <div class="container">
            <h1> GIPHY </h1>
            <input type="text"
            @keyup.enter="doSearch"
            v-model="search"
            placeholder="Search For Gifs...">

            <div class="showCard" :class="{'show' : dropDown}">
                <br />
                <div class="result">
                    <a href="#"
                    v-for="gif in gifs"
                    @click="selectGif(gif.images)">
                    <img :src="gif.images.original.url">
                    </a>
                </div>
                <div class="selected">
                    <img :src="selectedGif" >
                </div>

            </div>
        </div>
    `,
    methods: {
        doSearch(){

            if(!this.search){
                 return false;
            }
            this.gif = [];
            this.dropDown = false;

            axios.get('https://api.giphy.com/v1/gifs/search?q='+this.search+'&api_key=w4SBZbdOPGDTz4UwfTyD5Jez0DtfJs7K&limit=12', {
            })
            .then((response) => {
                console.log(response);

                this.loadGifs(response.data.data);
            })
        },
        loadGifs(data) {
            this.gifs = data;
            this.dropDown = true;
        },
        selectGif(data) {
            this.selectedGif = data.original.url;
        },
    },
});

let app = new Vue ({
    el:'#app',
})
