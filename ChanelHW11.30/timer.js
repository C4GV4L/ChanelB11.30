var timeleft = 60;


class Timer {
    constructor() {}

    showTimer() {
        let startBtn = document.getElementById("timeBtn");
        let timerPop = document.getElementById("timeBx");
        if (timerPop.style.display == "none") {
            timerPop.style.display = "block"
            startBtn.style.display = "none"
            console.log("Show timer worked")
        }
    }

    countDown() {
        setInterval(function countDown() {
            {
                if (timeleft >= 1) {
                    timeleft = timeleft - 1
                    let timerdown = document.getElementById("timer");
                    timerdown.innerHTML = timeleft
                    console.log(time)
                } else if (timeleft == 0) {
                    alert("Times Up!")
                    
                }
            }
        }, 1000);
    }

    





}

let popTimer = new Timer();