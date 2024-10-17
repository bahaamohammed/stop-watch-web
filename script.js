let time = document.getElementById("time");
let playButton = document.getElementById("playButton"); // Assuming play button has this id
let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timer = null;
let isRunning = false; // To track the play/pause state

function stopWatch() {
    milliseconds += 10; // Update by 10ms
    if (milliseconds == 1000) {
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

function toggleStartPause() {
    if (isRunning) {
        // Pause the timer
        clearInterval(timer);
        playButton.src = "images/start.png"; // Change image to "Start"
    } else {
        // Start the timer
        timer = setInterval(stopWatch, 10); // Update every 10ms
        playButton.src = "images/pause.png"; // Change image to "Pause"
    }
    isRunning = !isRunning; // Toggle the state
}

function watchReset() {
    clearInterval(timer);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    time.innerHTML = "00:00:00:000"; // Reset the display
    playButton.src = "images/start.png"; // Reset to start icon
    isRunning = false; // Reset the state
}
