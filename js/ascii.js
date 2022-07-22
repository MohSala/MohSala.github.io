window.onload = function () {
    "use strict";
    // put all of your code here

    //variables
    let textArea = document.getElementById("text-area");
    let startBtn = document.getElementById("start");
    let stopBtn = document.getElementById("stop");
    let animationSlct = document.getElementById("animation");
    let fontSizeSlct = document.getElementById("fontsize");
    let speedChckBx = document.getElementById("turbo");

    let timer = null; // stores ID of interval timer 
    let frameSeq;
    let currentFrame = 0;
    let lastFrame;
    let turbo = 250;
    let running;

    //actions
    startBtn.onclick = start;
    stopBtn.onclick = stop;
    animationSlct.onchange = display;
    fontSizeSlct.onchange = size;
    speedChckBx.onclick = speed;

    //start
    function start() {
        alert("Starting Anmiation Now");
        running = true;
        stopBtn.disabled = false;
        startBtn.disabled = true;
        textArea.disabled = true;
        animationSlct.disabled = true;

        lastFrame = textArea.value;
        speedCheck();
        if (textArea.value != " ") {
            playAnimation2(textArea.value);
        } else {
            playAnimation();
        }
    }

    //stop
    function stop() {
        stopBtn.disabled = true;
        startBtn.disabled = false;
        textArea.disabled = false;
        animationSlct.disabled = false;

        alert("Stopping Anmiation Now");
        clearInterval(timer);
        timer = null;
        textArea.value = lastFrame;
        lastFrame = currentFrame;
        running = false;
    }

    //change animation
    function display() {
        textArea.value = ANIMATIONS[animationSlct.value.toString()];
    }

    //change size
    function size() {
        // textArea.classList.add('text-area'); //unobtrusive styling is not dynamic
        // textArea.style.width = "960px";
        // textArea.style.height = "360px";
        textArea.style.fontSize = fontSizeSlct.value;
    }

    //change speed
    function speed(){
        if(running){
            if (speedChckBx.checked == true) {
                clearInterval(timer);
                turbo = 50;
                timer = setInterval(showNextFrame, turbo);
            } else {
                clearInterval(timer);
                turbo = 250;
                timer = setInterval(showNextFrame, turbo);
            }
        }
    }

    //speed status
    function speedCheck(){
        if (speedChckBx.checked == true) {
            turbo = 50;
        } else {
            turbo = 250;
        }
    }

    function playAnimation() {

        let frameStr = ANIMATIONS[animationSlct.value.toString()];

        if (frameStr.indexOf("\r\n") != -1) {
            frameSeq = frameStr.split("=====\r\n");
        } else {
            frameSeq = frameStr.split("=====\n");
        }

        timer = setInterval(showNextFrame, turbo);

    }

    function playAnimation2(frameStr) {
        if (frameStr.indexOf("\r\n") != -1) {
            frameSeq = frameStr.split("=====\r\n");
        } else {
            frameSeq = frameStr.split("=====\n");
        }

        timer = setInterval(showNextFrame, turbo);
    }

    function showNextFrame(){
        textArea.value = frameSeq[currentFrame];
        currentFrame = (currentFrame + 1) % frameSeq.length;
    }

};
