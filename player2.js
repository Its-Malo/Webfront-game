var atk2 = document.querySelector('#atk2')
var def2 = document.querySelector('#def2')
var hel2 = document.querySelector('#hel2')
var fsm2 = document.querySelector('#fsm2')
var vie2 = document.getElementById('vie2')
var pdv2 = document.querySelector('#pdv2')
var soinp2 = document.querySelector('#soinp2')
var boostp2 = document.querySelector('#boostp2')

var player2 = {
    "vie" : 100,
    "atk" : Ran(10,20),
    "def" : 0,
    "soin" : 3,
    "boost" : 1
}

atk2.addEventListener('click', function() {
    if (player1.def == 1) {
        console.log("p2 => raté")
    } else if (player1.def == 0) {
        if (player1.vie <= player2.atk) {
            player1.vie = 0
        } else {
            player1.vie -= player2.atk
        }
    }
    player1.def = 0
    viep1()
    tourEndp2()
    tourStartp1()
    fin()
})

def2.addEventListener('click', function() {
    player2.def = Ran(0,1)
    tourEndp2()
    tourStartp1()
    fin()
})

hel2.addEventListener('click', function() {
    if (player2.vie >= 60) {
        player2.vie = 100
    } else {
        player2.vie = player2.vie + 40
    }
    player2.soin = player2.soin - 1
    soinp2.textContent = player2.soin
    potionp2()
    viep2()
    tourEndp2()
    tourStartp1()
    fin()
})

fsm2.addEventListener('click', function() {
    player2.atk *= 2
    player2.boost = 0
    boostp2.textContent = player2.boost
    tourEndp2()
    tourStartp1()
    fin()
})