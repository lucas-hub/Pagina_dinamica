const time = document.getElementById('time'),
  greeting = document.getElementById('greeting'),
  name = document.getElementById('name'),
  focus = document.getElementById('focus');

const showAmPm = true;

function showTime(){
    let today = new Date(),
      hour = today.getHours(),
      min = today.getMinutes(),
      sec = today.getSeconds();

    //formato de 24 horas
    const amPm = hour >= 12 ? 'PM' : 'AM';

    //formato de 12 horas
    //hour = hour % 12 || 12;

    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`;

    setTimeout(showTime, 1000);
}

//add zeros 
function addZero(n){
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

//seta o background e as mensagens de 'bom dia', 'boa tarde' e 'boa noite'
function setBackground(){
    let today = new Date(),
    hour = today.getHours();

    if(hour > 6 && hour < 12){
        //manhã
        document.body.style.backgroundImage = "url('./imagens/dia.jpg')";
        greeting.textContent = 'Bom dia';
    } else if(hour > 12 && hour < 18){
        //tarde
        document.body.style.backgroundImage = "url('./imagens/tarde.jpg')";
        greeting.textContent = 'Boa tarde';
        document.body.style.color = 'white'
    } else{
        //noite
        document.body.style.backgroundImage = "url('./imagens/noite.jpg')";
        greeting.textContent = 'Boa noite';
        document.body.style.color = 'white'
    }
}

function getName(){
    if(localStorage.getItem('name') === null){
        name.textContent = '[Nome]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

function setName(e){
    if(e.type === 'keypress'){
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}

function getFocus(){
    if(localStorage.getItem('focus') === null){
        focus.textContent = '[Tarefa]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

function setFocus(e){
    if(e.type === 'keypress'){
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);

focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);


showTime();
setBackground();
getName();
getFocus();
