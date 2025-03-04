// Surprise Button Function
let song = new Audio('happy-birthday-254480.mp3')
document.getElementById("surpriseBtn").addEventListener("click", function() {
    let msg = document.getElementById("hiddenMessage");
    msg.classList.remove("hidden");
    msg.style.opacity = 1;
    song.play()
});

// Blow Out Candle Function
function blowCandles() {
    document.getElementById("flame").classList.add("hidden"); // Hide the flame
}

// Confetti Effect
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];
for (let i = 0; i < 100; i++) {
    confetti.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 5 + 2,
        d: Math.random() * 5 + 2,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`,
    });
}

function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach((c, i) => {
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
        ctx.fillStyle = c.color;
        ctx.fill();
        c.y += c.d;
        if (c.y > canvas.height) confetti[i].y = 0;
    });
    requestAnimationFrame(drawConfetti);
}
drawConfetti();

// Balloons Animation
function createBalloon() {
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");
    document.querySelector(".balloons").appendChild(balloon);
    balloon.style.left = `${Math.random() * 100}%`;
    balloon.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
    balloon.style.animationDuration = `${Math.random() * 3 + 3}s`;

    setTimeout(() => {
        balloon.remove();
    }, 6000);
}

setInterval(createBalloon, 500);
