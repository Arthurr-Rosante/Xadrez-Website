/*

const btnPawn = document.querySelector(".b-pawn");
const btnTower = document.querySelector(".b-tower");
const btnKnight = document.querySelector(".b-knight");
const btnBishop = document.querySelector(".b-bishop");
const btnQueen = document.querySelector(".b-queen");
const btnKing = document.querySelector(".b-king");

*/

//Peças

const pawn = document.getElementById("pawn");
const tower = document.getElementById("tower");
const knight = document.getElementById("knight");
const bishop = document.getElementById("bishop");
const queen = document.getElementById("queen");
const king = document.getElementById("king");

const pawnDesc = document.getElementById("pawnDesc");
const towerDesc = document.getElementById("towerDesc");
const knightDesc = document.getElementById("knightDesc");
const bishopDesc = document.getElementById("bishopDesc");
const queenDesc = document.getElementById("queenDesc");
const kingDesc = document.getElementById("kingDesc");


//functions

/*

//PawnFunc
btnPawn.addEventListener("click", () => {
    if (pawn.classList.contains("pawnMove")) {
        pawn.classList.remove("pawnMove");
            pawnDesc.classList.remove("show");
    } else {
        pawn.classList.add("pawnMove");
            pawnDesc.classList.add("show");
    }
})


//TowerFunc
btnTower.addEventListener("click", () => {
    if (tower.classList.contains("towerMove")) {
        tower.classList.remove("towerMove");
            towerDesc.classList.remove("show");
    } else {
        tower.classList.add("towerMove");
            towerDesc.classList.add("show");
    }
})


//KnightFunc
btnKnight.addEventListener("click", () => {
    if (knight.classList.contains("knightMove")) {
        knight.classList.remove("knightMove");
            knightDesc.classList.remove("show");
    } else {
        knight.classList.add("knightMove");
            knightDesc.classList.add("show");
    }
})


//BishopFunc
btnBishop.addEventListener("click", () => {
    if (bishop.classList.contains("bishopMove")) {
        bishop.classList.remove("bishopMove");
            bishopDesc.classList.remove("show");
    } else {
        bishop.classList.add("bishopMove");
            bishopDesc.classList.add("show");
    }
})


//QueenFunc
btnQueen.addEventListener("click", () => {
    if (queen.classList.contains("queenMove")) {
        queen.classList.remove("queenMove");
            queenDesc.classList.remove("show");
    } else {
        queen.classList.add("queenMove");
            queenDesc.classList.add("show");
    }
})


//KingFunc
btnKing.addEventListener("click", () => {
    if (king.classList.contains("kingMove")) {
        king.classList.remove("kingMove");
            kingDesc.classList.remove("show");
    } else {
        king.classList.add("kingMove");
            kingDesc.classList.add("show");
    }
})

*/

/*
//Function Prevent Multiple Buttons


function deactivateAll() {

    const botoes = document.querySelectorAll(".btn");

    botoes.forEach((botao) => {
        botao.classList.remove("ativo");
    });

}

function activate(btnId) {

    deactivateAll();

    document.getElementById(btnId).classList.add("ativo");

    if (btnId === 'b1') {

        if (pawn.classList.contains("pawnMove")) {
            pawn.classList.remove("pawnMove");
                pawnDesc.classList.remove("show");
        } else {
            pawn.classList.add("pawnMove");
                pawnDesc.classList.add("show");
        }

    } else if (btnId === 'b2') {

        if (tower.classList.contains("towerMove")) {
            tower.classList.remove("towerMove");
                towerDesc.classList.remove("show");
        } else {
            tower.classList.add("towerMove");
                towerDesc.classList.add("show");
        }

    } else if (btnId === 'b3') {

        if (knight.classList.contains("knightMove")) {
            knight.classList.remove("knightMove");
                knightDesc.classList.remove("show");
        } else {
            knight.classList.add("knightMove");
                knightDesc.classList.add("show");
        }

    } else if (btnId === 'b4') {

        if (bishop.classList.contains("bishopMove")) {
            bishop.classList.remove("bishopMove");
                bishopDesc.classList.remove("show");
        } else {
            bishop.classList.add("bishopMove");
                bishopDesc.classList.add("show");
        }

    } else if (btnId === 'b5') {

        if (queen.classList.contains("queenMove")) {
            queen.classList.remove("queenMove");
                queenDesc.classList.remove("show");
        } else {
            queen.classList.add("queenMove");
                queenDesc.classList.add("show");
        }

    } else if (btnId === 'b6') {

        if (king.classList.contains("kingMove")) {
            king.classList.remove("kingMove");
                kingDesc.classList.remove("show");
        } else {
            king.classList.add("kingMove");
                kingDesc.classList.add("show");
        }

    }

}

const b_pawn = document.getElementById("b1");
const b_tower = document.getElementById("b2");
const b_knight = document.getElementById("b3");
const b_bishop = document.getElementById("b4");
const b_queen = document.getElementById("b5");
const b_king = document.getElementById("b6");

b_pawn.addEventListener("click", function() {
    activate('b1');
});

b_tower.addEventListener("click", function() {;
    activate('b2');
});

b_knight.addEventListener("click", function() {
    activate('b3');
});

b_bishop.addEventListener("click", function() {
    activate('b4');
});

b_queen.addEventListener("click", function() {
    activate('b5');
});

b_king.addEventListener("click", function() {
    activate('b6');
});

deactivateAll();
*/

const bList = document.querySelectorAll(".btn");

function disableAllButtons() {
    bList.forEach(button) = {
        
    }
}