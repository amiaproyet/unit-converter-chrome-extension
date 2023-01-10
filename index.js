
const convertBtn = document.getElementById("convert-btn")
const lenResults = document.getElementById("len-results")
const volResults = document.getElementById("vol-results")
const massResults = document.getElementById("mass-results")
const inputField = document.getElementById("input-field")
 



convertBtn.addEventListener("click", function() {
    lenResults.textContent = metersToFeet(inputField.value)
    volResults.textContent = litersToGallons(inputField.value)
    massResults.textContent = kilogramsToPounds(inputField.value)
    
})


function metersToFeet(num) {
    const feetInMeter = 3.281
    const feet = num * feetInMeter
    const meters = num / feetInMeter
    const convertStr = `${inputField.value} meters = ${feet.toFixed(3)} 
    feet | ${inputField.value} feet = ${meters.toFixed(3)} meters`
    return convertStr
}

function litersToGallons(num) {
    const gallonsInLiters = 0.264
    const gallons = num / gallonsInLiters
    const liters = num * gallonsInLiters
    let convertStr = `${inputField.value} gallons = ${gallons.toFixed(3)} 
    liters | ${inputField.value} liters = ${liters.toFixed(3)} gallons`
    return convertStr
}

function kilogramsToPounds(num) {
    const poundsInKilos = 2.204
    const kilograms = num * poundsInKilos
    const pounds = num / poundsInKilos
    let convertStr = `${inputField.value} kilograms = ${kilograms.toFixed(3)} 
    pounds | ${inputField.value} pounds = ${pounds.toFixed(3)} kilograms`
    return convertStr

}
