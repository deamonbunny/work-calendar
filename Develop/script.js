//write event handler for sumbit button to save form info
//keep forms from wiping data on submission
//write event handler for page load to generate past saved schedule from local memory
//get cells to change color with time
//

var timeFrame = setInterval(function(){
    var currentTime = moment().format('MMMM Do YYYY, hh:mm:ss');
    $("#currentDay").text(currentTime);
}, 1000 );



