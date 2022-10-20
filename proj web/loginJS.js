function logar() {
    
    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;

    if(login == "admin" && senha =="admin123"){
        location.href = "loja.html";
    }else{
        alert("Usuario ou senha incorretos");
    }
}
