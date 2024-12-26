const hourEle = document.getElementById('hour');
const minuteEle = document.getElementById('minute');
const secondEle = document.getElementById('second');
const ampmEle = document.getElementById('ampm');

function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if(h > 12){
        h = h-12;
        ampm = "PM"
    }

    if(h < 10){
        h = "0"+ h;
    }

    if(m < 10){
        m = "0"+ m;
    }

    if(s < 10){
        s = "0"+ s;
    }

    /*Set text to innerText */
    hourEle.innerText = h;
    minuteEle.innerText = m;
    secondEle.innerText = s;
    ampmEle.innerText = ampm;
}

updateClock();
setInterval(()=>{updateClock()},1000);
