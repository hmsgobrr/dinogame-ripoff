//? Elements
const menu = document.getElementById("start");
const play = document.getElementById("play");
const aboutb = document.getElementById("aboutb");
const about = document.getElementById("about");
const backb = document.getElementById("back");

const character = document.getElementById("character");
const charImg = document.getElementById("charimg");
const block = document.getElementById("block");
const game = document.getElementById("game");
const score = document.getElementById("score");
const dedMenu = document.getElementById("dedMenu");
const retry = document.getElementById("retry");
const menub = document.getElementById("menu");
var scc;

const jSfx = document.getElementById("jumpSfx");
const dSfx = document.getElementById("dedSfx");

//? Start Menu
window.onload = () => {
    game.style.display = "none";
    about.style.display = "none";
    menu.style.display = "block";
};
play.addEventListener("click", () => {
    scc = 0;
    menu.style.display = "none";
    game.style.display = "block";
    dedMenu.style.display = "none";
    setTimeout(() => {
        block.classList.add("battack");
    }, 1000);
});
aboutb.addEventListener("click", () => {
    game.style.display = "none";
    about.style.display = "block";
    menu.style.display = "none";
});

// //? Score
// block.addEventListener("animationstart", () => {
//     scc = 0;
//     setInterval(() => {
//         if (block.classList == "battack") {
//             scc++;
//             score.innerHTML = "Score: " + scc;
//         }
//     }, 1000);
// });

//? Jump functions
window.addEventListener("keydown", jump, false);
game.addEventListener("click", jumpc);

function jump(key) {
    if (key.keyCode == 32 || key.keyCode == 38) {
        jSfx.play();
        if (character.classList != "animate") {
            character.classList.add("animate");
        }
        setTimeout(() => {
            character.classList.remove("animate");
        }, 500);
    }
}
function jumpc() {
    jSfx.play();
    if (character.classList != "animate") {
        character.classList.add("animate");
    }
    setTimeout(() => {
        character.classList.remove("animate");
    }, 500);
}

//? Check if the player is dead
const checkDead = setInterval(() => {
    var characterTop = parseInt(
        window.getComputedStyle(character).getPropertyValue("top")
    );
    var blockLeft = parseInt(
        window.getComputedStyle(block).getPropertyValue("left")
    );
    if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
        dSfx.play();
        dedMenu.style.display = "block";
        charImg.src = "charImg/characterDed.png";
        block.classList.remove("battack");
        block.style.display = "none";
    }
}, 10);

//? Retry
retry.addEventListener("click", () => {
    scc = 0;
    menu.style.display = "none";
    game.style.display = "block";
    dedMenu.style.display = "none";
    block.style.display = "block";
    charImg.src = "charImg/character.png";
    setTimeout(() => {
        block.classList.add("battack");
    }, 1000);
});

//? Go to menu
function reload() {
    location.reload();
}
menub.addEventListener("click", reload);
backb.addEventListener("click", reload);
/*
TODO: about menu
TODO: navbar
TODO: favicon
TODO: publish

! Score system error ;-;
*/
