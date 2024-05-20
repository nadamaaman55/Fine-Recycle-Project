var Username=document.getElementById("UserName")
var Password=document.getElementById("Password")






function Login(){

    if( IsTamam(UserName.value,Password.value)){
        window.location.href="./Home.html";
    }else
      alert("Check Your UserName and Password");

    
}


function IsTamam(UserName,Password){
    if(UserName=="nada" && Password=="123")
        return true;
    else 
    return false;
}