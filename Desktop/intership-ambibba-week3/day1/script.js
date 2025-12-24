const display=document.getElementById("display");

function append(value){
    if(display.innerText==="0") display.innerText=value;
    else display.innerText+=value;
}

function clearDisplay(){
    display.innerText="0";
}

function backspace(){
    display.innerText=display.innerText.slice(0,-1)||"0";
}

function calculate(){
    try{
        display.innerText=eval(display.innerText);
    }catch{
        display.innerText="Error";
    }
}

document.addEventListener("keydown",e=>{
    if("0123456789+-*/.".includes(e.key)) append(e.key);
    if(e.key==="Enter") calculate();
    if(e.key==="Backspace") backspace();
    if(e.key==="Escape") clearDisplay();
});