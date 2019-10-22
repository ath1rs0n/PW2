function validarNome(){
if(document.getElementById("nome").value == ""){
    document.getElementById("nomeErro").innerHTML = "vazio!";
    return false;
}
if(document.getElementById("nome").value.length < 3){
    document.getElementById("nomeErro").innerHTML = "Minimo 3 caracteres";
    return false;
}else{ 
    nomeErro.innerHTML = ""
}
return true;
}

function validarEmail(){
    if(document.getElementById("email").value.indexOf('@') == -1 || document.getElementById("email").value.indexOf('.') == -1){
        document.getElementById("erroEmail").innerHTML = "insira o email corretamente!";
        return false;
    }
    else{ 
        erroEmail.innerHTML = ""
    }
    return true;
}


function validarSenha(){
    var password = document.getElementById("password").value;
    var passwordErro = document.getElementById("passwordErro")
    if(password == "" || password.length < 8){
        passwordErro.innerHTML = "Senha invalida"
        return false;
  }
  else{
    passwordErro.innerHTML = "";
    return true;
}
}

function validarRepeticaoSenha(){
    var password = document.getElementById("password").value;
    var repPassword = document.getElementById("repPassword").value	
    var repPasswordErro = document.getElementById("repPasswordErro");
   
   
    if(repPassword != password){
        repPasswordErro.innerHTML = "Repetição invalida";
        return false;
    }else{
        repPasswordErro.innerHTML = "";
        return true;
    }
}

function verificarTudo(){
return validarSenha() && validarRepeticaoSenha() && validarEmail() && validarNome(); 

}