const todoInput=document.querySelector('.todo-input');
const todoButton=document.querySelector('.todo-button');
const todoList=document.querySelector('.todo-list');

todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);
function addTodo(event){
    event.preventDefault();
    //div with Todo class
    const todoDiv=document.createElement("div");
    todoDiv.classList.add("todo");
    //creating list li
    const newTodo=document.createElement("li");
    newTodo.innerText=todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //checked button
    const completedButton=document.createElement("button");
    completedButton.innerHTML= '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-button");
    todoDiv.appendChild(completedButton);
   //delete button
    const deleteButton=document.createElement("button");
    deleteButton.innerHTML= '<i class="fas fa-trash"></i>';
    deleteButton.classList.add("delete-button");
    todoDiv.appendChild(deleteButton);

    todoList.appendChild(todoDiv);
    todoInput.value="";
}
function deleteCheck(e) {
    const item=e.target;
    //for deleting todo
    if(item.classList[0]==='delete-button'){
        const todo=item.parentElement;
        todo.classList.add("fall"); 
        todo.addEventListener('transitioned',function(){
            todo.remove();

        });
    }

    if(item.classList[0]==='complete-button'){
        const todo=item.parentElement;
        todo.classList.toggle('completed');
    }

}