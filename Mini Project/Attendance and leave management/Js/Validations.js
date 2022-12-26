function clearerrors() {
    errors = document.getElementsByClassName("error")
    for (let item of errors) {
      item.innerHTML = ""
    }
  }
  
  function validatePhone(input_str) {
    var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/
    return re.test(input_str)
  } 
  
  function validateForm() {
    let fname = document.getElementById("fname") 
    let lname = document.getElementById("lname") 
    let empid = document.getElementById("empid") 
    let mobile = document.getElementById("mobile")
    let password = document.getElementById("password")
    let cpassword = document.getElementById("cpassword")
    let email = document.getElementById("email") 
  
    var flag = true
    clearerrors()
   
    if (fname.value == "") {
      document.getElementById("fnameError").innerHTML = "First name is empty"
      flag = false
    } else if (fname.value.length < 4) {
      document.getElementById("fnameError").innerHTML = "First name is too small"
      flag = false
    } 

    if (lname.value == "") {
      document.getElementById("lnameError").innerHTML = "Last name is empty"
      flag = false
    } else if (lname.value.length < 4) {
      document.getElementById("lnameError").innerHTML = "Last name is too small"
      flag = false
    } 

    if (empid.value == "") {
      document.getElementById("empError").innerHTML = "Employee id is empty"
      flag = false
    }
    
    if (email.value == "") {
      document.getElementById("emailError").innerHTML = "Email is empty"
      flag = false
    } 

    if (!validatePhone(mobile.value)) {
      document.getElementById("mobileError").innerHTML = "Invalid mobile Number"
      flag = false
    }
   
    if (password.value.length < 6) {
      document.getElementById("passError").innerHTML = "Password is too short"
      flag = false
    }
  
    if (cpassword.value !== password.value) {
      document.getElementById("cpassError").innerHTML = "Password does not match"
      flag = false
    }
   
    return flag
  }
  