
const stopwatchDisplay = document.getElementById('stopwatch');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

let startTime;
let updatedTime;
let difference=0;
let tInterval;
let running = false;


const formatTime=(time)=> {
    let hours = Math.floor(time / 3600000);
    let minutes = Math.floor((time % 3600000) / 60000);
    let seconds = Math.floor((time % 60000) / 1000); 

    return (
        (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
        ":" +
        (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
        ":" +
        (seconds > 9 ? seconds : "0" + seconds)
    );
}


const startStopwatch=()=> {
    if (!running) {
        startTime = new Date().getTime() - difference;
        tInterval = setInterval(getShowTime, 1);
        running = true;
    }
}


const stopStopwatch=()=> {
    if (running) {
        clearInterval(tInterval);
        difference = new Date().getTime() - startTime;
        running = false;
    }
}

const resetStopwatch=()=> {
    if(stopwatchDisplay){
    clearInterval(tInterval);
    difference = 0;
    running = false;
    stopwatchDisplay.innerHTML = "00:00:00";
    }
}


const getShowTime=()=> {
    if(stopwatchDisplay){
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;
    stopwatchDisplay.innerHTML = formatTime(difference);
    }
}

if(startButton && stopButton && resetButton){
    startButton.addEventListener('click', startStopwatch);
    stopButton.addEventListener('click', stopStopwatch);
    resetButton.addEventListener('click', resetStopwatch);
    }

