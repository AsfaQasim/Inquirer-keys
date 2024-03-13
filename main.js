import inquirer from "inquirer";
let answers = await inquirer.prompt([
    {
        name: "age",
        type: "number",
        message: "Enter import  your age",
    }
]);
console.log("My age is" + (answers.age));
