// PAGE 2
function clicar(){
    let a = document.getElementById('area')
    a.addEventListener('onclick', clicar)
    a.innerText = "Clicked!"
    a.style.background = "rgba(178,192,248,1.1)"
}

function enter(){
    let a = document.getElementById('area')
    a.addEventListener('onmouseenter', enter)
    a.innerText = 'In!'
}

function leave(){
    let a = document.getElementById('area')
    a.addEventListener('onmouseleave', leave)
    a.innerText = 'Out!'
}


// PAGE 3
function somar(){
    let tn1 = parseInt(document.getElementById('txtn1').value)
    let tn2 = parseInt(document.getElementById('txtn2').value)
    let s = tn1 + tn2

    let result = document.getElementById('res')
    result.innerHTML = `Result: ${s}`
}

// 