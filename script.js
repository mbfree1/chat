function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "panda" && password === "Esita") {
    window.location.href = "chat.html";
  } else {
    alert("Incorrect username or password!");
  }
}
