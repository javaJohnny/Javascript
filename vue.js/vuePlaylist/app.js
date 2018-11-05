let app = new Vue({
    el: '#playlist',
    data: {
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

    },
    methods: {

        addMusic() {
            this.music.push(this.newMusic),
                this.newMusic = {};
        },

        deleteMusic() {
            this.music.pop(this.music)
        }
    }
});
