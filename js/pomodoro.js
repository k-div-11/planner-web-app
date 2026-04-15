let time = 1500;
let timerInterval;

function updateDisplay(){
    let minutes = Math.floor(time/60);
    let seconds = time % 60;
    document.getElementById("timer").innerText =
      `${minutes}:${seconds<10?"0"+seconds:seconds}`;
}

function startTimer(){
    if(timerInterval) return;

    timerInterval = setInterval(()=>{
        if(time > 0){
            time--;
            updateDisplay();
        }
    },1000);
}

function pauseTimer(){
    clearInterval(timerInterval);
    timerInterval = null;
}

function resetTimer(){
    pauseTimer();
    time = 1500;
    updateDisplay();
}
