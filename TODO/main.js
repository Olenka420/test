var input = document.querySelector("input[type='text']");
var ul = document.querySelector("ul");
var container = document.querySelector("div");
var lists = document.querySelectorAll("li");
var spans = document.getElementsByTagName("span");
var pencil = document.querySelector("#pencil");
var saveBtn = document.querySelector(".save");
var clearBtn = document.querySelector(".clear");
var lists = document.querySelectorAll("li");
var tipsBtn = document.querySelector(".tipBtn");
var closeBtn = document.querySelector(".closebtn");
var overlay = document.getElementById("overlay");
var weather = document.getElementById("weather");

// Delete todo if delete span clicked   оставить тут
function deleteTodo(){
    for(let span of spans){
        span.addEventListener('click', function(){
            span.parentElement.remove();
        })
    }
}
// оставить тут
function loadTodos(){
    if(localStorage.getItem("todoList")){
        ul.innerHTML = localStorage.getItem("todoList");
        deleteTodo();
    }
}

deleteTodo();

loadTodos();