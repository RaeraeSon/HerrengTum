const canvas=document.querySelector("canvas");
const ctx=canvas.getContext("2d");
const lineWidth=document.getElementById("line-width");
const color=document.getElementById("color");
const colorOptions=Array.from(document.getElementsByClassName("color-option"));
const modeBtn=document.getElementById("mode-btn");
const destroyBtn=document.getElementById("destroy-btn");
const eraserBtn=document.getElementById("eraser-btn");
const fileInput=document.getElementById("file");
const textInput=document.getElementById("text");
const saveBtn=document.getElementById("save");

const CANVAS_WIDTH=800;
const CANVAS_HEIGHT=800;



canvas.width=CANVAS_WIDTH;
canvas.height=CANVAS_HEIGHT;
ctx.lineWidth=lineWidth.value;
ctx.lineCap="round";
let isPainting =false;
let isFilling=false;
function onMove(event){
    if(isPainting){
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        return;
    }
    ctx.beginPath();
    ctx.moveTo(event.offsetX,event.offsetY);

}

function startPainting(){
    isPainting=true;

}

function canclePainting(){
    isPainting=false;
}

function onLineWidthChange(event){
    ctx.lineWidth=event.target.value;
    
}

function onColorChange(event){
    ctx.strokeStyle=event.target.value;
    ctx.fillStyle=event.target.value;
}

function onColorClick(event){
    const colorValue=event.target.dataset.color;
    ctx.strokeStyle=colorValue;
    ctx.fillStyle=colorValue;
    color.value=colorValue;
}

function onModeClick(){
    if(isFilling){
        isFilling=false;
        modeBtn.innerText="Fill";
    }else{
        isFilling=true;
        modeBtn.innerText="Draw";
    }
}

function onCanvasClick(){
    if(isFilling){
        ctx.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);    
    }
}

function onDestroyClick(){
    ctx.fillStyle="white";
    ctx.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT); 
}

function onEraserClick(){
    ctx.strokeStyle="white";
    isFilling=false;
    modeBtn.innerText="Fill";
}

function onFileChange(event){
    const file=event.target.files[0];
    const url=URL.createObjectURL(file);
    const image=new Image();
    image.src=url;
    image.onload=function(){ //이벤트 리스너 설정하는 또 다른 방법임 
        ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }
}

function onDoubleClick(event){
    const text=textInput.value;
    if(text !==""){
        ctx.save(); //현재 상태를 저장 이 이후에 일어난 변경에 대해서는 저장하지 않음
        ctx.lineWidth=1;
        ctx.font="48px serif";
        ctx.fillText(text,event.offsetX,event.offsetY);
        ctx.restore();//save 했던 시점으로 다시 원상복귀
    }
}

function onSaveClick(){
    const url=canvas.toDataURL();
    const a=document.createElement("a");
    a.href=url;
    a.download="myDrawing.png";
    a.click();
}


canvas.addEventListener("dblclick", onDoubleClick);
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown",startPainting);
canvas.addEventListener("mouseup", canclePainting);
canvas.addEventListener("mouseleave", canclePainting);
canvas.addEventListener("click",onCanvasClick);
lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);
destroyBtn.addEventListener("click", onDestroyClick);
eraserBtn.addEventListener("click", onEraserClick);
colorOptions.forEach(color=> color.addEventListener("click",onColorClick));

modeBtn.addEventListener("click", onModeClick);

fileInput.addEventListener("change", onFileChange);
saveBtn.addEventListener("click",onSaveClick);




function openNav(){
    document.querySelector(".menu-bar").style.width="250px";
    document.querySelector(".main").style.marginLeft="250px";
    document.body.style.backgroundColor="rgba(0,0,0,0.4)";
}

function closeNav(){
    document.querySelector(".menu-bar").style.width="0px";
    document.querySelector(".main").style.marginLeft="0px";
    document.body.style.backgroundColor="white";
}

/*const colors=[
    "#ff3838",
    "#ffb8b8",
    "#c56cf0",
    "#ff9f1a",
    "#fff200",
    "#32ff7e",
    "#7efff5",
    "#18dcff",
    "#7d5fff",
];



function onClick(event){
    ctx.beginPath();
    ctx.moveTo(400,400);
    const color=colors[Math.floor(Math.random()*colors.length)];
    ctx.strokeStyle=color;
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
}

canvas.addEventListener("mousemove", onClick);*/

