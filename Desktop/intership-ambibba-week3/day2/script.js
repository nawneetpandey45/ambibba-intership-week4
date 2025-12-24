const pass=document.getElementById("password");
const bar=document.getElementById("bar");

const rules={
    len: document.getElementById("len"),
    upper: document.getElementById("upper"),
    lower: document.getElementById("lower"),
    num: document.getElementById("num"),
    sym: document.getElementById("sym")
};

pass.addEventListener("input",()=>{
    const v=pass.value;
    let score=0;

    if(v.length>=8){ rules.len.classList.add("valid"); score++; }
    else rules.len.classList.remove("valid");

    if(/[A-Z]/.test(v)){ rules.upper.classList.add("valid"); score++; }
    else rules.upper.classList.remove("valid");

    if(/[a-z]/.test(v)){ rules.lower.classList.add("valid"); score++; }
    else rules.lower.classList.remove("valid");

    if(/[0-9]/.test(v)){ rules.num.classList.add("valid"); score++; }
    else rules.num.classList.remove("valid");

    if(/[^A-Za-z0-9]/.test(v)){ rules.sym.classList.add("valid"); score++; }
    else rules.sym.classList.remove("valid");

    bar.style.width=(score*20)+"%";

    bar.style.background=
        score<=2?"#ef4444":
        score<=4?"#facc15":
        "#22c55e";
});