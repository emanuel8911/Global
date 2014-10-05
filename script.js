

var webapps = ["facebook", "tocmai", "mercador", "24broker", "ebay" ];
text = "";
var x;
for (x = 0; x < webapps.length; x++) {
		text +=webapps[x] + "<br>";
}

    document.getElementById("emanuel").innerHTML = text; 


function myLoop() {
    var txt = "";
    var a = 0;
    while (a < 10) {
        txt += "<br>The number is " + a;
        a++;
    }
    document.getElementById("emanuel3").innerHTML = txt;
}

function myTime() {
    var x = new Date(); 
	var h = x.getHours(); 
	var m = x.getMinutes(); 
	var s = x.getSeconds();
    document.getElementById("emanuel7").innerHTML = x;	
}

function bigImg(x) {
    x.style.height="128px";
    x.style.width="128px";
}

function normalImg(x) {
    x.style.height="32px";
    x.style.width="32px";
}
function myFunction() {
    y = 5;
    z = 2;
    x = y + z;
    document.getElementById("emanuel4").innerHTML = x;
}

function concatenate() {
    var str1 = "Good  ";
    var str2 = "Morning!";
    var res = str1.concat(str2);
    document.getElementById("emanuel5").innerHTML = res;
}
function splitFunction() {
    var str = "How are you doing today?";
    var res = str.split(" ");
    document.getElementById("emanuel6").innerHTML = res;
	return;
}



function trycatch() {
    var message, c;
    message = document.getElementById("message");
    message.innerHTML = "";
    c = document.getElementById("emanuel1").value;
    try { 
        if(c == "")  throw "is Empty";
        if(isNaN(c)) throw "not a number";
        if(c > 10)   throw "too high";
        if(c < 5)    throw "too low";
    }
		catch(err) {
        message.innerHTML = "Input " + err;
    }
		finally {
		document.getElementById("emanuel1").value = "";}
}


function swichFunction() {
    var day;
    switch (new Date().getDay()) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case  6:
            day = "Saturday";
            break;
    }
    document.getElementById("emanuel2").innerHTML = "Today is " + day;
}


