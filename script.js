
const credenciais = {
    usuario: 'Ana Paula',
    senha: '1234'
}

const botao = document.getElementById('botao');
botao.addEventListener('click', () => {
    event.preventDefault()
    
    if (credenciais.usuario == 'Ana Paula' && credenciais.senha == '1234'){
        localStorage.setItem('usuario', JSON.stringify(credenciais.usuario));
        localStorage.setItem('senha', JSON.stringify(credenciais.senha));
        window.location.href = "login.html";
    }else{
        localStorage.getItem('usuario', JSON.stringify(credenciais.usuario));
        localStorage.getItem('senha', JSON.stringify(credenciais.senha));
        window.location.href = "logout.html";
    }
})