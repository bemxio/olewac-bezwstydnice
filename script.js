function losujNumer(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function inbaStart() {
    kwadrat.style.animation = "rotacja 2s linear infinite";

    kwadrat.style.backgroundImage = "url('/szczyny/rzultamorda.jpg')";
    kwadrat.style.backgroundSize = "100%";

    inba.loop = true;
    
    inba.play();

    setInterval(function () {
        console.log("test");
        document.body.style.backgroundColor = `rgb(${losujNumer(0, 255)}, ${losujNumer(0, 255)}, ${losujNumer(0, 255)})`;
    }, 100);
}

const kwadrat = document.getElementById("kwadrat-3d");
const inba = new Audio("/szczyny/inba.mp3");

let buffer = "";

kwadrat.addEventListener("click", function () {
    window.location.href = "https://www.gov.pl";
});

window.addEventListener("keydown", function (event) {
    if (event.key.length != 1 && event.key != "Backspace") {
        return;
    }

    if (event.key == "Backspace") {
        buffer = "";
    } else {
        buffer += event.key;
    }

    if (buffer == "inba") {
        inbaStart();
    }
});