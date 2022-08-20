function login(){
    var uname = document.getElementById("user").value;
    var pword = document.getElementById("passw").value;

    if(uname != "admin"){
        alert("Usuario no valido!!");
    }
    else if(pword != "admin"){
        alert("Contraseña no valida!!");
    }
    else{
        window.location.href="secciones/inicio.html";
    }
}