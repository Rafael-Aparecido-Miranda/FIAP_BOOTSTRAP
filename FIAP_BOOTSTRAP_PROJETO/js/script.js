const inputBox = document.querySelector('#entrada');
const addBtn = document.querySelector('.inputField button');
const todoList = document.querySelector('.todoList');
const deleteAllBtn = document.querySelector('.footer button');

inputBox.onkeyup = _=> { //! Arrow Function _=> ou () =>
    let userData = inputBox.value; //! Esta variavel pega o valor digitado pelo usuario */
    
    if(userData.trim() != 0){//! Verifica se o que o usuario digitou se não é um espaço vazio */
        addBtn.classList.add('active');
    }else{
        addBtn.classList.remove('active');
    }
}