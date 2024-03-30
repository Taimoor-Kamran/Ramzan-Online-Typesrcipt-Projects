#! /usr/bin/env node 

import inquirer from "inquirer"

let myBalance = 10000;
let Password = 4321;

const answers = await inquirer.prompt([{
   name: "AtmPassword",
   type: "number",
   message: "Enter Your AtmPassword" 
},
])


if(answers.AtmPassword === Password){
    console.log("Password Is Correct !!!")

let OperationAns = await inquirer.prompt([
    {
        message: "Please Select One Option",
        name: "Operations",
        type: "list",
        choices: ["widthdraw", "checkBalance"]
    }  
]);
if(OperationAns.Operations === "widthdraw"){
    let AmountAns = await inquirer.prompt([{
        name: "amount",
        type: "number",
        message: "Enter your amount"
    }])

    myBalance -= AmountAns.amount;

    if(AmountAns.amount < myBalance){
        console.log("Your Balance is " + myBalance)
    }else{
        console.log("Your Are Not Enough")
    }
}
else if(OperationAns.Operations === "checkBalance"){
    console.log("Your Current Balance is " + myBalance)
}
}
else{
    console.log("Incorrect Pin Code !!!")    
}