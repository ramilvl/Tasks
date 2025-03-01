let clientBtn = document.querySelector('.startBtn');

let timerLabel = document.querySelector('.timerLabel');

clientBtn.addEventListener('click', ()=>{
    let cnt = 10;
    timerLabel.textContent = cnt;
    timerLabel.style.color = 'white';
    timerLabel.style.display = 'block';

    let interval = setInterval(() => {
        cnt= cnt-1;
        timerLabel.textContent = cnt;
        timerLabel.style.color = 'white';

        if (cnt <= 3) {
            timerLabel.style.color = "red";
        }

        if(cnt === 0){
            timerLabel.textContent = 'Time is up';
            clearInterval(interval);

            setTimeout(() => {
                timerLabel.style.display='none';
            }, 1000);
        }
    }, 1000);
})