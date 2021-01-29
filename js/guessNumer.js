//@ts-check
const result = document.getElementById('result');
const numberForm = document.getElementById('numberForm');
const userNumberField = document.getElementById('userNumber');
const submitButton = document.getElementById('submitButton');
const newbutton = document.getElementById('newButton');
const maxAttempts = 3;
let  numAttempts = 0;



const generateRandomNumber = (min = 1, max = 10) => {
    return  Math.floor(Math.random() * (max - min + 1) + min);
}
let randomNumber = generateRandomNumber (1, 10);
console.log(randomNumber);

const submitNumber = event => {
    event.preventDefault();
    const userNumber = +userNumberField.value;
    numAttempts++;
    if (userNumber < randomNumber) {
        result.innerHTML = 'Random Number is higher';
        } else if (userNumber > randomNumber) {
            result.innerHTML = 'Random number is lower'
        } else {
            result.innerHTML = `Random number guessed correctly in ${numAttempts} attenmpts`;
        }

    if(numAttempts === maxAttempts){
        submitButton.disable = true;
        newbutton.display = 'Initial';
        
    }

    console.log(userNumber, randomNumber, userNumber === randomNumber);
};

numberForm.onsubmit = submitNumber;

const generateNewNumber = () =>{
    numAttempts = 0;
    randomNumber = generateNewNumber(min, max);
    console.log(randomNumber);
    submitButton.disabled = false;
    newbutton.style.display = "none";
};

newbutton.onclick = generateNewNumber;

