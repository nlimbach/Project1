
$("#letsGo").on("click", function(event) {
    event.preventDefault();
    window.location.replace("home.html");

    var city = $("#city-input").val().trim();
    var month= $("#month-input").val().trim();



})

var city = localStorage.getItem("city");
var month = localStorage.getItem("month");

console.log(city);
console.log(month);

$("#putCity").text(city);
