var foods = [
    "John",
    "Banana",
    "Apple",
    "WaterMelon",
    "Grapes",
    "Cherry",
    "Cheese",
];
document.getElementById('demo').innerHTML= foods;

function ascending(){
    foods.sort(function(a, b){return a-b});
    document.getElementById('demo').innerHTML = foods;
}

function descending(){
    foods.sort(function(a, b){return b-a}){
        document.getElementById('demo').innerHTML = foods;
    }
}
