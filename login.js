const accounts = [
  {
    name: "pedro",
    password: "123",
    accounts: [
      {
        name: "debito",
        balance: 800
      },
      {
        name: "credita",
        balance: 200
      }
    ]
  },
  {

  }
  // crea mas usuarios
];

function login(form) {
  // guarda en variables los campos de usuario y contrasena
  const userField = form.u.value;
  const password = form.c.value;
  // recorrer la lista de usuarios

  user = accounts.find((account) =>
    account.name === userField &&
    account.password === password
  )

  if (!user) {
    alert("error de password");
    return;
  }

  form.style.display = "none"
  document.querySelector(".cuenta").style.display = "block";
  document.querySelector("#c1").value = user.accounts[0].balance;
  document.querySelector("#c2").value = user.accounts[1].balance;
  console.log(document.querySelector("#c1").value)
  console.log(user.accounts[0].balance)


  //location = "principal.html";

  /*
  leer:
  - localstorage, para almacenar la lista de usuarios
  - como mandar un param en la url en location
  - en ves de usar varios archivos html, uses uno unico,
  */

}

function formula() {
  var CantidadT = parseInt(document.getElementById('cant').value);
  var cantidad1 = parseInt(document.getElementById('c1').value);
  var cantidad2 = parseInt(document.getElementById('c2').value);
  document.getElementById('c1').value = (cantidad1 - CantidadT)
  document.getElementById('c2').value = (cantidad2 + CantidadT)
}
function formula2() {
  var CantidadT = parseInt(document.getElementById('cant').value);
  var cantidad1 = parseInt(document.getElementById('c1').value);
  var cantidad2 = parseInt(document.getElementById('c2').value);
  document.getElementById('c1').value = (cantidad1 + CantidadT)
  document.getElementById('c2').value = (cantidad2 - CantidadT)
}
function formula3() {
  var CantidadT = parseInt(document.getElementById('cant').value);
  var cantidad1 = parseInt(document.getElementById('c1').value);
  var cantidad2 = parseInt(document.getElementById('c2').value);
  document.getElementById('c1').value = (cantidad1 + CantidadT)
}
function formula4() {
  var CantidadT = parseInt(document.getElementById('cant').value);
  var cantidad1 = parseInt(document.getElementById('c1').value);
  var cantidad2 = parseInt(document.getElementById('c2').value);
  document.getElementById('c2').value = (cantidad2 + CantidadT)
}
function formula5() {
  var CantidadT = parseInt(document.getElementById('cant').value);
  var cantidad1 = parseInt(document.getElementById('c1').value);
  var cantidad2 = parseInt(document.getElementById('c2').value);
  document.getElementById('c1').value = (cantidad1 - CantidadT)
}
function formula6() {
  var CantidadT = parseInt(document.getElementById('cant').value);
  var cantidad1 = parseInt(document.getElementById('c1').value);
  var cantidad2 = parseInt(document.getElementById('c2').value);
  document.getElementById('c2').value = (cantidad2 - CantidadT)
}
