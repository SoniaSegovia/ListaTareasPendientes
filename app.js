const textInputField = document.querySelector('#text-input-field');
const agregarButton = document.querySelector('#agregar-button');
const todosContainer = document.querySelector('.todos-container');

agregarButton.addEventListener('click', ()=>{
if (textInputField.value.trim().length == '')
    return;
    
    const todoItemContainer = document.createElement('div');
    todoItemContainer.classList.add('todo-item-container');

    todosContainer.appendChild(todoItemContainer);

    const todoText = document.createElement('p');
    todoText.id = 'todo-text';
    todoText.innerText = textInputField.value;
    todoItemContainer.appendChild(todoText);

    todoText.addEventListener('dblclick', ()=>{
        todoText.classList.add('line-through');
        editarButton.setAttribute("disabled", "disable");
    })

    const editarButton = document.createElement('button');
    editarButton.id = 'editar-button';

    const  editarImage = document.createElement('img');
    editarImage.src = 'editar.png';
    editarButton.appendChild(editarImage);
    todoItemContainer.appendChild(editarButton)
    
    editarButton.addEventListener('click', ()=>{
        textInputField.value = todoText.innerText;
        const parent = editarButton.parentElement;
        parent.parentElement.removeChild(parent);
    });

    const eliminarButton = document.createElement('button');
    eliminarButton.id = 'eliminar-button';

    const eliminarImage = document.createElement('img');
    eliminarImage.src = 'eliminar.png';
    eliminarButton.appendChild(eliminarImage);
    todoItemContainer.appendChild(eliminarButton);

    eliminarButton.addEventListener('click',()=>{
        const parent = eliminarButton.parentElement;
        parent.parentElement.removeChild(parent);
    });





    textInputField.value = "";

});