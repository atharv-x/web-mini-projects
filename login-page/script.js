const button = document.querySelector("button");

button.addEventListener("click", () => {
    const username = document.querySelector("input[type='text']").value;
    const password = document.querySelector("input[type='password']").value;

    if (username === "" || password === "") {
        alert("Please fill in all fields");
    } else if (password.length < 6) {
        alert("Password must be at least 6 characters");
    } else {
        alert(`Welcome, ${username}!`);
    }
});
