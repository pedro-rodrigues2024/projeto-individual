function cadastrar(){
  var email = input_email.value;
  var username = input_username.value;
  var senha1 = input_senha1.value;
  var senha2 = input_senha2.value;
  var escolhaPokemon = escolhaPokemon.value;

  if(username === '' || email === '' || senha1 === '' || senha2 === '' || escolhaPokemon === 'op0') {
      alert("Preencha todos os campos corretamente, incluindo a escolha do Pokémon favorito");
  } else {
      if(senha1 !== senha2){
          alert("As senhas não correspondem!");
      } else {
          div_mensagem.innerHTML = "Perfeito, seja bem-vindo à nossa comunidade!";
      }
  }
}