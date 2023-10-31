function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.
    button.addEventListener('click', function() {
        paragraph.innerHTML = 'Houston, we have liftoff!';
    } );
    missionAbort.addEventListener('mouseover', function(event) {
        event.target.style.backgroundColor = "red";
    } );
    missionAbort.addEventListener('mouseout', function(event) {
        event.target.style.backgroundColor = "";
    } );
}

window.addEventListener("load", init);
