#! /usr/bin/env node
import inquirer from "inquirer";
let Random = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([{
        name: "userGassing",
        type: "number",
        message: "Please Guess A Number 1 to 10"
    }]);
if (answers.userGassing === Random) {
    console.log("Congragulation Your Are Win");
}
else {
    console.log("Please Try Again");
}
