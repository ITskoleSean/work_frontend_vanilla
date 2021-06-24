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
            </li>
        `;
        } 
        
        console.log(element);
    }));
};

fetchAndGenerateTodoList();