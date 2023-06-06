function verifyToken() {
    var digitInputs = document.getElementsByClassName('digit-input');
    var token = '';
  
    for (var i = 0; i < digitInputs.length; i++) {
      var digit = digitInputs[i].value;
      token += digit;
    }
  
    if (token.length !== 5) {
      alert('O token deve conter 5 dígitos.');
      return;
    }
  
    // Aqui você pode adicionar a lógica para verificar se o token está correto.
    // Por enquanto, vamos apenas exibir um alerta.
  
    if (token === '12345') { // Token de exemplo
      alert('Token correto!');
    } else {
      alert('Token incorreto.');
    }
  }
  