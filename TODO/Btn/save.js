export function saveBtnF(){
    saveBtn.addEventListener('click', function(){
        localStorage.setItem('todoList', ul.innerHTML);
    })
}