let time = document.getElementById("time");
let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timer = null;

function stopWatch(){
    milliseconds += 10; // Update by 10ms for precision
    if (milliseconds == 1000) { // 1000 milliseconds equals 1 second
        milliseconds = 0;
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 100 ? (milliseconds < 10 ? "00" + milliseconds : "0" + milliseconds) : milliseconds;
    time.innerHTML = h + ":" + m + ":" + s + ":" + ms;
}

function watchStart(){
    if(timer != null){
        clearInterval(timer);
    }
    timer = setInterval(stopWatch, 10); // Set to update every 10ms
}

function watchStop(){
    clearInterval(timer);
}

function watchReset(){
    clearInterval(timer);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    time.innerHTML = "00:00:00:000"; // Update to show milliseconds
}
