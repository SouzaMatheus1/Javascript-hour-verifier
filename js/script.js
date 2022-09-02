// var n1 = parseInt(window.prompt("Numero 1:"))
// var n2 = parseInt(window.prompt("Numero 2:"))
var nome = String(window.prompt("Nome: "))
document.writeln(`Seu nome tem ${nome.length} letras.`)
// var soma = n1 + n2
// window.alert(String(`A soma dos números ${n1} e ${n2} é ${soma}`))
document.write(`${nome.toUpperCase()}`)
document.write(`${nome.toLowerCase()}`)
var s = 'Javascript'

s.length
s.toUpperCase()
s.toLowerCase()

var n1 = 123.4
n1.toFixed(2) // Numeros depois da virgula
n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) // Para valor monetario real

s == 'Javascript' ? alert('oi') : alert('não')

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

