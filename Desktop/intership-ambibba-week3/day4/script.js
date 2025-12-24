function toggle(){
  const p=document.getElementById("password");
  p.type=p.type==="password"?"text":"password";
}

function validate(){
  let ok=true;

  const name=document.getElementById("name");
  const email=document.getElementById("email");
  const pass=document.getElementById("password");

  nameErr.style.display=emailErr.style.display=passErr.style.display="none";

  if(name.value.length<3){nameErr.style.display="block";ok=false;}
  if(!/^[^ ]+@[^ ]+\.[a-z]{2,}$/.test(email.value)){emailErr.style.display="block";ok=false;}
  if(!/(?=.*[A-Z])(?=.*\d).{8,}/.test(pass.value)){passErr.style.display="block";ok=false;}

  if(ok){
    alert("Account Created Successfully");
    name.value=email.value=pass.value="";
  }
}