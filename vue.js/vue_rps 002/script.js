Vue.component('result', {
    props: ['userData', 'cpuData','drawData', 'outcomeData', 'msgData'],
    template:
    `
        <div>
            <div class="scoreboard">
                <div class="outcomeCard">
                    <h3 v-text="outcomeData"></h3>
                </div>
                <div class="card">
                    <h3>User</h3>
                    <p v-text="userData"></p>
                </div>
                <div class="card">
                    <h3>Draw</h3>
                    <p v-text="drawData"></p>
                </div>
                <div class="card">
                    <h3>CPU</h3>
                    <p v-text="cpuData"></p>
                </div>
                <div class="msgCard">
                    <h3 v-text="msgData"></h3>
                </div>
            </div>
        </div>
    `,
});

let rsp = new Vue({
    el: "#app",
    data: {
        userPick: null,
        cpuPick: null,
        userScore: 0,
        cpuScore:0,
        draw:0,
        options: ['Rock', 'Paper', 'Scissors'],
        outcome: null,
        msg: null,
    },
    methods: {
        choose: function(pick){
            this.userPick = this.options[pick];
            let rand = Math.floor((Math.random() * 3));
            this.cpuPick = this.options[rand];
            this.outcome = this.userPick +" Vs "+ this.cpuPick;
            this.setScore();
        },
        setScore() {
            if (this.userPick == 'Rock'){
                if (this.cpuPick == 'Paper'){
                    this.msg = 'You Loose...';
                    this.cpuScore++;
                } else if(this.cpuPick == 'Scissors'){
                    this.msg = 'You Win!!';
                    this.userScore++;
                } else {
                    this.msg = 'Draw.';
                    this.draw++;
                }
            }
            if(this.userPick == 'Paper'){
                if(this.cpuPick == 'Rock'){
                    this.msg = 'You Win!!';
                    this.userScore++;
                } else if(this.cpuPick == 'Scissors'){
                    this.msg = 'You Loose...';
                    this.cpuScore++;
                } else {
                    this.msg = 'Draw.';
                    this.draw++;
                }
            }
            if(this.userPick == 'Scissors'){
                if(this.cpuPick == 'Rock'){
                    this.msg = 'You Loose...';
                    this.cpuScore++
                } else if(this.cpuPick == 'Paper'){
                    this.msg = 'You Win!!';
                    this.userScore++;
                } else {
                    this.msg = 'Draw.';
                    this.draw++;
                }
            }
        }




    },
});
