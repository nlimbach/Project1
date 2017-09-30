// EP - start image scroll
$(document).ready(function() {
    $('.slider').slider();


});



//EP - Weather Underground API
jQuery(document).ready(function($) {
    $.ajax({
        url : "http://api.wunderground.com/api/b2f01d8788315282/geolookup/conditions/q/PA/Sewickley.json",
        dataType : "jsonp",
        success : function(parsed_json) {
            var location = parsed_json['location']['city'];
            var temp_f = parsed_json['current_observation']['temp_f'];
            $(".weather").html("Current temperature in " + location + " is: " + temp_f +  "F");

        }
    });
});

//EP - Flickr APIJ
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.flickr.photos.geo.photosForLocation?api_key=01a6250734c101cde5b535ddafdb34f2&format=json&nojsoncallback=1&text=Atlanta&lat=33.7490&lon=84.3880",
    "method": "GET",
    "headers": {}
}

//    "url": "https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=01a6250734c101cde5b535ddafdb34f2&format=json&nojsoncallback=1&text=Atlanta&lat=33.7490&lon=84.3880",

// gallery_id=66911286-72157647277042064&
//EP - flickr API
$.ajax(settings).done(function (data) {
    console.log(data);

    $("#galleryTitle").append(data.photos.photo[0].title + " Gallery");
    $.each( data.photos.photo, function( i, gp ) {

        var farmId = gp.farm;
        var serverId = gp.server;
        var id = gp.id;
        var secret = gp.secret;

        console.log(farmId + ", " + serverId + ", " + id + ", " + secret);

//  https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg

        $("#flickr").append('<img src="https://farm' + farmId + '.staticflickr.com/' + serverId + '/' + id + '_' + secret + '.jpg"/>');

    });
});



//NL - initialize variables
var address="test";
var city="";
var state="";
var zip="";
var month="";
var MeetUpCategories = ["sports-fitness","arts-culture","beliefs","book-clubs","career-business","dancing","parents-family","fashion-beauty","film","food","health-wellness","hobbies-crafts","lgbtq","language","education","movements","music","outdoors-adventure","pets","photography","games-sci-fi","social","tech","writing"];

$("#letsGo").on("click", function(event) {
     //add buttons for each category in MeetUpCategories

     event.preventDefault();
     //when user clicks submit, save values. Month is optional, so only save if value is not null.

     address = $("#address-input").val().trim();
     address = address.split(' ').join('+');

     city = city= $("#city-input").val().trim();
     city.split(' ').join('+');

     state = $("#state-input").val().trim();
     zip = $("#zip-input").val().trim();

     if ($("#date-input").val() != "") {
            month = $("#date-input").val().trim();
     }

     //redirect to homepage.
     window.location.replace("home.html");

     console.log(address);
     console.log(city);
     console.log(state);

 });









 var radius = 25;
 var latitude;
 var longitude;

 //use google developer API to retreive latitude and longitude coordinates from address input to use to prompt meetup
//"https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyDB3dL-UoNQrilY--0ze7PI_s4bKmnwQZQ";
$("#MeetPeople").on("click", function(event) {

    event.preventDefault();

    for (i = 0; i < MeetUpCategories.length; i++) {

    // <a class='dropdown-button btn' href='#' data-activates='dropdown1'>Drop Me!</a>

        // <!-- Dropdown Structure -->
        // <ul id='dropdown1' class='dropdown-content'>
        //     <li><a href="#!">one</a></li>
        //     <li><a href="#!">two</a></li>
        //     <li class="divider"></li>
        //     <li><a href="#!">three</a></li>
        //     <li><a href="#!"><i class="material-icons">view_module</i>four</a></li>
        //     <li><a href="#!"><i class="material-icons">cloud</i>five</a></li>
        //     </ul>


    }

})

 //     var geoCodeURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + ",+" + city + ",+" + state + "&key=AIzaSyDB3dL-UoNQrilY--0ze7PI_s4bKmnwQZQ";
 //     console.log(geoCodeURL)
 //
 //     $.ajax({
 //         url: URL,
 //         method: 'GET'
 //     }).done(function(response) {
 //         console.log(response);
 //         latitude = response.results[0].geometry.location.lat;
 //         longitude = response.results[0].geometry.location.lng;
 //
 //         console.log("lat " + latitude);
 //         console.log("lng " + longitude);
 //
 //
 //         var meetupURL ="https://api.meetup.com/find/events?&sign=true&photo-host=public&lon=" + longitude + "&text="+ category + "&radius=" + radius + "&lat=" + latitude + "&key=5b3e58166d3244c6e6073631c276059";
 //         console.log(meetupURL);
 //         $.ajax({
 //             url: meetupURL,
 //             method: 'GET',
 //             dataType: "jsonp"
 //         }).done(function(response) {
 //              console.log(response);
 //         });
 // });
 //  })
 //
