let user = document.querySelector('h2');
let item = document.querySelector('.item');
let play = document.querySelector('.play');
let reset = document.querySelector('.reset');
let scorePoints = document.querySelector('.span');
let displayTime = document.querySelector('.display-time');
let continueBtn = document.querySelector('.continue');
// adding comment to the exisisting code
var points = 0;

let outer = document.querySelector('.outer');
let username = prompt('Enter username');



const generateRandomNumber = (range) => {
    return Math.round(Math.random() * range);
}

const generateRandomColor = (color) => {
    return Math.round(Math.random() * (color + 1));
}

item.style.display = 'none';
const playGame = () => {
        points++;
        scorePoints.textContent = points;
        item.style.left = `${generateRandomNumber(90)}%`;
        item.style.top = `${generateRandomNumber(550)}px`;
      // item.style.boxShadow = `0 0 3px 10px rgb(${generateRandomColor(255)},${generateRandomColor(255)},${generateRandomColor(255)})`;
        item.style.backgroundColor = `rgb(${generateRandomColor(255)},${generateRandomColor(255)},${generateRandomColor(255)})`;
        item.style.borderRadius = `${generateRandomNumber(50)}%`;
        if(points === 6){
           outer.style.display = 'block';
        }
        if(points === 20){
            outer.style.display = 'block';
        }
    }

    continueBtn.addEventListener('click',() => {
        outer.style.display ='none';
    })
let hrs=0,mins=0,sec=0;
let digitalWatch = () => {
    sec++;
    if(sec == 60){
        sec =0;
        mins++;
        if(mins == 60){
            mins = 0;
            hrs++;
            if(hrs == 24){
                hrs = 0;
            }
        }
    }
    let h = hrs < 10 ? '0' + hrs : hrs;
    let m = mins < 10 ? '0' + mins : mins;
    let s = sec < 10 ? '0' + sec : sec;
    displayTime.textContent = `${h} : ${m} : ${s}`;
 }   
let startTimer = () => {
    setInterval(digitalWatch,1000);
}


    play.addEventListener('click', () => {
       
        if(username.trim().length != 0){
        item.style.display = 'block';
        item.addEventListener('click',playGame);
        }else{
            username = prompt('Enter username : ');
            user.textContent = username;
        }
    })
reset.addEventListener('click',() => {
    points =0;
    scorePoints.textContent =points;
    item.style.display = 'none';
    item.removeEventListener('click', playGame);
})
