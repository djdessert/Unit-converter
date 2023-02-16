/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let convertNbr = null

const meters = convertNbr / 3.281
const feet = convertNbr * 3.281
const liters = convertNbr / 0.264
const gallons = convertNbr * 0.264
const kilos = convertNbr / 2.204
const pounds = convertNbr * 2.204

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("convert-btn")

let lengthUl = document.getElementById("length-ul")
let volumeUl = document.getElementById("volume-ul")
let massUl = document.getElementById("mass-ul")

inputBtn.addEventListener("click", function() {
    convertNbr = Number(inputEl.value)
    changeUnits() 
   
})
 
function changeUnits() {
     console.log(feet)
    lengthUl.textContent = 
        `${convertNbr} meters = ${(convertNbr * 3.281).toFixed(3)}  feet 
        | ${convertNbr} feet = ${(convertNbr / 3.281).toFixed(3)} meters`
    volumeUl.textContent =
        `${convertNbr} liters = ${(convertNbr * 0.264).toFixed(3)} gallons 
        | ${convertNbr} gallons = ${(convertNbr / 0.264).toFixed(3)} liters`
    massUl.textContent = 
        `${convertNbr} kilos = ${(convertNbr * 2.204).toFixed(3)} pounds 
        | ${convertNbr} pounds = ${(convertNbr / 2.204).toFixed(3)} kilos`
}