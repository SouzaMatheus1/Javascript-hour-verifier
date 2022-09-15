function charge(){
    let msg = document.getElementById('msg')
    let img = document.getElementById('img')
    let foot = document.querySelector('footer#feet')
    let reg = document.querySelector('p#reg')
    let date = new Date()
    let hour = date.getHours()
    let minute = date.getMinutes()<10?'0':date.getMinutes()
    
    msg.innerHTML = `It's ${hour}:${minute}`
    
    if (hour >= 0 && hour < 12){
        img.src = 'images/manha.png'
        document.body.style.background = '#B47681' // rgb(180,118,129)
        foot.style.background = '#B476AD'
    }else if ( hour >= 12 && hour < 18){
        img.src = 'images/tarde.png'
        document.body.style.background = '#FF9D01' // rgb(255,157,1)
        foot.style.background = '#FF7B01'
    }else{
        img.src = 'images/noite.png'
        document.body.style.background = '#053364' // rgb(5,51,100)
        foot.style.background = '#05334E'
        reg.style.color = '#FFFFFF'
    }
    }