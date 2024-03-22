var atk1 = document.querySelector('#atk1')
var def1 = document.querySelector('#def1')
var hel1 = document.querySelector('#hel1')
var fsm1 = document.querySelector('#fsm1')
var vie1 = document.getElementById('vie1')
var pdv1 = document.querySelector('#pdv1')
var soinp1 = document.querySelector('#soinp1')
var boostp1 = document.querySelector('#boostp1')

var player1 = {
    "vie" : 100,
    "atk" : Ran(10,20),
    "def" : 0,
    "soin" : 3,
    "boost" : 1
}

atk1.addEventListener('click', function() {
    if (player2.def == 1) {
        console.log("p1 => raté")
    } else if (player2.def == 0) {
        if (player2.vie <= player1.atk) {
            player2.vie = 0
        } else {
            player2.vie -= player1.atk
        }
    }
    player2.def = 0

    viep2()
    tourEndp1()
    tourStartp2()
    fin()
})

def1.addEventListener('click', function() {
    player1.def = Ran(0,1)
    tourEndp1()
    tourStartp2()
    fin()
})

hel1.addEventListener('click', function() {
    if (player1.vie >= 60) {
        player1.vie = 100
    } else {
        player1.vie = player1.vie + 40
    }
    player1.soin = player1.soin - 1
    soinp1.textContent = player1.soin
    potionp1()
    viep1()
    tourEndp1()
    tourStartp2()
    fin()
})

fsm1.addEventListener('click', function() {
    player1.atk *= 2
    player1.boost = 0
    boostp1.textContent = player1.boost
    tourEndp1()
    tourStartp2()
    fin()
})