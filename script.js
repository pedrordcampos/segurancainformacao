function fazerLogin() {
    var username = document.getElementById('username');
    var password = document.getElementById('password');

    var emailCorreto = false;
    var senhaCorreta = false;

    // Verificar as credenciais
    if (username.value === 'pedro.rdcampos@hotmail.com') {
        username.disabled = true;
        document.getElementById('checkEmail').style.display = 'inline';
        document.getElementById('mensagemAcertouEmail').style.display = 'block';
        emailCorreto = true;
    }

    if (password.value === '123456') {
        password.disabled = true;
        document.getElementById('checkSenha').style.display = 'inline';
        document.getElementById('mensagemAcertouSenha').style.display = 'block';
        senhaCorreta = true;
    }

    // Redirecionar se ambos estiverem corretos
    if (emailCorreto && senhaCorreta) {
        window.location.href = 'res1.html';
        return false; // Evitar que o formulário seja enviado
    }

    return false;
}

function exibirDica1() {
    alert("Dica 1: Hum, que tal o e-mail do...");
}

function exibirDica2() {
    alert("Dica 2: E se eu usar números?");
}

setTimeout(function() {
    document.getElementById('botaoDica1').style.display = 'block';
}, 600000); // 10 minutos

setTimeout(function() {
    document.getElementById('botaoDica2').style.display = 'block';
}, 900000); // 15 minutos

var tempoRestante = 900; // 15 minutos

var cronometro = setInterval(function() {
    var minutos = Math.floor(tempoRestante / 60);
    var segundos = tempoRestante % 60;

    document.getElementById('cronometro').textContent = 
        'Tempo restante: ' + (minutos < 10 ? '0' : '') + minutos + ':' + (segundos < 10 ? '0' : '') + segundos;

    if (tempoRestante <= 0) {
        clearInterval(cronometro);
    } else {
        tempoRestante--;
    }
}, 1000);
