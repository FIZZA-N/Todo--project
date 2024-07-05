import inquirer from "inquirer";
async function main() {
    let todos = [];
    let condition = true;
    while (condition) {
        let addtask = await inquirer.prompt([
            {
                name: 'todo',
                type: 'input',
                message: "What do you want to add in your Todos list?"
            },
            {
                name: 'addmore',
                type: 'confirm',
                message: "Do you want to add more?",
                default: false
            },
        ]);
        todos.push(addtask.todo);
        condition = addtask.addmore;
    }
    console.log("your todos: ");
    console.log(todos);
}
main().catch(err => console.error(err));
// let todos = []
// let condition = true;
// async function askquestion() {
// while(condition){
//     let todoQuestion = await inquirer.prompt(
//    [
//      {
//             name:'todo',
//             type:'input',
//             message:"what would you like to add in your todo list?"
//     },
//     {
//             name:'addmore',
//             type:'confirm',
//             message:"would you like to add more"
//     }
// ]
// );
//  todos.push(todoQuestion.todo)
//  console.log(todos);
//  condition = todoQuestion.addmore
// }
// console.log(todos);
// }
// askquestion();
