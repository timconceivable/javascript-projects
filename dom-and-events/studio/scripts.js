function init () {
    const takeoffButton = document.getElementById("takeoff");
    const landingButton = document.getElementById("landing");
    const abortButton = document.getElementById("missionAbort");
    const flightStatus = document.getElementById("flightStatus");
    const astroChat = document.getElementById("chat");
    const fuelTank = document.getElementById("fuel");
    const shuttleHeight = document.getElementById("shuttleHeight");
    const shuttleBg = document.getElementById("shuttleBackground");
    const shuttle = document.getElementById("rocket");    
    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    const leftButton = document.getElementById("left");
    const rightButton = document.getElementById("right");
    
    const center = "90px";
    const shuttleSpeed = 10;
    let inAir = false;
    let currentXPos = parseInt(getComputedStyle(shuttle).left);
    let currentYPos = parseInt(getComputedStyle(shuttle).bottom);
    let fuelLevel = fuelTank.innerHTML;
    
    function useFuel() {
        fuelLevel -= 10000;
        return fuelLevel;
    }

    takeoffButton.addEventListener("click", function() {
        if (window.confirm("Confirm that the shuttle is ready for takeoff")) {
            flightStatus.innerHTML = "Shuttle in flight";
            astroChat.innerHTML = "Houston, we have liftoff!"
            fuelLevel = 500000;
            fuelTank.innerHTML = fuelLevel;
            shuttleBg.style.backgroundColor = "blue";
            shuttleHeight.innerHTML = 1000*shuttleSpeed;
            shuttle.style.bottom = "10px";
            shuttle.style.left = center;
            inAir = true;
            currentXPos = parseInt(getComputedStyle(shuttle).left);
            currentYPos = parseInt(getComputedStyle(shuttle).bottom);
            shuttle.style.rotate = "0deg";
        }
    });

    landingButton.addEventListener("click", function () {
        window.alert("The shuttle is landing. Landing gear engaged.")
        flightStatus.innerHTML = "The shuttle has landed.";
        astroChat.innerHTML = "Home safe."
        fuelLevel = 500000;
        fuelTank.innerHTML = fuelLevel;
        shuttleBg.style.backgroundColor = "green";
        shuttleHeight.innerHTML = 0;
        shuttle.style.bottom = "0";
        shuttle.style.left = center;
        inAir = false;
        currentXPos = parseInt(getComputedStyle(shuttle).left);
        currentYPos = parseInt(getComputedStyle(shuttle).bottom);
        shuttle.style.rotate = "0deg";
    });
    
    abortButton.addEventListener("click", function () {
        if (window.confirm("Confirm that you want to abort the mission.")) {
            flightStatus.innerHTML = "Mission aborted.";
            astroChat.innerHTML = "ABORT! ABORT!"
            shuttleBg.style.backgroundColor = "red";
            shuttleHeight.innerHTML = 0;
            shuttle.style.bottom = "0";
            shuttle.style.left = center;
            inAir = false;
            currentXPos = parseInt(getComputedStyle(shuttle).left);
            currentYPos = parseInt(getComputedStyle(shuttle).bottom);
            shuttle.style.rotate = "0deg";
        }
    });

    upButton.addEventListener("click", function () {
        if (currentYPos < 171 && inAir) {
            astroChat.innerHTML = "Weeeeeee!"
            currentYPos += shuttleSpeed;
            shuttle.style.bottom = String(currentYPos)+"px";
            shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML)+(1000*shuttleSpeed);
            shuttle.style.rotate = "0deg";
            fuelTank.innerHTML = useFuel();
        }
    });

    downButton.addEventListener("click", function () {
        if (currentYPos > 9 && inAir) {
            astroChat.innerHTML = "Weeeeeee!"
            currentYPos -= shuttleSpeed;
            shuttle.style.bottom = String(currentYPos)+"px";
            shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML)-(1000*shuttleSpeed);
            shuttle.style.rotate = "180deg";
            fuelTank.innerHTML = useFuel();
        }
    });

    rightButton.addEventListener("click", function () {
        if (currentXPos < 181 && inAir) {
            astroChat.innerHTML = "Weeeeeee!"
            currentXPos += shuttleSpeed;
            shuttle.style.left = String(currentXPos)+"px";
            if (parseInt(getComputedStyle(shuttle).rotate) > 45 || parseInt(getComputedStyle(shuttle).rotate) < -45) {
                shuttle.style.rotate = "135deg";    
            } else shuttle.style.rotate = "45deg";
            useFuel();
        }
    });
    
    leftButton.addEventListener("click", function () {
        if (currentXPos > -1 && inAir) {
            astroChat.innerHTML = "Weeeeeee!"
            currentXPos -= shuttleSpeed;
            shuttle.style.left = String(currentXPos)+"px";
            if (parseInt(getComputedStyle(shuttle).rotate) > 45 || parseInt(getComputedStyle(shuttle).rotate) < -45) {
                shuttle.style.rotate = "-135deg";
            } else shuttle.style.rotate = "-45deg";
            fuelTank.innerHTML = useFuel();
        }
    });
}

window.addEventListener("load", init);