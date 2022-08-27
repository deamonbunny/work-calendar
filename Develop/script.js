//write event handler for sumbit button to save form info
//keep forms from wiping data on submission
//write event handler for page load to generate past saved schedule from local memory
//get cells to change color with time
//

var update1 = document.querySelector("#save9");
var update2 = document.querySelector("#save10");
var update3 = document.querySelector("#save11");
var update4 = document.querySelector("#save12");
var update5 = document.querySelector("#save13");
var update6 = document.querySelector("#save14");
var update7 = document.querySelector("#save15");
var update8 = document.querySelector("#save16");
var update9 = document.querySelector("#save17");

var text1 = document.querySelector("#block9");
var text2 = document.querySelector("#block10");
var text3 = document.querySelector("#block11");
var text4 = document.querySelector("#block12");
var text5 = document.querySelector("#block13");
var text6 = document.querySelector("#block14");
var text7 = document.querySelector("#block15");
var text8 = document.querySelector("#block16");
var text9 = document.querySelector("#block17");


var timeFrame = setInterval(function(){
    var currentTime = moment().format('MMMM Do YYYY, hh:mm:ss');
    $("#currentDay").text(currentTime);
}, 1000 );

var timeNow = moment().format('hh');
const date = Date();
var timeHours = date.getTime();

for (var i = 9; i <= 17; i++)
{
    if(timeHours > i)
    {
        var slot = document.querySelector("#block" + i.toString());
        $(slot).addClass("past");

    }
    else if (timeHours == i)
    {
        var slot = document.querySelector("#block" + i.toString());
        $(slot).addClass("present");
    }
    else if (timeHours < i)
    {
        var slot = document.querySelector("#block" + i.toString());
        $(slot).addClass("future");
    }
}

