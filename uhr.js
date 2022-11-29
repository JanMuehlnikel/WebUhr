x = "TEST"


function uhr() { 
    date = new Date();

    hours = date.getHours();
    mins = date.getMinutes();
    secs = date.getSeconds();

    c_hour = ("0" + hours).slice(-2)
    c_mins = ("0" + mins).slice(-2)
    c_secs = ("0" + secs).slice(-2)

    zeit = c_hour + ":" + c_mins + ":" + c_secs;
    console.log(zeit);
    document.getElementById("zeit").innerHTML = zeit;
} 

setInterval(function() {uhr()}, 1000);