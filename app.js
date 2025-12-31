 
const screen = document.getElementById("display");
const startBtn = document.getElementById("btnStart");
const pauseBtn = document.getElementById("btnPause");
const resetBtn = document.getElementById("btnReset");
const lapBtn = document.getElementById("btnLap");
const lapList = document.getElementById("laps");
const hand = document.querySelector(".hand");



let startTime = 0;
let elapsed = 0;
let running = false;
let rafId = null;
let lastRender = 0;
const UPDATE_INTERVAL = 50;
let lapCount = 0;


function formatTime(ms) {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const tenths = Math.floor((ms % 1000) / 100); // 0–9
    return (
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0") + "." +
        String(tenths)
    );
}




function tick(timestamp) {
    if (!running) return;

    if (timestamp - lastRender >= UPDATE_INTERVAL) {
        elapsed = timestamp - startTime;
        screen.textContent = formatTime(elapsed);
        lastRender = timestamp;

        const seconds = (elapsed / 1000) % 60;
        hand.style.transform = `rotate(${seconds * 6}deg)`;
    }

    rafId = requestAnimationFrame(tick);
}

startBtn.addEventListener("click", () => {
    if (running) return;
    running = true;
    startTime = performance.now() - elapsed;
    lastRender = 0;
    rafId = requestAnimationFrame(tick);
});


pauseBtn.addEventListener("click", () => {
    running = false;
    cancelAnimationFrame(rafId);
});


resetBtn.addEventListener("click", () => {
    running = false;
    elapsed = 0;
    lastRender = 0;
    lapCount = 0;
    cancelAnimationFrame(rafId);
    screen.textContent = "00:00.0";
    lapList.innerHTML = "";
    hand.style.transform = "rotate(0deg)";
});


lapBtn.addEventListener("click", () => {
    if (!running) return;

    lapCount++;
    const li = document.createElement("li");
    li.classList.add("lap-item");
    li.textContent = `Lap ${lapCount} — ${formatTime(elapsed)}`;


    li.addEventListener("click", () => {
        li.style.animation = "fadeOut 0.3s forwards";
        li.addEventListener("animationend", () => li.remove());
    });

    lapList.prepend(li);
});