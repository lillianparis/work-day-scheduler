// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

// an array of times
let workSchedule = [{
    "8 AM": localStorage.getItem("8"),
    "9 AM": localStorage.getItem("9"),
    "10 AM": localStorage.getItem("10"),
    "11 AM": localStorage.getItem("11"),
    "12 PM": localStorage.getItem("12"),
    "1 PM": localStorage.getItem("1"),
    "2 PM": localStorage.getItem("2"),
    "3 PM": localStorage.getItem("3"),
    "4 PM": localStorage.getItem("4"),
    "5 PM": localStorage.getItem("5"),
}];

console.log(workSchedule)


let saveEvent = "";
let currentTime = moment().hour();

// Create current date and time to be displayed on top of the page
const today = new Date();
const day = today.getDay();
const daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
// displays in the console
// $ indicates storing and retriving data related to an element
console.log(`Today is : ${daylist[day]}.`);
let hour = today.getHours();
const minute = today.getMinutes();
const second = today.getSeconds();
// prepand inserts specified content at the begining of the selected elements
let prepand = (hour >= 12) ? " PM " : " AM ";
hour = (hour >= 12) ? hour - 12 : hour;
// the === returns true if both operands are the same type and contain the same value
if (hour === 0 && prepand === ' PM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Noon';
    }
    else {
        hour = 12;
        prepand = ' PM';
    }
}
if (hour === 0 && prepand === ' AM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Midnight';
    }
    else {
        hour = 12;
        prepand = ' AM';
    }
}
// displays time in the console
console.log(`Current Time : ${hour}${prepand} : ${minute}`);
// lets the current date and time to appear on the page under the title and desription.
// the month date and year is displayed and then the time is displayed last.
$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm a"));

// Saving to local storage

$(".save").on("click", function () {
    saveEvent = $(this).siblings("#text-entry").val();
    let elementId = $(this).siblings("#text-entry").attr("data-hour");
    // console.log(this)
    // (key first, then value)
    localStorage.setItem(elementId, saveEvent)
})
$(".save").on("click", function () {
    location.reload();
})

$("textarea").each(function () {
    
    let elementId = $(this).attr("data-hour");

    let localValue = localStorage.getItem(elementId);
    if (localValue != null) {
        $(this).val(localValue)
        // console.log(this)
    }

    // Change colors of timeblock for past, present and future
    // Setting up past, present and future...
    currentTime = moment().hours();
    console.log(currentTime)
    let timeBlock = $(this).attr("data-hour")
    
    if (timeBlock > currentTime) {
        $(this).addClass("future")
    } else if (timeBlock < currentTime) {
        $(this).addClass("past")
    } else if (timeBlock == currentTime) {
        $(this).addClass("present")
    }

});