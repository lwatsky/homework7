function gettingJSON(){
    //Display the forecast
    // Your code here.
    document.getElementById('forecast').style.display = 'block';
    let apiId = 'dc1976717b533eebcfc5671763a8bbbb';

    //Set default location if one isn't provided
    
    let location;
    if (document.getElementById('location').value == '') {
        location = 'Ann Arbor';
    }
    else {
        location = document.getElementById('location').value;
    }

    // Your code here.
    console.log("Location is : " + location);

    //set default temperature format if one isn't provided
    let format;
    if (document.getElementById("celcius").checked == true) {
        format = 'metric'; 
    }
    else {
        format = 'imperial';
    }

    // Your code here.
    console.log("Format is " + format);
    

    //set the query  
    let query;
    // Your code here. 
    if (Number.isInteger(location)) {
        query = "https://api.openweathermap.org/data/2.5/weather?zip=" + location  + "&appid=" + apiId + "&units=" + format;
    }
    else {
        query = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=" + apiId + "&units=" + format;
    }
    console.log("Query is :" + query);

    //Create and set variables for each of the elements you
    //need to update, location, temp, the image, etc.

    let loc;
    let temp;
    let tempImg;
    // Your code here.


    $.getJSON(query,function(json){
        //Use returned json to update the values of the three 
        //elements in HTML.  
        //I would print the JSON to the console
        // Your code here.

        console.log(JSON.stringify(json));
        loc = json['name'];
        document.querySelector("#loc").innerHTML = loc;
        temp = json['main']['temp']; 
        document.querySelector("#temp").innerHTML = temp + " with " + json['weather'][0]['description'];

        let imageLink = "http://openweathermap.org/img/wn/" + json['weather'][0]['icon'] + '.png'; 
        let altText = json['weather'][0]['description']; 
        let imageTitle = "Weather"; 
        document.getElementById("tempImg").setAttribute("alt", altText); 
        document.getElementById("tempImg").setAttribute("src", imageLink); 
        document.getElementById("tempImg").setAttribute("title", imageTitle);

    });
}
