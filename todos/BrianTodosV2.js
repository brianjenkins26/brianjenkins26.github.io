/*
	Version 2 of todo list 
*/

// 0.) Make a to do list as an array
var todos = ["Go to school", "Drive home", "Go to work"];

// 1.) a function that displays the todos
function displayTodos(){
	console.log(" My todos: ",  todos);
}

// 2.) a function that adds a todo
function addTodo(x) {
	todos.push(x);
	displayTodos();
}

// 3.) a function that changes a todo
function changeTodo(i, update) {
	todos[i] = update;
	displayTodos();
}

// 4.) a function that deletes a todo
function deleteTodo(i){
	todos.splice(i,1);
	displayTodos();
}
displaytodo


