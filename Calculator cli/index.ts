#! /usr/bin/env node

import inquirer from 'inquirer';

const answers = await inquirer.prompt([{
    name: "firstName",
    type: "number",
    message: "Enter First Number"
},
{
    name: "secondNumber",
    type: "number",
    message: "Enter your Second Number"
},
{
    name: "Operator",
    type: "list",
    message: "Select one Operator to perform the Operation",
    choices: ["Addition", "Subtraction", "Multiplication", "Divide"]
}
])

if(answers.Operator === "Addition"){
    console.log(answers.firstName + answers.secondNumber)
}else if(answers.Operator === "Subtraction"){
    console.log(answers.firstNumber - answers.secondNumber)
}else if(answers.Operator === "Multiplication"){
    console.log(answers.Operator * answers.secondNumber)}
else if(answers.Operator === "Divide"){
        console.log(answers.firstName / answers.secondNumber)
    
    }


