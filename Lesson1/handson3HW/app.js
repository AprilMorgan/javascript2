import {calculateCircumference, calculateArea} from './circleCalculator.js';
import {convertToNumber} from './validation.js';
import {outputToElement} from './display.js';


document.querySelector('#submitButton').addEventListener("click", function() {
    submitFunction('circumference');
}, false);
document.querySelector('#submitAreaButton').addEventListener("click", function() {
    submitFunction('area');
}, false);

function submitFunction(calculationToMake) {
    let outputId = "output", inputId = "radius";
    if (calculationToMake === "area") {
        outputId += "Area";
        inputId += "Area";
    }
    let userRadius = convertToNumber(document.getElementById(inputId).value);
    if(!userRadius) {
        outputToElement(outputId, "Please enter a valid number.", "red");
    } else {
        if (calculationToMake === "area") {
            outputToElement(outputId, `The area is ${calculateArea(userRadius)}!`, "green");
        } else {
            outputToElement(outputId, `The circumference is ${calculateCircumference(userRadius)}!`, "green");
        }
    }
}