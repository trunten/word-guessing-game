console.log();

let word = {};
let guessed = [];

function start() {
    document.querySelector(".start").style.display ="none";
    document.querySelector(".game").style.display = "";
    document.querySelector(".emoji").textContent = ""
    guessed = [];
    word = words[Math.floor(Math.random() * words.length)];
    output();
    document.addEventListener("keypress",checkGuess);
}

function output() {
    let out = "";
    for (let i = 0; i < word.word.length; i++) {
        if (word.word[i] === " ") {
            out += " ";
        } else if (guessed.includes(word.word[i])) {
            out += word.word[i];
        } else {
            out += "_";
        }
        out += " "
    }
    out = out.trim().replaceAll(" ","&nbsp;");
    document.querySelector(".word").innerHTML = out;
    if (!out.includes("_")) {
        document.querySelector(".emoji").textContent = word.emoji;
        setTimeout(() => {
            if (confirm(`You got it! ${word.emoji}\n\nPlay again?`)) {
                start();
            } else {
                document.querySelector(".start").style.display = "";
                document.removeEventListener("keypress",checkGuess);
            }
        }, 1000);
    }
}

function checkGuess(e) {
    e.preventDefault();
    let pressed = e.key.toLowerCase();
    if (word.word.includes(pressed)) {
        guessed.push(pressed);
        output();
    }
    console.log(pressed);
}

document.querySelector("#start").addEventListener("click", (e) => {
    e.preventDefault();
    start();
});

const words = [{ word:"shoe", emoji:"👞" }, { word:"sock", emoji:"🧦" }, { word:"hat", emoji:"🎩" }, { word:"sunglasses", emoji:"🕶" }, { word:"dog", emoji:"🐶" }, { word:"cat", emoji:"🐱" },
        { word:"mouse", emoji:"🐭" }, { word:"panda", emoji:"🐼" }, { word:"lion", emoji:"🦁" }, { word:"tiger", emoji:"🐯" }, { word:"bear", emoji:"🐻" }, { word:"pig", emoji:"🐷" },
        { word:"frog", emoji:"🐸" }, { word:"chicken", emoji:"🐔" }, { word:"monkey", emoji:"🐵" }, { word:"unicorn", emoji:"🦄" }, { word:"snail", emoji:"🐌" }, { word:"butterfly", emoji:"🦋" }, 
        { word:"fish", emoji:"🐟" }, { word:"toadstool", emoji:"🍄" }, { word:"snowman", emoji:"⛄️" }, { word:"apple", emoji:"🍏" }, { word:"pear", emoji:"🍐" }, { word:"orange", emoji:"🍊" },
        { word:"banana", emoji:"🍌" }, { word:"croissant", emoji:"🥐" }, { word:"bagel", emoji:"🥯" }, { word:"baguette", emoji:"🥖" }, { word:"pretzel", emoji:"🥨" }, { word:"taco", emoji:"🌮" },
        { word:"hamburger", emoji:"🍔" }, { word:"sushi", emoji:"🍣" }, { word:"football", emoji:"⚽️" }, { word:"basketball", emoji:"🏀" }, { word:"car", emoji:"🚗" }, { word:"ambulance", emoji:"🚑" },
        { word:"police car", emoji:"🚓" }, { word:"boat", emoji:"🚢" }, { word:"house", emoji:"🏡" }, { word:"computer", emoji:"💻" }, { word:"telephone", emoji:"☎️" }, { word:"bucket", emoji:"🪣" }, 
        { word:"heart", emoji:"❤️" }, { word:"clock", emoji:"⏰" }, { word:"pumpkin", emoji:"🎃" }, { word:"shorts", emoji:"🩳" }, { word:"crown", emoji:"👑" }, { word:"zombie", emoji:"🧟" },]