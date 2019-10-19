// Write your JavaScript code here!
var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
  ];

  planets.forEach(function(element) {
    var newOpt = document.createElement("option");
    newOpt.textContent += element[0];
    //console.log(document.getElementById("planets"))
    document.getElementById("planets").appendChild(newOpt);
  });

  function calculateWeight(weight, planetName) {
    var multiplier = 0;
    for (i=0; i<planets.length; i++) {
        if (planetName === planets[i][0]) {
            multiplier = planets[i][1];
            break;
        }
    }

    return weight*multiplier
  
  }

  function handleNewPlanet(e) {
    var newPlanet = document.getElementById("new-planet").value;
    var newMultiplier = document.getElementById("new-multiplier").value;

    planets.push([newPlanet, newMultiplier]);
    var newOpt = document.createElement("option");
    newOpt.textContent += newPlanet;
    document.getElementById("planets").appendChild(newOpt);
  }

  document.getElementById("add-button").onclick = handleNewPlanet

  function handleCheck(e) {
    var list = document.getElementById("planets");

    if (this.checked) {
        var newOpt = document.createElement("option");
        newOpt.textContent += planets[0][0];
        list.insertBefore(newOpt, list.childNodes[0]);
        list.value = list.childNodes[0].text;
    } else {
        list.removeChild(list.childNodes[0]);
    }
  }

  document.getElementById("pluto-checkbox").onclick = handleCheck;


  function handleClickEvent(e) {
    var userWeight = document.getElementById("user-weight").value
    var planetName = document.getElementById("planets").value
    var newResult = calculateWeight(userWeight, planetName)

    document.getElementById("output").innerHTML = "If you were on " + planetName + ", you would weigh " + newResult + "lbs!";
  }


  document.getElementById("calculate-button").onclick = handleClickEvent;