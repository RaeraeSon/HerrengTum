const loginForm=document.querySelector("#login-form");
const loginInput=document.querySelector("#login-form input");
const link=document.querySelector("a");
const greeting=document.querySelector("#greeting");


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
}

const savedUsername=localStorage.getItem(USERNAME_KEY);
if(savedUsername===null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    paintGreetings();
}