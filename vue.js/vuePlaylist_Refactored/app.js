Vue.component('song-list', {
    template: `
    <div>
        <ul>
            <div class="bubble" v-for="song in music">
            <song>
                <img src="icon.png" alt="icon">
                <p><strong>Name: </strong> {{ song.name }}
                    <br />
                    <strong>Artist: </strong>{{ song.artist }}
                </p>
                <div>
                <img src="like.png" alt="like"/>
                </div>
            </song>
            </div>
        </ul>
        <hr>
        <div class="wrapper">
            <h2>New Song: </h2>
            <div class="input">
                <input type="text" placeholder="Add Song" v-model="newMusic.name">
                <input type="text" placeholder="Add Artist" v-model="newMusic.artist">
            </div>
            <br />
            <div class="button">
                <button type="submit" @click="addMusic" class="btn">Add</button>
                <button type='button' @click="deleteMusic" class="btn delete">Delete</button>
            </div>
        </div>
    </div>
    `,
    data() {
        return {
            music: [{
                    name: 'Feels Like Summer',
                    artist: 'Childish Gambino'
                },

                {
                    name: 'Don\'t Matter To Me',
                    artist: 'Drake (ft. Michael Jackson)'
                },
                {
                    name: 'Suede',
                    artist: 'NxWorries, Anderson .Paak, Knxwledge - Yes Lawd!'
                },
                {
                    name: 'Walking On a Dream',
                    artist: 'Empire of The Sun'
                }
            ],

            newMusic: [{
                name: ' ',
                artist: ' '
            }],

            favorite: false,

        }

    },
    methods: {
        addMusic() {
            this.music.push(this.newMusic),
                this.newMusic = {};
        },

        deleteMusic() {
            this.music.pop(this.music)
        },
        toggleFavorite() {
            this.favorite = !this.favorite
        }
    }
})

Vue.component('song', {
    template:
    `
        <li>
            <slot></slot>
        </li>
    `,
});


let app = new Vue({
    el: '#playlist',
    data: {},
});
