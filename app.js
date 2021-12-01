const formAAddTodo = document.querySelector('.form-add-todo')
const todosContainer = document.querySelector('.todos-container')

formAAddTodo.addEventListener('submit', event => {
    event.preventDefault()

    const inputValue = event.target.add.value.trim() // trim() = método de string para remover espaços em branco do inicio e do fim.
    if(inputValue.length){
        todosContainer.innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${inputValue}</span>
        <i class="far fa-trash-alt delete"></i>
        </li>`

        event.target.reset() // retorna ao estado default do form  = vazio, limpa o imput apos enviar a informação do imput.
    }
})
