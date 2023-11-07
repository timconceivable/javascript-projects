window.addEventListener("load", function () { // AFTER PAGE LOADS
   // FETCH ASTRONAUT DATA
   fetch("https://handlers.education.launchcode.org/static/astronauts.json").then( function(response) {
      response.json().then( function(json) {
         // CREATE AND SORT ASTRONAUT LIST
         astronautList = [];
         for (i in json) {
            astronautList.push(json[i]);
         }
         astronautList.sort(function (a,b) {
            return a.hoursInSpace < b.hoursInSpace;
         });
         const description = document.getElementById("description");
         description.innerHTML += `These ${astronautList.length} humans have travelled beyond Earth's atmosphere\u2013 except for ${astronautList[astronautList.length-1].firstName} (she's still training)`;
         
         // GENERATE HTML CONTENT (ASTRONAUT BIOS)
         const container = document.getElementById("container");
         for (i in astronautList) {
            let astronaut = astronautList[i];
            let isActive = astronaut.active ? "active" : "inactive";
            container.innerHTML += `
            <div class="astronaut">
               <div class="bio">
                  <h3 class="names">${astronaut.firstName} ${astronaut.lastName}</h3>
                  <ul class="info">
                     <span class="${isActive}"> ${isActive.toUpperCase()}</span>
                     <li><strong>Hours in space:</strong>&nbsp; ${astronaut.hoursInSpace}</li>
                     <li><strong>Skills:</strong>&nbsp; ${astronaut.skills.join(", ")}</li>
                  </ul>
               </div>
               <img class="avatar" src="${astronaut.picture}">
            </div>
            `;
         }
       });
   });

   // GENERATE BACKGROUND STARS
   const body = document.getElementById("body");
   for (let i=0; i<100; i++) {
      body.innerHTML += '<span class="star">⭐</span>'; //✨
   }
   const stars = document.getElementsByClassName("star");
   for (let index in stars) {
      stars[index].style.top = `${Math.floor(Math.random()*115)}%`;
      stars[index].style.left = `${1+Math.floor(Math.random()*98)}%`;
      stars[index].style.fontSize = `${1+Math.ceil(Math.random()*10)}px`;
      stars[index].style.textShadow = `0px 0px 5px ghostwhite, 0px 0px ${Math.random()*30}px yellow`;
   }
});