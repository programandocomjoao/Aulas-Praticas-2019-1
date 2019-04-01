function validarNome(nome) {
	if (nome == "") {
		window.alert("O campo nome não pode estar vazio!");
		window.setTimeout(_=> document.getElementById('nome').focus(), 0);
	}
	else if (nome.length <= 10) {
		window.alert("O campo nome deve ter mais de 10 caracteres!");
		window.setTimeout(_=> document.getElementById('nome').focus(), 0);	
	}
}

function validarSenha(senha) {
	var email = document.getElementById('email').value;
	var usuario = email.substring(0, email.indexOf('@'))

	if (senha.length < 4) {
		window.alert("O campo senha deve ter 4 ou mais caracteres!");
		window.setTimeout(_=> document.getElementById('senha').focus(), 0);
	}
	else if (senha == usuario) {
		window.alert("O campo senha não pode ser igual ao usuário do e-mail!");
		window.setTimeout(_=> document.getElementById('senha').focus(), 0);
	}
}

function enviarDados() {
	var senha = document.getElementById('senha').value;
	var confsenha = document.getElementById('confsenha').value;

	if (senha == confsenha)
		document.getElementById('frm').submit();
	else
		window.alert("As senhas informadas são diferentes!");
}