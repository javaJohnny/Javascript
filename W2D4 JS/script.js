document.getElementById('weatherBtn').addEventListener('click',function(){
    var city = document.getElementById('cityName').value;

    fetch('http://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID=d65d85d92a3b330454ffa21c6e04181a')
    .then(function(response){
        response.json().then(function(data){
            console.log(data);
            var contain = document.querySelector('.container');

            var ic = document.getElementById('city');
            var tc = document.getElementById('temperature');
            var hc = document.getElementById('humidity');
            var pc = document.getElementById('pressure');
            var wc = document.getElementById('weather');


            ic.value = data.name;
            tc.value = data.main.temp;
            hc.value = data.main.humidity;
            pc.value = data.main.pressure;
            wc.value = data.weather[0].description;

            // var p = document.createElement('p');
            // var c = document.createTextNode(data.name);
            // var t = document.createTextNode(data.main.temp);
            //
            // p.appendChild(c);
            // p.appendChild(t);
            // contain.appendChild(p);
        });
    });
});
