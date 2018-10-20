console.log("connected");

document.body.innerHTML += "<h1>" + (Math.random()*20) + "</h1>";

document.body.innerHTML += "<h1>" + (Math.random()*200) + "</h1>";

console.log(Math.ceil(4.32));

var myArray = ["one", "two", "three"];

document.body.innerHTML += "<h1>" + myArray[Math.ceil(Math.random() * myArray.length - 1)] + "</h1>";

var myDate = new Date();
console.log(myDate);

var year = myDate.getYear();
console.log(year);

var fullYear = myDate.getFullYear();
console.log(fullYear);

var seconds = myDate.getSeconds();
console.log(seconds);

var milliSec = myDate.getMilliseconds();
console.log(milliSec);

// delay log the hours of the day
	// setTimeout(function, number)
setTimeout(function() {
	console.log(myDate.getHours()); 
}, 2000);

// does the same as the above
var myFunc = function(){
	alert("hello");
}

var secs = 2000;
setTimeout(myFunc, secs);


// this function logs the hh:mm:ss
setTimeout(function(){
	console.log(
		myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds()
		)
}, 4000)

// converting from military time
setTimeout(function(){
	console.log
})


// to make sure you have double digit numbers on displaying time as hh:mm:ss
var hh = formatTime(myDate.getHours());
var mm = formatTime(myDate.getMinutes());
var ss = formatTime(myDate.getSeconds());

if(hh < 10) {
	hh = "0" + hh;
}

if(mm < 10) {
	mm = "0" + mm;
}

if(ss < 10) {
	ss = "0" + ss;
}

// or, more appropriate function below

function formatTime(timeVar){
	if(timeVar < 10) {
		return timeVar = "0" + timeVar;
	}else{
		return timeVar;
	}
}

// year, month, day, hour, minute, second
var d = new Date(2018, 11, 24, 10, 33, 30);

// year, month, day
var past = new Date(1984, 11, 29); // my birthday
var future = new Date(2018, 11, 14); // when I will get hired

console.log(past)
console.log(future)


// setTimeout
var a = function(){alert("hi Mom!")};
var b = 3000;

console.log(setTimeout(a, b));


// setTimeout calling itself
let timerId = setTimeout(function tick () {
	console.log('tick-tock');
	timerId = setTimeout(tick, 2000);
}, 2000);
// or
setInterval(function(){
	console.log('tick');
}, 1000);

// 16. display current hour using event listener
document.getElementById('displayHour').addEventListener('click', function(){
	document.body.innerHTML = "<h3>" + myDate.getHours() + "</h3>";
})

// 17. 6 example events
	// click
	// keypress
	// mouseover
	// keyup
	// keydown
	// mouseleave
	// scroll
	// mouseout
	// mouseup
	// mouseenter

// 18. string and function used for event listeners

