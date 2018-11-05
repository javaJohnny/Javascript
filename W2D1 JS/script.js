
function letterSpacing(){
    var p = document.querySelectorAll('p');

    for(var i=0;i < p.length; i++){
        p[i].style.letterSpacing = '2px';
    }
}
function letterSpacingCan(){
    var p = document.querySelectorAll('p');

    for(var i=0;i < p.length; i++){
        p[i].style.letterSpacing = '0px';
    }
}
function fontFamily(){
    var p = document.querySelectorAll('p');

    for(var i=0;i < p.length; i++){
        p[i].style.fontFamily = 'cursive';
    }
}
function fontFamilyCan(){
    var p = document.querySelectorAll('p');

    for(var i=0;i < p.length; i++){
        p[i].style.fontFamily = 'serif';
    }
}
var pLimit = 12;
var pCount = 0;
function addChild(){
    // limit paragraphs
    if(pLimit <= pCount){
        return false;
    }
    var node = document.createElement('p');
    var textNode = document.createTextNode('I am a new paragraph');
    node.appendChild(textNode);
    document.getElementById('body').appendChild(node);
    pCount++
}
function remChild(){
    var b = document.getElementById('body');
    b.removeChild(b.childNodes[0]);
    pCount--
}

function addClass(){
    var p = document.querySelectorAll('p');
    console.log(p);
    for(var i=0; i<p.length;i++){

        p[i].classList.add('change');
    }
}
function removeClass(){
    var p = document.querySelectorAll('p');
    for(var i=0; i<p.length;i++){

        p[i].classList.remove('change');
    }
}

var p = document.querySelectorAll('p')
for(var i=0; i<p.length; i++){
    p[i].addEventListener('click', function(){
        alert('that tickles');
    })
}
