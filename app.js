const kgInput = document.querySelector('#weight-kg'); // Selecting the Kg input
const heightInput = document.querySelector('#height-cm'); // Selecting the height input
const bmiOutput = document.querySelector('#bmi-output'); // Selecting the Lbs output
const page = document.querySelector('#page');

// Devide KG by Hgt
function BmiConvert(kg, hgt) {
    const Bmi = kg / hgt / 1.75;
    console.log(Bmi);
    return Bmi.toFixed(0);
}

// Updated the BMI output
function updateBmi() {
    const BmiWeight = BmiConvert(kgInput.value, heightInput.value); // Take Kg input value and convert to Lbs
    bmiOutput.textContent = BmiWeight; // Updated Lbs output with new converted Lbs weight
    boxStyle(BmiWeight);
}

function boxStyle(bmi) {
    // Removes all class
    page.classList.remove('underweight', 'healthy', 'overweight', 'obese');
    // Add matching class
    if (bmi < 18.5) {
        page.classList.add('underweight');
    } else if (bmi >= 18.5 && bmi < 25) {
        page.classList.add('healthy');
    } else if (bmi >= 25 && bmi < 30) {
        page.classList.add('overweight');
        if (navigator.vibrate) {
            window.navigator.vibrate(200);
        }
    } else if (bmi > 30) {
        page.classList.add('obese');
        if (navigator.vibrate) {
            window.navigator.vibrate(400);
        }
    }
}

// Listening for change and key event on kgInput & heightInput input field
kgInput.addEventListener('change', updateBmi);
kgInput.addEventListener('keyup', updateBmi);
heightInput.addEventListener('change', updateBmi);
heightInput.addEventListener('keyup', updateBmi);



// Run calculation on initilisation
updateBmi();