
var button = document.querySelector('#on')
var img = document.querySelector('#bulb')
button.addEventListener('click', function() {
    if (img.src = './images/lampada/lampada_desligada.gif') {
        img.src = './images/lampada/lampada_ligada.gif'
    }
})


var button = document.querySelector('#off')
var img = document.querySelector('#bulb')
button.addEventListener('click', function() {
    if (img.src = './images/lampada/lampada_ligada.gif') {
        img.src = './images/lampada/lampada_desligada.gif'
    }
})