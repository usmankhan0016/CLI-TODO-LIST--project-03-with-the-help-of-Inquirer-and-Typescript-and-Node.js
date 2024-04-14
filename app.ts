import inquirer from "inquirer";
// Making an emty array:
let todos = [];
// Creating a variable for the loop:
let condition = true;
while (condition) {
  // Taking user input to add in the array:
  let addTask = await inquirer.prompt([
    {
      name: "todos",
      type: "input",
      message: "What you want to add in your todos?",
    },
    {
      name: "addmore",
      type: "confirm",
      message: "Would you like to add more?",
      default: "false",
    },
  ]);
  // Pushing first object value in emty array:
  todos.push(addTask.todos);
  //   Equalling the loop variable to the input second object:
  condition = addTask.addmore;
  //   consoling the array:
  console.log(todos);
}
