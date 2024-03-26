//select the input box
//select btn
//to do list select to apend and delete

const inputBox = document.querySelector(".todo-input");
const addtodoButton = document.querySelector(".todo-button");
const toDoList = document.querySelector(".todo-list");

function addTodoItem(event) {
  event.preventDefault();
 
  const todoName = inputBox.value;

  if (!todoName) {
    return;
  }

  const newTodoDiv = document.createElement("div");


  const newTODO = document.createElement("li");
  newTODO.innerText = todoName;
  newTodoDiv.appendChild(newTODO);

  

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.onclick = deleteItem; //function of delete

  newTodoDiv.appendChild(deleteButton);

  toDoList.appendChild(newTodoDiv);
  inputBox.value = "";
}



function deleteItem(event) {
  console.log("delete items");
  console.log(event); //tocheck the events
  const parentElemt = event.target.parentElement;
  parentElemt.remove();
}

addtodoButton.addEventListener("click", addTodoItem);


// const ulList = document.querySelector(".todo-list");
// function addTask(){
    
// }