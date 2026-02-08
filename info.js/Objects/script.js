/*Este é um exercicio para praticar o uso de objetos em javascript.
  Neste caso,os dados do usuario serão armazenados em um objeto userData e depois chamados em uma função para exibir*/

let res = document.getElementById('res');
let btSub = document.getElementById('btSub');

//MOSTRAR ESSES VALORES EM UM PARAGRAFO
function showData(event){
  event.preventDefault();
  //PEGAR OS VALORES DO FORMULÁRIO
  let inName = document.querySelector('#inName').value;
  let inAge = document.querySelector('#inAge').value;
  let inCPF = document.querySelector('#inCPF').value;
  let inTel = document.querySelector('#inTel').value;
  let inEmail = document.querySelector('#inEmail').value;
  let inPass = document.querySelector('#inPass').value;


  //PASSAR OS VALORES PARA UM OBJETO
  let userData = {
    name : inName,
    age : inAge,
    cpf : inCPF,
    tel : inTel,
    email : inEmail,
    pass : inPass
  }
  
  res.innerText = `Seu nome é ${userData.name},vc tem ${userData.age} anos de idade,seu CPF é ${userData.cpf},seu numero de telefone é ${userData.tel},seu email é ${userData.email} e sua senha é ${userData.pass}` 
}

btSub.addEventListener('click',showData);

