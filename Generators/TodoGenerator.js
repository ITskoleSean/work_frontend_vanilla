import TodoModule from "../Modules/TodoModule.js"

const fetchAndGenerateTodoList = () => {
    //  Setinterval here 
    TodoModule.getTodos().then(todoList => todoList.forEach(element => {
        if ( element.todo !== null ){
            document.querySelector("#todoTarget").innerHTML += `
            <li class="card-list-item">
                <p class="deadline">${element.published}</p>
                <p class="todo">${element.todo}</p>
                <p class="deadline">${element.deadline == null ? "NS" : element.deadline}</p>
                <div class="checkbox ${element.completed ? "checked" : "not-checked"}">
                    <p class="checksign">${element.completed ? "✓" : "x"}</p>
                </div>
            </li>
        `;
        } 
        
        console.log(element);
    }));
};

fetchAndGenerateTodoList();