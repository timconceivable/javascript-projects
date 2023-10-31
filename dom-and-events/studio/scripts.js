function init () {
    const takeoffButton = document.getElementById("takeoff");
    const landingButton = document.getElementById("landing");
    const abortButton = document.getElementById("missionAbort");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleHeight = document.getElementById("shuttleHeight");
    const shuttleBg = document.getElementById("shuttleBackground");
    const shuttle = document.getElementById("rocket");    
    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    const leftButton = document.getElementById("left");
    const rightButton = document.getElementById("right");
    
    const increment = 10;
    let inAir = false;
    let currentXPos = parseInt(getComputedStyle(shuttle).left);
    let currentYPos = parseInt(getComputedStyle(shuttle).bottom);
    let rotation = parseInt(getComputedStyle(shuttle).rotate);
    
    takeoffButton.addEventListener("click", function() {
        if (window.confirm("Confirm that the shuttle is ready for takeoff")) {
            flightStatus.innerHTML = "Shuttle in flight";
            shuttleBg.style.backgroundColor = "blue";
            shuttleHeight.innerHTML = 10000;
            shuttle.style.bottom = "10px";
            shuttle.style.left = "180px";
            inAir = true;
            currentXPos = parseInt(getComputedStyle(shuttle).left);
            currentYPos = parseInt(getComputedStyle(shuttle).bottom);
            shuttle.style.rotate = "0deg";
        }
    });

    landingButton.addEventListener("click", function () {
        window.alert("The shuttle is landing. Landing gear engaged.")
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBg.style.backgroundColor = "green";
        shuttleHeight.innerHTML = 0;
        shuttle.style.bottom = "0";
        shuttle.style.left = "180px";
        inAir = false;
        currentXPos = parseInt(getComputedStyle(shuttle).left);
        currentYPos = parseInt(getComputedStyle(shuttle).bottom);
        shuttle.style.rotate = "0deg";
    });
    
    abortButton.addEventListener("click", function () {
        if (window.confirm("Confirm that you want to abort the mission.")) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBg.style.backgroundColor = "red";
            shuttleHeight.innerHTML = 0;
            shuttle.style.bottom = "0";
            shuttle.style.left = "180px";
            inAir = false;
            currentXPos = parseInt(getComputedStyle(shuttle).left);
            currentYPos = parseInt(getComputedStyle(shuttle).bottom);
            shuttle.style.rotate = "0deg";
        }
    });

    upButton.addEventListener("click", function () {
        if (currentYPos < 371 && inAir) {
            currentYPos += increment;
            shuttle.style.bottom = String(currentYPos)+"px";
            shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML)+(1000*increment);
            shuttle.style.rotate = "0deg";
        }
    });

    downButton.addEventListener("click", function () {
        if (currentYPos > 9 && inAir) {
            currentYPos -= increment;
            shuttle.style.bottom = String(currentYPos)+"px";
            shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML)-(1000*increment);
            shuttle.style.rotate = "180deg";
        }
    });

    rightButton.addEventListener("click", function () {
        if (currentXPos < 381 && inAir) {
            currentXPos += increment;
            shuttle.style.left = String(currentXPos)+"px";
            shuttle.style.rotate = "45deg";
        }
    });
    
    leftButton.addEventListener("click", function () {
        if (currentXPos > -1 && inAir) {
            currentXPos -= increment;
            shuttle.style.left = String(currentXPos)+"px";
            shuttle.style.rotate = "-45deg";
        }
    });
}

window.addEventListener("load", init);