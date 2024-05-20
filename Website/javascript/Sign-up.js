var infoEmail=document.getElementById("Email");
var infoUsername=document.getElementById("Username");
var infoPassword=document.getElementById("Password");
var infoConfirmPassword=document.getElementById("ConfirmPassword");



function Login(){

    var pass =CheckPassword(infoConfirmPassword.value,infoPassword.value);
    var checkdp =CheckPassword(infoConfirmPassword.value,infoPassword.value);

    if(!pass){
        alert("check your password")
    }

    if(pass && checkdp){
        window.location.href="./Home.html";
    }




}

function CheckPassword(one,two){
    if(one==two)return true;
    return false;
}

function checkinDB(user,pass){
    return true;
}