
function showPassword(){
    var showpass=document.getElementById("EnterPassword");
    var showicon=document.getElementById("ShowIcon");
    var hideicon=document.getElementById("HideIcon");
    if(showpass.type=="password"){
        showpass.type="text";
        showicon.style.display="none";
        hideicon.style.display="flex"
    }
    else{
        showpass.type="password";
        showicon.style.display="flex";
        hideicon.style.display="none";
    }
}