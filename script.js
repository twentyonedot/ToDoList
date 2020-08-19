/* Selectors */
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

/* EventListners */

todoButton.addEventListener('click', addTodo);

todoList.addEventListener('click', deleteCheck);

filterOption.addEventListener('click', filterTodo);


/* Functions */

function addTodo(event){

    //Prevents form from submitting
    event.preventDefault();

    //TODO Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo')
    
    //TODO li
    const newTodo = document.createElement('li');
    newTodo.classList.add('todo-item');
    newTodo.innerText = todoInput.value;

    todoDiv.appendChild(newTodo);

    //Completed Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    //Delete Button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add('delete-btn');
    todoDiv.appendChild(deleteButton);
    
    todoList.appendChild(todoDiv);
    //clear todoinput value

    todoInput.value = "";
}

function deleteCheck(e){
    const item = e.target;
    //DELETE Todo
    if(item.classList[0] === "delete-btn"){
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function(){
            todo.remove();
        })
        
    }

    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}


function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display = "flex";
                }
                else{
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":{
                if(!todo.classList.contains("completed")){
                    todo.style.display = "flex";
                }
                else{
                    todo.style.display = "none";
                }
                break
            }
        }
    })

}

