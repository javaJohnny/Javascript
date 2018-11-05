var button = document.getElementById('addBoxButton');
var removeButton = document.getElementById('removeBoxButton');
var boxes = document.getElementById('boxes');

button.addEventListener('click', addBox);
removeButton.addEventListener('click', removeBox);

var boxLimit = 5;
var boxCount = 1;

function addBox(){
    // make sure boxcount is never greater than box limit
    if(boxLimit <= boxCount - 1) {
        return false;
    }

    // create new object in JS memory
    var box = document.createElement('div');

    // setup text node
    var boxText = document.createTextNode(boxCount);

    // add text node to the html node
    box.appendChild(boxText);

    // add .box class
    box.classList.add('box');

    // add click listener
    box.addEventListener('click', function(){
        alert('Hello I am box #' + this.innerText);
    });

    // insert my box in to the DOM
    boxes.appendChild(box);

    // increment
    boxCount++;
}


function removeBox(){

    // target the specific box to remove
    var target = document.querySelector('.box');

    // remove child from it's parent
    boxes.removeChild(target);

    // increment
    boxCount--;

}
