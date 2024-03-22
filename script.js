var tours = document.querySelector('#tours')
var player = document.querySelector('#player')
var winner = document.getElementById('winner')
var restart = document.querySelector('#restart')

var compteur = {
    "tour" : 1,
}

function Ran(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function potionp2() {
    if (player2.soin == 0) {
        console.log("p2 => plus de soin")
        document.getElementById("hel2").disabled = true;
    }
}

function potionp1() {
    if (player1.soin == 0) {
        console.log("p1 => plus de soin")
        document.getElementById("hel1").disabled = true;
    }
}

function viep1() {
    vie1.style.width = player1.vie + '%';
    pdv1.textContent = player1.vie;
}

function viep2() {
    vie2.style.width = player2.vie + '%';
    pdv2.textContent = player2.vie;
}

function tourEndp1() {
    document.getElementById("atk1").disabled = true
    document.getElementById("def1").disabled = true
    document.getElementById("hel1").disabled = true
    document.getElementById("fsm1").disabled = true
    compteur.tour += 1
    tours.textContent = compteur.tour
}

function tourEndp2() {
    document.getElementById("atk2").disabled = true
    document.getElementById("def2").disabled = true
    document.getElementById("hel2").disabled = true
    document.getElementById("fsm2").disabled = true
    compteur.tour += 1
    tours.textContent = compteur.tour
}

function tourStartp1() {
    document.getElementById("atk1").disabled = false
    document.getElementById("def1").disabled = false
    if (player1.soin > 0) {
        document.getElementById("hel1").disabled = false
    }
    if (player1.boost != 0) {
        document.getElementById("fsm1").disabled = false
    }
}

function tourStartp2() {
    document.getElementById("atk2").disabled = false
    document.getElementById("def2").disabled = false
    if (player2.soin > 0) {
        document.getElementById("hel2").disabled = false
    }
    if (player2.boost != 0) {
        document.getElementById("fsm2").disabled = false
    }
}

function fin() {
    if (player1.vie == 0) {
        tourEndp1()
        tourEndp2()
        player.textContent = 'Player 2'
        winner.style.display = 'flex'
    }
    if (player2.vie == 0) {
        tourEndp1()
        tourEndp2()
        player.textContent = 'Player 1'
        winner.style.display = 'flex'
    }
}

restart.addEventListener('click', function() {
    location.reload()
})