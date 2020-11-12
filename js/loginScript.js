function login(){
  let loginId = prompt("Login ID ?", '');

  if (loginId == "admin") {

    let loginPass = prompt("Password ?", '');

    if (loginPass == "master") {
      alert("Welcome!");
    }else if (loginPass == null) {
      alert("Canceled");
    }else {
      alert("Wrong password");
    }
    
  }else if (loginId == null) {
    alert("Canceled");
  }else {
    alert("I don't know you");
  }
}
