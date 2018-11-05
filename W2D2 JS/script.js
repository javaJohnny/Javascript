var x = document.querySelector('a');
x.addEventListener("click", function(event){
    event.preventDefault();
});

function myFunction(){
    x.style.color="red";
    x.innerHTML = 'SIKE! lmao';
}

function myMsg(){
    alert('Page has succesfully loaded!');
}
// box 2 //
function clickFunction(obj){
    obj.style.color = 'green';
    obj.style.backgroundColor = 'black';
}
// box 3 //
document.getElementById('box3').addEventListener('mousedown', mDown);
document.getElementById('box3').addEventListener('mouseup', mUp);

function mDown(){
    var obj = document.getElementById('box3');

    obj.style.backgroundColor = "purple";
}
function mUp(){
    var obj = document.getElementById('box3');

    obj.style.backgroundColor = "gold";
}

// box 1 //
document.getElementById('box1').addEventListener('mouseenter', mEnter);
document.getElementById('box1').addEventListener('mouseleave', mLeave);
function mEnter(){
    var obj = document.getElementById('box1');
    obj.style.backgroundColor = 'blue';
}
function mLeave(){
    var obj = document.getElementById('box1');
    obj.style.backgroundColor = 'white';
}

var limit = 1;
var count = 0;
function addNode(){

    if(limit <= count){
        return false;
    }
    var loc = document.getElementById('loc');
    var node = document.createElement('button');
    var textNode = document.createTextNode('Click this');
    node.appendChild(textNode);
    node.addEventListener("click", function(){
        alert('it works');
    })
    loc.appendChild(node);
    count++
}

// input //
var input = document.getElementById('input');
input.addEventListener('keypress', inputFunction);
function inputFunction(){
    alert('you just violated your keyboard!');
}


// Add Box //
document.getElementById('addBtn').addEventListener('click', addBox);
var boxLoc = document.getElementById('boxLoc');
var boxLimit = 5;
var boxCount = 0;

function addBox(){

    if(boxLimit <= boxCount){
        return false;
    }
    var box = document.createElement('div');
    var input = document.createElement('input');
    var txtNode = document.createTextNode('Click Me');
    box.classList.add('box');
    box.appendChild(txtNode);
    box.appendChild(input);

    box.addEventListener('click', function(){
        alert('you clicked me');
        box.addEventListener('keypress',function(){
            alert('you pressed a key');
        })
    })

    boxLoc.appendChild(box);
    boxCount++
}
