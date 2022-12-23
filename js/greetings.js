
const loginForm=document.querySelector("#login-form");
const loginInput=document.querySelector("#login-form input");
const link=document.querySelector("a");
const greeting=document.querySelector("#greeting");
const logOut=document.querySelector("#log-out");

const HIDDEN_CLASSNAME="hidden";
const USERNAME_KEY="username";



function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    //greeting.innerText="Hello "+username; 밑에거랑 같은 동작임
    /*greeting.innerText=`Hello ${username}`; //물결 표시입력할 때 있는 따옴표임 이 기호를 "백틱"이라 부름
    greeting.classList.remove(HIDDEN_CLASSNAME);*/  
    paintGreetings();
}


function paintGreetings(){
    const username=localStorage.getItem(USERNAME_KEY);
    greeting.innerText=`안녕하세요 ${username}님😊`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    logOut.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername=localStorage.getItem(USERNAME_KEY);
if(savedUsername===null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    paintGreetings();
}

function logoutSubmit(event){
    event.preventDefault();
    logOut.classList.add(HIDDEN_CLASSNAME);
    localStorage.removeItem(USERNAME_KEY);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    greeting.classList.add(HIDDEN_CLASSNAME);
    localStorage.clear();
    clearToDo();
}

logOut.addEventListener("submit",logoutSubmit);



/* TODOList*/

const toDoForm=document.getElementById("todo-form");
const toDoInput=toDoForm.querySelector("#todo-form input");
const toDoList=document.getElementById("todo-list");

const TODOS_KEY="todos";
let toDos=[];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li=event.target.parentElement;
    li.remove();
    toDos=toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function clearToDo(){
    while(toDoList.firstChild){
        toDoList.removeChild(toDoList.firstChild);
    }
}
function paintToDo(newTodo){
    const li=document.createElement("li");
    li.id=newTodo.id;
    const span=document.createElement("span");
    span.innerText=newTodo.text;
    const button =document.createElement("button");
    button.innerText="❌취소하기";
    
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDOSubmit(event){
    event.preventDefault();
    const newTodo=toDoInput.value;
    toDoInput.value="";
    const newTodoObj={
        text:newTodo,
        id:Date.now(),

    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDOSubmit);



const savedToDos=localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos=JSON.parse(savedToDos);
    toDos=parsedToDos;
    parsedToDos.forEach(paintToDo);
}
