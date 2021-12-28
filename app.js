var modal = document.getElementById('container');

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

function Cancel(){
    var can = document.getElementById('cancel')
    can.style.display = "none"
}

var accounts = []
var flag = true;

function signUp(){
    var mail = document.getElementById('Email')
    var pass = document.getElementById('Password')
    if(mail.value != "" && pass.value != ""){
    var credentials = {
      Email: mail.value,
      password : pass.value
    }
    accounts.push(credentials)
  }
}


function Login(){
  var loginemail = document.getElementById('loginEmail').value
  var loginpass = document.getElementById('LoginPass').value
  for(var i = 0; i < accounts.length; i++){
    if(loginemail == accounts[i].Email){
      flag = false;
      if(loginpass == accounts[i].password){
        alert('Login Successful')
        alert ('Welcome')
      }
      else{
        alert('Incorrect Password')
      }
    }
    else{
      alert('Email doesnot exist')
  }
  }
}