const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const bours = String(date.getHours()).padStart(2,"0");
    const minutes =  String(date.getMinutes()).padStart(2,"0");
    const secondes =  String(date.getSeconds()).padStart(2,"0");
    clock.innerText =`${bours}:${minutes}:${secondes}`;
}

getClock();
setInterval(getClock,1000);