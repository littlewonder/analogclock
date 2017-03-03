var secondHand = document.getElementById("second");
var hourHand = document.getElementById("hour");
var minuteHand = document.getElementById("minute");

function callit() {
    var master, seconds, seconds_degree, minute, minute_degree, hours, hours_degree;
    master = new Date();
    seconds = master.getSeconds();
    alert(seconds);
    seconds_degree = ((seconds / 60) * 360) ;
    var degree = "rotate(" + seconds_degree + "deg)";
    secondHand.style.transform = degree;
    var master, minute, minute_degree;
    master = new Date();
    minute = master.getMinutes();
    minute_degree = (((minute / 60) * 360) );
    var mdegree = "rotate(" + minute_degree + "deg)";
    minuteHand.style.transform = mdegree;
    var master, hours, hours_degree;
    master = new Date();
    hours = master.getHours();
    hours_degree = (((hours) * 30) );
    var hdegree = "rotate(" + hours_degree + "deg)";
    hourHand.style.transform = hdegree;
}

callit();

window.setInterval(function () {
    "use strict";
    var master, seconds, seconds_degree, minute, minute_degree, hours, hours_degree;
    master = new Date();
    seconds = master.getSeconds();
    seconds_degree = ((seconds / 60) * 360);
    var degree = "rotate(" + seconds_degree + "deg)";
    secondHand.style.transform = degree;
    minute = master.getMinutes();
    minute_degree = (((minute / 60) * 360) );
    var mdegree = "rotate(" + minute_degree + "deg)";
    minuteHand.style.transform = mdegree;
    hours = master.getHours();
    hours_degree = (((hours) * 30));
    var hdegree = "rotate(" + hours_degree + "deg)";
    hourHand.style.transform = hdegree;
}, 1000);
