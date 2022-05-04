const inputBox = document.querySelector('#entrada');
const addBtn = document.querySelector('.inputField button');
const todoList = document.querySelector('.todoList');
const deleteAllBtn = document.querySelector('.footer button');

inputBox.onkeyup = _=> { // Arrow Function _=> ou () =>
    let userData = inputBox.value; // Esta variavel pega o valor digitado pelo usuario */
    
    if(userData.trim() != 0){// Verifica se o que o usuario digitou se não é um espaço vazio */
        addBtn.classList.add('active');
    }else{
        addBtn.classList.remove('active');
    }
}

addBtn.onclick = _ =>{
    let userData = inputBox.value;
    let getLocalStorage = localStorage.getItem('New Todo');// Esta variavel vai pegar o armazenamento local //

    if(getLocalStorage == null){ // Verificar se o armazenamento local for nulo 
        listArr = []; // Cria um array vazio não adicionando o let voce consegue usar num escopo inteiro e nao so no if
    }else{
        listArr = JSON.parse(getLocalStorage)// Adicionando dados do usuario a nossa lista
    }
    listArr.push(userData); // Empurrando para dentro do array os dados do usuario
    localStorage.setItem('New Todo', JSON.stringify(listArr)); //Estamos transformando um objeto JS em um Fragmento JS
}