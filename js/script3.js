// PAGE 3
function clicar(){
    let a = document.getElementById('area')
    a.addEventListener('onclick', clicar)
    a.innerText = "Clicked!🤤🤤🤤"
    a.style.background = "rgba(178,192,248,1.1)"
}

function enter(){
    let a = document.getElementById('area')
    a.addEventListener('onmouseenter', enter)
    a.innerText = 'CLICK!!!'
}

function leave(){
    let a = document.getElementById('area')
    a.addEventListener('onmouseleave', leave)
    a.innerText = 'Click here!'
}

// PAGE 4
function somar(){
    let tn1 = parseInt(document.getElementById('txtn1').value)
    let tn2 = parseInt(document.getElementById('txtn2').value)
    let s = tn1 + tn2

    let result = document.getElementById('res')
    result.innerHTML = `Result: ${s}`
}

// PAGE 5
function verify(){
    let vel = Number(document.querySelector('input#vel').value)
    if(vel <= 0){
        alert('Insert a valid velocity!')
    }else if(vel > 70){
        alert('You was busted!')
    }else{
        alert("You wasn't busted!")
    }

    let result = document.querySelector('div#res')
    result.innerHTML = `Last velocity: ${vel}km/h`
}

function cverify(){
    let country = document.querySelector('input#country').value
    if(country == null){
        alert('Insert a valid country!')
    }else if(country == 'Brasil'){
        alert('Brasileiro!!')
    }else{
        alert('Gringo.')
    }

    let result = document.querySelector('div#res2')
    result.innerText = `Last country: ${country}`
}

function hour(){
    let data = new Date()
    let hour = data.getHours()

    let current_hour = document.querySelector('div#res3')
    current_hour.innerHTML = `Current time: ${hour}`
}

function day(){
    let now = new Date()
    let day = now.getDay()
    let current_day = document.querySelector('div#res4')

    switch(day){
        case 0:
            current_day.innerHTML = 'Current day: Sunday'
            break
        case 1:
            current_day.innerHTML = 'Current day: Monday'
            break
        case 2:
            current_day.innerHTML = 'Current day: Tuesday'
            break
        case 3:
            current_day.innerHTML = 'Current day: Wednesday'
            break
        case 4:
            current_day.innerHTML = 'Current day: Thursday'
            break
        case 5:
            current_day.innerHTML = 'Current day: Friday'
            break
        case 6:
            current_day.innerHTML = 'Current day: Saturday'
            break
    }
}

// EXERCICIO 1

function charge(){
let msg = document.getElementById('msg')
let img = document.getElementById('img')
let foot = document.querySelector('footer#feet')
let reg = document.querySelector('p#reg')
let date = new Date()
let hour = 11//date.getHours()
let minute = date.getMinutes()<10?'0':date.getMinutes()

msg.innerHTML = `It's ${hour}:${minute}`

if (hour >= 0 && hour < 12){
    img.src = 'images/manha.jpg'
    document.body.style.background = '#B47681' // rgb(180,118,129)
    foot.style.background = '#B476AD'
}else if ( hour >= 12 && hour < 18){
    img.src = 'images/tarde.jpg'
    document.body.style.background = '#FF9D01' // rgb(255,157,1)
    foot.style.background = '#FF7B01'
}else{
    img.src = 'images/noite.jpg'
    document.body.style.background = '#053364' // rgb(5,51,100)
    foot.style.background = '#05334E'
    reg.style.color = '#FFFFFF'
}
}