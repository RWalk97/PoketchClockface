import { me } from "appbit";
import clock from "clock";
import document from "document";
import * as fs from "fs";
import * as util from "./utils";


// Get a handle on the <text> element
const myLabel = document.getElementById("myLabel");
const myDate = document.getElementById("myDate");

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthnames = ["Month01", "Month02", "Month03", "Month04", "Month05", "Month06", "Month07, Month08", "Month09", "Month10", "Month11", "Month12"];
const month2 = ["31", "28", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"];


let selectcalendar = document.getElementById("selectcalendar");
let numbermonth = document.getElementById("numbermonth");
let twentynine = document.getElementById("twentynine");
let thirty = document.getElementById("thirty");
let thirtyone = document.getElementById("thirtyone");
let box = document.getElementById("box");



let myRect1 = document.getElementById("myRect1");
myRect1.style.display = "none";
myRect1.style.display = "inline";

let myRect2 = document.getElementById("myRect2");
myRect2.style.display = "inline";
myRect2.style.display = "none";

let myRect3 = document.getElementById("myRect3");
myRect3.style.display = "inline";
myRect3.style.display = "none";


let myRect = document.getElementById("myRect");

myRect1.onclick = function(e) {
  console.log("click");
    toggle(myRect1);
    toggle(myRect2);
}
myRect2.onclick = function(e) {
  console.log("click");
    toggle(myRect2);
    toggle(myRect3);
}
myRect3.onclick = function(e) {
  console.log("click");
    toggle(myRect3);
    toggle(myRect1);
}

// Toggle Show/Hide
function toggle(ele) {
  ele.style.display = (ele.style.display === "inline") ? "none" : "inline";
}


// TIME
let separator = document.getElementById("separator");
let hours1 = document.getElementById("hours1");
let hours2 = document.getElementById("hours2");
let mins1 = document.getElementById("mins1");
let mins2 = document.getElementById("mins2");

// DATE
let day = document.getElementById("day");
let date1 = document.getElementById("date1");
let date2 = document.getElementById("date2");


clock.granularity = "seconds";

clock.ontick = evt => {
  let d = evt.date;
  let today = evt.date;
  let hours = today.getHours();
  let monthnum = today.getMonth();
  let day = today.getDate();
  let year = today.getYear()+1900;
  let dayName = days[today.getDay()];
  let monthnames2 = monthnames[monthnum];
  let monthdaysnumber = month2[monthnum];
  let month3 = month2[monthnum];


  // HOURS
  let hours = d.getHours();
 
     // 24h format
    hours = util.zeroPad(hours);

  setHours(hours);

  // MINUTES
  let minute = ("0" + d.getMinutes()).slice(-2);
  setMins(minute);

  // BLINK SEPARATOR
  setSeparator(d.getSeconds());
  
  
  
   
  
  var d = new Date();
 d.setDate(d.getDate()-day+1);
  
  let dayName2 = days[d.getDay()];
  
  
  
  //leapyear
      if ((year % 4 == 0) && ((year % 100 != 0) || (year % 400 == 0))) {
        month2[1] = "29";
      }

  

 
  
      if (monthdaysnumber === "29") {
   let twentyninesetup = `${dayName2}${29}`;
  } else {
  };
 
      if (monthdaysnumber === "30") {
   let twentyninesetup = `${dayName2}${29}`;
   let thirtysetup = `${dayName2}${30}`;
  } else {
  };

  
        if (monthdaysnumber === "31") {
   let twentyninesetup = `${dayName2}${29}`;
   let thirtysetup = `${dayName2}${30}`;
      let thirtyonesetup = `${dayName2}${31}`;
  } else {
  };


  
     var weekday = new Array();
  weekday["Sun"] = 0;
  weekday["Mon"] = 1;
  weekday["Tue"] = 2;
  weekday["Wed"] = 3;
  weekday["Thu"] = 4;
  weekday["Fri"] = 5;  
  weekday["Sat"] = 6;


let boxAdjust = weekday[dayName2];
  
  let boxNo = day + boxAdjust;
  
  if (boxNo < "10") {
  let boxNum = `${0}${boxNo}`;
      } else {
    let boxNum = boxNo;
  }
    
  let boxSetup = `${"Box"}${boxNum}`;
  
  drawDigit(boxSetup, box);
  
 
  
  
  
  
  

  
  
  
  
       drawDigit(twentyninesetup, twentynine);
       drawDigit(thirtysetup, thirty);
       drawDigit(thirtyonesetup, thirtyone);
  
  
   drawDigit(monthnames2, numbermonth);
 
   drawDigit(dayName2, selectcalendar);
  

 

  
}



// Blink time separator
function setSeparator(val) {
  separator.style.display = (val % 2 === 0 ? "inline" : "none");
}














function setHours(val) {
  if (val > 9) {
    drawDigit(Math.floor(val / 10), hours1);
  } else {
    drawDigit("", hours1);
  }
  drawDigit(Math.floor(val % 10), hours2);
}

function setMins(val) {
  drawDigit(Math.floor(val / 10), mins1);
  drawDigit(Math.floor(val % 10), mins2);
}




function setDay(val) {
  day.image = getDayImg(val);
}



function getDayImg(index) {
  let days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  return `day_${days[index]}.png`;
}






function drawDigit(val, place) {
  place.image = `${val}.png`;
}








