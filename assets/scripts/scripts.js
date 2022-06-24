let nome = document.getElementById('nome')
let email = document.getElementById('email')
let assunto = document.getElementById('assunto')

function enviar(){
    if(nome.value == "" || email.value == "" || assunto.value == ""){
        alert("Todos os campos são obrigatórios")
        return false
    }else{
        alert(nome.value + ", seu formulário foi enviado")
        return true
    }
}