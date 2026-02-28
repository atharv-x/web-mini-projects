const loginBtn = document.getElementById("loginBtn");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const message = document.getElementById("message");

loginBtn.addEventListener("click", () => {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (username === "" || password === "") {
        message.style.color = "#f87171";
        message.textContent = "Please fill in all fields";
        return;
    }

    if (password.length < 6) {
        message.style.color = "#facc15";
        message.textContent = "Password must be at least 6 characters";
        return;
    }

    message.style.color = "#22c55e";
    message.textContent = `Welcome, ${username}!`;
});
