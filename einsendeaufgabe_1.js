const disc = document.getElementById("disc");
const leftButton = document.getElementById("leftButton");
const rightButton = document.getElementById("rightButton");
const animationButton = document.getElementById("animationButton");
const angleDisplay = document.getElementById("angle");
const statusDisplay = document.getElementById("status");

const discImages = [
    "images/disc_1.png",
    "images/disc_15.png",
    "images/disc_30.png",
    "images/disc_45.png",
    "images/disc_60.png",
    "images/disc_75.png",
    "images/disc_90.png",
    "images/disc_105.png",
    "images/disc_120.png",
    "images/disc_135.png",
    "images/disc_150.png",
    "images/disc_165.png",
    "images/disc_180.png",
    "images/disc_195.png",
    "images/disc_210.png",
    "images/disc_225.png",
    "images/disc_240.png",
    "images/disc_255.png",
    "images/disc_270.png",
    "images/disc_285.png",
    "images/disc_300.png",
    "images/disc_315.png",
    "images/disc_330.png",
    "images/disc_345.png"
];

let currentFrame = 0;
let animationRunning = false;
let animationInterval = null;

function showDisc() {
    disc.src = discImages[currentFrame];
    const angle = currentFrame * 15;
    angleDisplay.textContent = angle + "°";
    disc.alt =
        "Scheibe in Rotationsposition " +
        angle +
        " Grad";
}

function rotateRight() {
    currentFrame++;
    if (currentFrame >= discImages.length) {
        currentFrame = 0;
    }
    showDisc();
}

function rotateLeft() {
    currentFrame--;
    if (currentFrame < 0) {
        currentFrame = discImages.length - 1;
    }
    showDisc();
}

function startAnimation() {
    if (animationRunning) {
        return;
    }
    animationRunning = true;

    statusDisplay.textContent = "Animation läuft";

    animationButton.textContent =
        "⏸ Animation stoppen";

    animationInterval = setInterval(function () {
        rotateRight();
    }, 100);
}

function stopAnimation() {
    animationRunning = false;
    clearInterval(animationInterval);
    animationInterval = null;

    statusDisplay.textContent =
        "Animation pausiert";

    animationButton.textContent =
        "▶ Animation starten";
}

function toggleAnimation() {
    if (animationRunning) {
        stopAnimation();
    } else {
        startAnimation();
    }
}

leftButton.addEventListener("click", function () {
    if (animationRunning) {
        stopAnimation();
    }
    rotateLeft();
});

rightButton.addEventListener("click", function () {
    if (animationRunning) {
        stopAnimation();
    }
    rotateRight();
});

animationButton.addEventListener("click", function () {
    toggleAnimation();
});

document.addEventListener("keydown", function (event) {

    const key = event.key.toLowerCase();

    if (key === "l") {
        if (animationRunning) {
            stopAnimation();
        }
        rotateLeft();
    }

    if (key === "r") {
        if (animationRunning) {
            stopAnimation();
        }
        rotateRight();
    }

    if (key === "a") {
        toggleAnimation();
    }

});


const ball = document.getElementById("ball");
const ballImages = [
    "images/ball_1.png",
    "images/ball_2.png",
    "images/ball_3.png",
    "images/ball_4.png",
    "images/ball_5.png",
    "images/ball_6.png"
];

let currentBallFrame = 0;

setInterval(function () {
    currentBallFrame++;
    if (currentBallFrame >= ballImages.length) {
        currentBallFrame = 0;
    }
    ball.src = ballImages[currentBallFrame];
}, 150);

showDisc();