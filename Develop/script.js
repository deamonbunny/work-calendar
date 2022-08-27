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

renderLogData(true, 9)

function renderLogData(dataLog, num) {
    if (dataLog) {
        for(var i = 9; i <= 17; i++) {
            var task = localStorage.getItem("task"+num.toString());
            if (!task) {
                return;
            } switch(num) {
                case 9:
                    text1.textContent = task;
                    $("#block9").attr("placeholder", task)
                    break;
                case 10:
                    text2.textContent = task;
                    $("#block10").attr("placeholder", task)
                    break;
                case 11:
                    text3.textContent = task;
                    $("#block11").attr("placeholder", task)
                    break;
                case 12:
                    text4.textContent = task;
                    $("#block12").attr("placeholder", task)
                    break;
                case 13:
                    text5.textContent = task;
                    $("#block13").attr("placeholder", task)
                    break;
                case 14:
                    text6.textContent = task;
                    $("#block14").attr("placeholder", task)
                    break;
                case 15:
                    text7.textContent = task;
                    $("#block15").attr("placeholder", task)
                    break;
                case 16:
                    text8.textContent = task;
                    $("#block16").attr("placeholder", task)
                    break;
                case 17:
                    text9.textContent = task;
                    $("#block17").attr("placeholder", task)
                    break;                
            }
            num++
        }
    } else {
        var task = localStorage.getItem("task"+num.toString());
        if (!task) {
            return;
        } switch(num) {
            case 9:
                text1.textContent = task;
                break;
            case 10:
                text2.textContent = task;
                break;
            case 11:
                text3.textContent = task;
                break;
            case 12:
                text4.textContent = task;
                break;
            case 13:
                text5.textContent = task;
                break;
            case 14:
                text6.textContent = task;
                break;
            case 15:
                text7.textContent = task;
                break;
            case 16:
                text8.textContent = task;
                break;
            case 17:
                text9.textContent = task;
                break;                
        }
    }
}

