var foxString = 'The quick brown fox jumps over the lazy dog';
var foxLength = foxString.split(" ");
var body2 = document.getElementById('body2');


var n = 0;


function addBtn(){

    // for(var i=0;i<foxLength;i++){
    //     var textNode = document.createTextNode(foxLength[i]);
    // }
    this.removeEventListener('click', addBtn, false);

    if(n == 9){
        foxbtn.removeEventListener('click', addBtn);
    }

    var foxbtn = document.createElement('button');
    foxbtn.innerText = foxLength[n];
    foxbtn.addEventListener('click', addBtn);
    body2.appendChild(foxbtn);
    n++;
}
