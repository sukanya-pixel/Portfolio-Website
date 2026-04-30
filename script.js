function validateForm() {
  let email = document.querySelector("input[name='email']").value;

  if (!email.includes("@")) {
    alert("Please enter a valid email");
    return false;
  }
  return true;
}