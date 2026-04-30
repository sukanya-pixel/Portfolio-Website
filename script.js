function validateForm() {
  let email = document.querySelector("input[name='email']").value;

  if (!email.includes("@")) {
    alert("Enter valid email");
    return false;
  }
  return true;
}

function scrollToContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}