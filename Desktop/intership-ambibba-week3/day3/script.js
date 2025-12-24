const input=document.getElementById("taskInput");
const list=document.getElementById("taskList");
const total=document.getElementById("total");
const done=document.getElementById("done");

let tasks=JSON.parse(localStorage.getItem("tasks"))||[];

function save(){
    localStorage.setItem("tasks",JSON.stringify(tasks));
}

function updateStats(){
    total.innerText=tasks.length;
    done.innerText=tasks.filter(t=>t.done).length;
}

function render(){
    list.innerHTML="";
    tasks.forEach((t,i)=>{
        const li=document.createElement("li");
        li.className=t.done?"completed":"";
        li.innerHTML=`
            <span onclick="toggle(${i})">${t.text}</span>
            <div class="actions">
                <button onclick="removeTask(${i})">✖</button>
            </div>
        `;
        list.appendChild(li);
    });
    updateStats();
}

function addTask(){
    if(input.value.trim()==="") return;
    tasks.push({text:input.value,done:false});
    input.value="";
    save();
    render();
}

function toggle(i){
    tasks[i].done=!tasks[i].done;
    save();
    render();
}

function removeTask(i){
    tasks.splice(i,1);
    save();
    render();
}

render();