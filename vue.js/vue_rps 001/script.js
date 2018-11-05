Vue.component('result', {
    template:
    `
        <div>

        </div>
    `
});

let rsp = new Vue({
    el: "#app",
    data: {
        userPick: null,
        cpuPick: null,
        userScore: 0,
        cpuScore:0,
        options: ['Rock', 'Paper', 'Scissors'],
    },
    methods: {
        choose: function(pick){
            let test = this.userPick = pick;
            let rand = Math.floor((Math.random() * 3));
            let cpuPick = this.options[rand];
            alert(test +" Vs "+ cpuPick);
        },
        cpuHand(){
            let rand = Math.floor((Math.random() * 3) + 1);
            alert(this.options[rand - 1]);
            let cpuPick = this.options[rand - 1];
        },
    },
});
