let circle = document.querySelectorAll('.circle');


let index = 0;
let arr = ['red', 'yellow', 'green']

let time = [3000, 1000, 3000];

function trafficLamb(){
    circle.forEach(el => el.style.backgroundColor = 'black');

    circle[index].style.backgroundColor = arr[index];

    
    setTimeout(() => {
        index = (index + 1) % arr.length;
        trafficLamb();
    }, time[index]);    

}

trafficLamb();