Vue.component('tweetlist', {
    props: ['tweets'],
    template:
    `
        <div class="box">
            <div class="tweet">
                <h5 v-text="tweets.author"></h5>
                <p v-text="tweets.message"></p>
            </div>
        </div>
    `,
    data() {
        return{

        }
    }

})

let app = new Vue ({
    el: "#demo-1",
    data: {
        tweets: null,
    },
    mounted() {
        axios.get('http://james-allen.ca/projects/lessons/ajax/tweets.php')
        .then(response => {
            console.log(response);
            this.tweets = response.data
        })


    }
});
