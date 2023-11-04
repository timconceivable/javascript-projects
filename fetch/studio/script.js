function init () {
   fetch("https://handlers.education.launchcode.org/static/astronauts.json").then( function(response) {
      response.json().then( function(json) {
         const div = document.getElementById('container');
         astronautList = [];
         for (i in json) {
            astronautList.push(json[i]);
         }
         astronautList.sort(function (a,b) {
            return a.hoursInSpace < b.hoursInSpace;
         });
         const title = document.getElementById("title");
         title.innerHTML += `${astronautList.length}`;
         
         for (i in astronautList) {
            let astronaut = astronautList[i];
            let isActive = astronaut.active ? "active" : "inactive";
            container.innerHTML += `
            <div class="astronaut">
               <div class="bio">
                  <div class="names">
                     <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                  </div>
                  <div class="info">
                     <ul>
                        <span class="${isActive}"> ${isActive.toUpperCase()}</span>
                        <li><strong>Hours in space:</strong> ${astronaut.hoursInSpace}</li>
                        <li><strong>skills:</strong> ${astronaut.skills}</li>
                     </ul>
                  </div>
               </div>
               <img class="avatar" src="${astronaut.picture}">
            </div>
            `;
         }
         
       });
   });
}

window.addEventListener("load", init);