function validarCampo(){
    let email = document.getElementById("email").valeu;
    let senha =document.getElementById("senha").valeu;
    let confimar = document.getElementById("confimar").valeu;
    let mensagem = document.getElementById("mensagem");

    if(email === "" || senha === "" || confimar === ""){
        mensagem.textContent = "Preencha todos os campos!"
        mensagem.style.color = "red"
        return
    }
 
    if( senha !== confimar ){
        mensagem.textContent = "Todas as senhas devem ser iguais"
        mensagem.style.color = "red"
        return
    }

    //tudo passou conforme o esperado
    mensagem.textContent = "Cadastrado com sucesso"
    mensagem.style.color = "green"

}
