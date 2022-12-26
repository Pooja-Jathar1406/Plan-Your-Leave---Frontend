function clearerrors() {
    errors = document.getElementsByClassName("error")
    for (let item of errors) {
      item.innerHTML = ""
    }
  }
  
   
  
  function validateForm() {
    var username = document.getElementById("username") 
    var password = document.getElementById("password")
    var flag = true
    clearerrors()
  
    //First name validation
    if (username.value == "") {
      document.getElementById("nameError").innerHTML = "Name is empty"
      flag = false
    }else if (username.value.length < 3) {
      document.getElementById("nameError").innerHTML = "First name is too small"
      flag = false
    }else if (username.value.length > 12) {
      document.getElementById("nameError").innerHTML = "First name is too long"
      flag = false
    }  
    //password validation
    if (password.value.length < 6) {
      document.getElementById("passError").innerHTML = "Password is too short"
      flag = false
    }
   
    //
    return flag
  }
  