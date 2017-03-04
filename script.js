var secondHand = document.getElementById("second");
var hourHand = document.getElementById("hour");
var minuteHand = document.getElementById("minute");
var mute = 0;
function callit() {
    var master, seconds, seconds_degree, minute, minute_degree, hours, hours_degree;
    master = new Date();
    seconds = master.getSeconds();
    if(seconds === 0){
        seconds = 60;
    }
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
    switch(mute){
        case(1):
            document.getElementById("sound").pause();
            break;
        case(0):
            document.getElementById("sound").play();
            break;
    }
    "use strict";
    var master, seconds, seconds_degree, minute, minute_degree, hours, hours_degree;
    master = new Date();
    seconds = master.getSeconds();
    if(seconds === 0){
        seconds = 60;
    }
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

var togglemuteflag = function(){
    var button = document.getElementById("btn");
    switch(mute){
        case(1):
            mute = 0;
            button.src="volume.png";
            break;
        case(0):
            mute = 1;
            button.src="mute.png";
            break;
    }
};

