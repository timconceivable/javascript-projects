function init () {
    const takeoffButton = document.getElementById("takeoff");
    const landingButton = document.getElementById("landing");
    const abortButton = document.getElementById("missionAbort");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBg = document.getElementById("shuttleBackground");
    const shuttleHeight = document.getElementById("shuttleHeight");
        
    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    const leftButton = document.getElementById("left");
    const rightButton = document.getElementById("right");
    const shuttle = document.getElementById("rocket");
    let inAir = false;
    let increment = 10;
    let currentXPos = Number(shuttle.style.left.replace(/[^\d.-]/g, ''));
    let currentYPos = Number(shuttle.style.bottom.replace(/[^\d.-]/g, ''));
    console.log(currentXPos);
    console.log(currentYPos);
    
    takeoffButton.addEventListener("click", function() {
        if (window.confirm("Confirm that the shuttle is ready for takeoff")) {
            flightStatus.innerHTML = "Shuttle in flight";
            shuttleBg.style.backgroundColor = "blue";
            shuttleHeight.innerHTML = 10000;
            shuttle.style.bottom = "10px";
            shuttle.style.left = "180px";
            inAir = true;
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
    });
    
    abortButton.addEventListener("click", function () {
        if (window.confirm("Confirm that you want to abort the mission.")) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBg.style.backgroundColor = "red";
            shuttleHeight.innerHTML = 0;
            shuttle.style.bottom = "0";
            shuttle.style.left = "180px";
            inAir = false;
        }
    });

    upButton.addEventListener("click", function () {
        currentYPos = Number(shuttle.style.bottom.replace(/[^\d.-]/g, ''));
        if (currentYPos < 381 && inAir) {
            currentYPos += increment;
            shuttle.style.bottom = String(currentYPos)+"px";
            shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML)+(1000*increment);
        }
    });
    downButton.addEventListener("click", function () {
        currentYPos = Number(shuttle.style.bottom.replace(/[^\d.-]/g, ''));
        if (currentYPos > 9 && inAir) {
            currentYPos -= increment;
            shuttle.style.bottom = String(currentYPos)+"px";
            shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML)-(1000*increment);
        }
    });
    rightButton.addEventListener("click", function () {
        currentXPos = Number(shuttle.style.left.replace(/[^\d.-]/g, ''));
        if (currentXPos < 381 && inAir) {
            currentXPos += increment;
            shuttle.style.left = String(currentXPos)+"px";
        }
        console.log(currentXPos);
    });
    leftButton.addEventListener("click", function () {
        currentXPos = Number(shuttle.style.left.replace(/[^\d.-]/g, ''));
        if (currentXPos > 9 && inAir) {
            currentXPos -= increment;
            shuttle.style.left = String(currentXPos)+"px";
        }
        console.log(currentXPos);
    });
}

window.addEventListener("load", init);