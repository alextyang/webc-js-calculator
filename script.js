

function halfNumber(num) {
  var half = num / 2.0    //Divides number
  result = "Half of "+num+" is "+half+"."   //Creates Sentence
  console.log(result)   //Prints Sentence
  alert(result)
}

function fortune(name) {
  var fortunes = ["a smart, loving person will enter your life soon.",
  "a dubious friend may be an enemy in camouflage.",
  "a feather in the hand is better than a bird in the air.",
  "a fresh start will put you on your way.",
  "a friend asks only for your time not your money."] //Array of Possible Fortunes

  var ind = Math.floor(Math.random() * 5)   //Random number, index in array
  var resultEl = document.getElementById('fortune-output')

  while (resultEl.textContent == fortunes[ind]) { //Loop until fortune is different than last time
    ind = Math.floor(Math.random() * 5)   //Generate new number
  }

  resultEl.textContent = name + ", " + fortunes[ind]  //Add name, print to text element
}

function restyle() {

  var fortText = document.getElementById('fortune-output')

  fortText.style.color = "#" + Math.floor(Math.random()*16777215).toString(16); //Random hex color
  fortText.style.fontSize = Math.floor(Math.random()*100 + 16) + "px" // Random font size
  fortText.style.fontWeight = Math.floor(Math.random()*1000) // Random font weight
}



document.addEventListener("DOMContentLoaded", function() {

  var calcButton = document.getElementById('half-button')
  var calcInput = document.getElementById('half-input')

  calcButton.addEventListener('click', function() {
    var value = parseInt(calcInput.value)
    if (!isNaN(value)) { // If parsing works, run calculation
      halfNumber(value)
    }
  })


  var fortButton = document.getElementById('fortune-button')
  var fortInput = document.getElementById('fortune-input')

  fortButton.addEventListener('click', function() {
    var name = fortInput.value
    if (name.length > 0) { // If name entered, make fortune
      restyle()
      fortune(name)
    }
  })

})
