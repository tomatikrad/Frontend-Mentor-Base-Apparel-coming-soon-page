const submit = document.querySelector(".btn-submit"),
  email = document.querySelector("#email"),
  errImg = document.querySelector(".error-img"),
  msg = document.querySelector(".status-msg");

let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

submit.addEventListener("click", () => {
  if (!email.value.match(pattern)) {
    errImg.style.display = "block";
    email.classList.add("invalid");
    msg.innerText = "Please provide a valid email";
  } else {
    errImg.style.display = "none";
    email.classList.remove("invalid");
    msg.innerText = "";
  }
});
