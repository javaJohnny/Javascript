

fetch('http://localhost:8000/api/tweets').then(
    function(response){
        response.json().then(function(data){
            console.log(data);
            var dlength = data.length;
            var body = document.getElementById('laravel');
            for(var i=0;i<dlength;i++){
                var tweetId = document.createElement('h4');
                var tweetBody = document.createElement('article');
                var textNode = document.createTextNode(data[i].body);
                var idNode = document.createTextNode(data[i].user_id);
                var user = document.createTextNode('User_Id: ');
                tweetId.appendChild(user);
                tweetId.appendChild(idNode);
                tweetBody.appendChild(textNode);
                body.appendChild(tweetId)
                body.appendChild(tweetBody);
            }
        });
    }
)
