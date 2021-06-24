

const TodoModule = (function(){
    
    const getTodos = async() => {

        // Can setInterval on response so we can actually update the todolist frequently
        const response = await fetch("http://127.0.0.1:8081/api/v1/todo")
                                    .then(res => res.json());
        return response;
    }

    return { getTodos };

}());

export default TodoModule;