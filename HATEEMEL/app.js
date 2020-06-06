const character = document.getElementById("character");
const block = document.getElementById("block");

window.addEventListener("keydown", jump, false);

function jump(key) {
    if (key.keyCode == 32) {
        if (character.classList != "animate") {
            character.classList.add("animate");
        }
        setTimeout(() => {
            character.classList.remove("animate");
        }, 500);
    }
}

const checkDead = setInterval(() => {
    var characterTop = parseInt(
        window.getComputedStyle(character).getPropertyValue("top")
    );
    var blockLeft = parseInt(
        window.getComputedStyle(block).getPropertyValue("left")
    );
    if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
        block.style.animation = "none";
        block.style.display = "none";
        alert("lol ur ded");
    }
}, 10);
