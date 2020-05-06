//catch 
const button = document.querySelector('.todo-button');
const todo = document.querySelector('.todo-list');
const exl = document.querySelector('.exl');
const body = document.body;
const but = document.getElementById('btn')



//eventy
document.addEventListener("DOMContentLoaded", getTodos);
body.addEventListener('keydown', checkEnter);
button.addEventListener('click', createTodo);
todo.addEventListener('click', checkDeleteTodo);
but.addEventListener('click', todayTodos);

//functions 

function createTodo(e) {
  const input = document.querySelector('.todo-input');
  const todoMainDiv = document.querySelector('.todos');
  const todoUl = document.querySelector('.todo-list');
  if(input.value == "") return;

  
  const todoDiv = document.createElement('div');
  const newTodo = document.createElement('li');
  const checkButton = document.createElement('button');
  const deleteButton = document.createElement('button');

  todoDiv.classList.add('todo');
  newTodo.classList.add('text');
  checkButton.classList.add('checked');
  deleteButton.classList.add('deleted');
  checkButton.classList.add('btn');
  deleteButton.classList.add('btn');

  
  newTodo.innerText = input.value;
  saveTodos(newTodo.textContent);
  checkButton.innerHTML = '<i class="fas fa-check">';
  deleteButton.innerHTML = '<i class="fas fa-times">';

  todoUl.appendChild(todoDiv);
  todoDiv.appendChild(newTodo);
  todoDiv.appendChild(checkButton);
  todoDiv.appendChild(deleteButton);
  input.value = "";
};

function checkEnter(e){
  if(event.which == 13 || event.keyCode == 13) createTodo();
  else return;
}

function checkDeleteTodo(e) {
  const grab = e.target;
  const todo = grab.parentElement;



  if(grab.classList[0] === "deleted") {
    todo.classList.add('fall-animation');
    todo.addEventListener('transitionend', ()=>todo.remove());
    removeTodos(todo);
  }
  else if(grab.classList[0] === "checked") {
    todo.classList.toggle('checked-text');
  }
};

function saveTodos(todo){
  let todos;
  if(localStorage.getItem('todos') == null) {
    todos=[];
  }
  else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }

  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos(todo){
  let todos;
  if(localStorage.getItem('todos') == null) {
    todos=[];
  }
  else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }

  todos.forEach(function(todo){
    const input = document.querySelector('.todo-input');
    const todoMainDiv = document.querySelector('.todos');
    const todoUl = document.querySelector('.todo-list');
    
    const todoDiv = document.createElement('div');
    const newTodo = document.createElement('li');
    const checkButton = document.createElement('button');
    const deleteButton = document.createElement('button');

    todoDiv.classList.add('todo');
    newTodo.classList.add('text');
    checkButton.classList.add('checked');
    deleteButton.classList.add('deleted');
    checkButton.classList.add('btn');
    deleteButton.classList.add('btn');

    newTodo.innerText = todo;
    checkButton.innerHTML = '<i class="fas fa-check">';
    deleteButton.innerHTML = '<i class="fas fa-times">';

    todoUl.appendChild(todoDiv);
    todoDiv.appendChild(newTodo);
    todoDiv.appendChild(checkButton);
    todoDiv.appendChild(deleteButton);
  });
}

function removeTodos(todo) {
  let todos;
  if(localStorage.getItem('todos') == null) {
    todos=[];
  }
  else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }

  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex),1);
  localStorage.setItem('todos', JSON.stringify(todos));
}

function todayTodos() {
  let todos = document.querySelectorAll('.todo')
  let date = new Date();
  let day = date.getDate();
  let myArray = Array.from(todos);

  myArray.forEach(function(element){
    if(element.classList[1] === "del") {
      element.classList.remove('del');
      but.innerText = "Na dziś";
    }
    else if(parseInt(element.childNodes[0].textContent) !== day)
    {
      element.classList.add('del');
      but.innerText = "Ogólne";
    }
  });

  
  /*if(parseInt(todo) !== day)
  {
    console.log(day);
    todoDiv.classList.add("del");
  }*/
}
