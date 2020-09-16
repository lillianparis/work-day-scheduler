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
    "8 AM": "",
    "9 AM": "",
    "10 AM": "",
    "11 AM": "",
    "12 PM": "",
    "1 PM": "",
    "2 PM": "",
    "3 PM": "",
    "4 PM": "",
    "5 PM": "",
}];
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
console.log(`Current Time : ${hour}${prepand} : ${minute} : ${second}`);
// lets the current date and time to appear on the page under the title and desription.
// the month date and year is displayed and then the time is displayed last.
$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

// Assign the save button to a click listener, so text inputed into each hour is saved
$("#save").on("click", function () {
    console.log(this);
    let text = $(this).siblings("#text-entry1").val();
    let time = $(this).parent().attr("calender-row1");

    localStorage.setItem(time, text);
})
// Saving to local storage
// We access the value with getItem
// We put the text on the page with .text
// The selector I use is text-entry1
$("#text-entry1").text(localStorage.getItem("text-entry1"));
$("#text-entry2").text(localStorage.getItem("hour9"));
$("#text-entry3").text(localStorage.getItem("hour10"));
$("#text-entry4").text(localStorage.getItem("hour11"));
$("#text-entry5").text(localStorage.getItem("hour12"));
$("#text-entry6").text(localStorage.getItem("hour1"));
$("#text-entry7").text(localStorage.getItem("hour2"));
$("#text-entry8").text(localStorage.getItem("hour3"));
$("#text-entry9").text(localStorage.getItem("hour4"));
$("#text-entry10").text(localStorage.getItem("hour5"));



// Change colors of timeblock for past, present and future

function timeTracker() {
    let currentHour = moment().hour();
}