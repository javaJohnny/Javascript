var restaurant =[
    {
    name: 'Buffalo Wild Wings',
    location: 'Rundle',
    latitude: 51.0908037,
    longitude: -114.064969
    },
    {
    name: 'Boston Pizza',
    location: 'SaddleTowne',
    latitude: 51.0906363,
    longitude: -114.0649694
    },
    {
    name: 'AppleBees',
    location: 'Marlborough',
    latitude: 51.0906433,
    longitude: -114.0358694
    }
]
function Restaurant(name,location,latitude,longitude){
    this.name = name;
    this.location = location;
    this.latitude = latitude;
    this.longitude = longitude;
    this.getCoordinates = function(){
        return {
            latitude: this.latitude,
            longitude: this.longitude
        }
    }

    // create a new dom button
    var newBtn = document.createElement('button');
    // add a text node to it
    var btnText = document.createTextNode(this.name);
    newBtn.appendChild(btnText);
    var self = this;
    // add an event listener to alert the Name
    newBtn.addEventListener('click', function(){
        alert(self.name + ' on ' + self.location);
    });
    // insert the button in to the body
    var body = document.getElementById('body');
    body.appendChild(newBtn);
}


// loop through restaurants
var rLength = restaurant.length;

for(var i=0;i<rLength;i++){
    new Restaurant(restaurant[i].name, restaurant[i].location,restaurant[i].latitude,restaurant[i].longitude)
}
// instantiate a new Restaurant object for each list item (restaurant)
