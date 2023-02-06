
//task 1
const div = document.getElementById('square');

function random  ()  {
    return '#'+(Math.random().toString(16)+'000000').substring(2,8).toUpperCase();
}
const handleDivClick = (e) => {
    div.style.backgroundColor = random();
}

div.addEventListener('click', handleDivClick)

//task 2
const div2 = document.getElementById('counter');


let timerId;
function continueCounting() {
    timerId = setInterval(() => {
        let val = +div2.innerText+1;

        div2.innerText=val;
    }, 1000);
}


function stopCounting() {
    clearInterval(timerId)
}

div2.addEventListener('mouseover', continueCounting)
div2.addEventListener('mouseout', stopCounting)
