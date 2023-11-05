const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function main() {
  console.log("Hello! Welcome to the Diet Plan App!");
  const fileStream = fs.createWriteStream('file.txt');

  fileStream.write(`${getAge()}\n`);
  fileStream.write(`${getGender()}\n`);
  fileStream.write(`${getWeight()}\n`);
  fileStream.write(`${getHeight()}\n`);
  fileStream.write(`${getDietaryRestrictions()}\n`);
  fileStream.write(`${getActivityAmount()}\n`);

  
  



  
  fileStream.end();
}

function getAge() {
    let age = -1;
    const input = prompt("Please enter your age (between 15 and 80):");

    if (input !== null) {
        age = parseInt(input);

        if (isNaN(age) || age < 15 || age > 80) {
            alert("Invalid age. Please enter a valid age between 15 and 80.");
            return getAge();
        }
    } else {
        alert("You canceled the input.");
        return getAge();
    }

    return age;
}

const age = getAge();
console.log("You entered a valid age: " + age);

function getGender() {
    let gender = 0;
    while (gender === 0) {
        const input = prompt("Please indicate the number of your biological gender (1. Female, 2. Male):");

        if (input !== null) {
            gender = parseInt(input);

            if (isNaN(gender) || (gender !== 1 && gender !== 2)) {
                alert("Invalid gender. Please enter 1 for Female or 2 for Male.");
                gender = 0;
            }
        } else {
            alert("You canceled the input.");
        }
    }

    return gender;
}

const selectedGender = getGender();
console.log(`You selected gender: ${selectedGender}`);


function getWeight() {
    let weight = 0;
    let input = null;
    let doubleWeight = 0.0;

    while (input === null) {
        const weightUnitInput = prompt("Are you using pounds or kilograms for weight?").trim().toLowerCase();

        if (weightUnitInput === "pounds" || weightUnitInput === "kilograms") {
            do {
                const weightValueInput = prompt("Please enter your weight (above 0):");
                doubleWeight = parseFloat(weightValueInput);

                if (!isNaN(doubleWeight) && doubleWeight > 0) {
                    if (weightUnitInput === "pounds") {
                        doubleWeight *= 0.45359237;
                    }
                    weight = Math.round(doubleWeight);
                    input = weightUnitInput;
                } else {
                    alert("Invalid weight. Please enter a valid weight value above 0.");
                }
            } while (input === null);
        } else {
            alert("Invalid weight unit. Please enter 'pounds' or 'kilograms'.");
        }
    }

    return weight;
}

const userWeight = getWeight();
console.log(`Your weight: ${userWeight} kg`);

function getHeight() {
    let height = 0;
    let input = null;
    let doubleHeight = 0.0;

    while (input === null) {
        const heightUnitInput = prompt("Are you using feet or centimeters for your height?").trim().toLowerCase();

        if (heightUnitInput === "feet" || heightUnitInput === "centimeters") {
            do {
                const heightValueInput = prompt("Please enter your height (above 0):");
                doubleHeight = parseFloat(heightValueInput);

                if (!isNaN(doubleHeight) && doubleHeight > 0) {
                    if (heightUnitInput === "feet") {
                        doubleHeight *= 30.48;
                    }
                    height = Math.round(doubleHeight);
                    input = heightUnitInput;
                } else {
                    alert("Invalid height. Please enter a valid height value above 0.");
                }
            } while (input === null);
        } else {
            alert("Invalid height unit. Please enter 'feet' or 'centimeters'.");
        }
    }

    return height;
}

const userHeight = getHeight();
console.log(`Your height: ${userHeight} cm`);


function getDietaryRestrictions() {
    let restriction = 0;

    while (restriction === 0) {
        const input = prompt("What are your dietary restrictions? (1. no restrictions, 2. vegetarian, 3. vegan, 4. gluten-free, 5. dairy-free):");

        if (input !== null) {
            restriction = parseInt(input);

            if (isNaN(restriction) || (restriction !== 1 && restriction !== 2 && restriction !== 3 && restriction !== 4 && restriction !== 5)) {
                alert("Invalid dietary restriction. Please enter a valid option (1-5).");
                restriction = 0;
            }
        } else {
            alert("You canceled the input.");
        }
    }

    return restriction;
}

const userDietaryRestrictions = getDietaryRestrictions();
console.log(`Your dietary restrictions: ${userDietaryRestrictions}`);

function getActivityAmount() {
    let activity = 0;

    while (activity === 0) {
        const input = prompt("Please enter your activity amount (choose number):\n" +
            "1. Sedentary (little/no exercise)\n" +
            "2. Light (exercise 1-3x/week)\n" +
            "3. Moderate (exercise 4-5x/week)\n" +
            "4. Active (daily/intense exercise 3-4x/week)\n" +
            "5. Very Active (intense exercise 6-7x/week)\n" +
            "6. Extra Active (very intense exercise daily/physical job)");

        if (input !== null) {
            activity = parseInt(input);

            if (isNaN(activity) || activity < 1 || activity > 6) {
                alert("Invalid activity amount. Please enter a valid option (1-6).");
                activity = 0;
            }
        } else {
            alert("You canceled the input.");
        }
    }

    return activity;
}

const userActivityAmount = getActivityAmount();
console.log(`Your activity amount: ${userActivityAmount}`);

