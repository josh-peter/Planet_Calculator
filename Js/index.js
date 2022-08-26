const planets = [
    {
        name:'Earth',
        gravity: 9.8
    },
    {
        name:'Mercury',
        gravity: 3.61
    },
    {
        name:'Venus',
        gravity: 8.83
    },
    {
        name:'Mars',
        gravity: 3.75
    },
    {
        name:'Jupiter',
        gravity: 26.0
    },
    {
        name:'Saturn',
        gravity: 11.2
    },
    {
        name:'Uranus',
        gravity: 10.5
    },
    {
        name:'Neptune',
        gravity: 13.3
    },
    {
        name:'Pluto',
        gravity: 0.61
    },
    {
        name:'Moon',
        gravity:1.62
    }
]
 


function calcPlanetsWeight() {

    const mass = document.getElementById('masses').value
    const planet = document.getElementById('planet').value
    if (mass <= 0) {
        alert("Kindly input the Mass weight")
        return
    }

    for (i = 0; i < planets.length; i++){
        if (planets[i].name.toLowerCase() == planet.toLowerCase()){
            let result = planets[i].gravity * mass

            let circleDissappear = document.getElementsByClassName('output-text')[0]
            circleDissappear.innerHTML = `
           
            <p id="planetsresult">The weight of the object on ${planet}</p>
           <div class="output-value">
               <span id = "answer">${result}</span>
           </div>
           
           ` 
            
            return circleDissappear 
        }

    }

    return alert('Shey you dhey ment nie')
}


