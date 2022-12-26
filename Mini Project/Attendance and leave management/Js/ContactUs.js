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
    let username = document.getElementById("username") 
    let mobile = document.getElementById("mobile") 
    let subject = document.getElementById("subject") 
    let msg = document.getElementById("msg") 
    let email = document.getElementById("email") 
  
    var flag = true
    clearerrors()
   
    if (username.value == "") {
      document.getElementById("nameError").innerHTML = "Name is empty"
      flag = false
    } else if (username.value.length < 4) {
      document.getElementById("nameError").innerHTML = "Name is too small"
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
    
    if (subject.value == "") {
        document.getElementById("subError").innerHTML = "Subject is empty"
        flag = false
      } else if (subject.value.length < 4) {
        document.getElementById("subError").innerHTML = "Subject is too small"
        flag = false
      } 

      if (msg.value == "") {
        document.getElementById("msgError").innerHTML = "Message is empty"
        flag = false
      } else if (msg.value.length < 10) {
        document.getElementById("msgError").innerHTML = "Message is too small"
        flag = false
      } 
   
    return flag
}
  