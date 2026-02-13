// Part 1
document.addEventListener("DOMContentLoaded", function () {
    // Gallery elements
    const thumbnails = document.querySelectorAll(".thumb");
    const caption = document.getElementById("image-caption");

    // Form elements
    const form = document.getElementById("signup-form");
    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const termsCheckbox = document.getElementById("terms");

    // Error message spans
    const usernameError = document.getElementById("error-username");
    const emailError = document.getElementById("error-email");
    const passwordError = document.getElementById("error-password");
    const termsError = document.getElementById("error-terms");

    // Console check
    console.log("DOM is ready");
    console.log(thumbnails, form);
});


// Part 2
function setBackground(e) {
    if (e.type == "focus") {
        e.target.style.backgroundColor = "#fffae0";
    }
    else if (e.type == "blur") {
        e.target.style.backgroundColor = "white";
    }
}
document.addEventListener("DOMContentLoaded", function () {
    // Select all required inputs with ONE combined selector
    const inputs = document.querySelectorAll("#username, #email, #password");
    for (let i of inputs) {
        i.addEventListener("focus", setBackground);
        i.addEventListener("blur", setBackground);
    }
});


// Part 3
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signup-form");

    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const terms = document.getElementById("terms");

    const usernameError = document.getElementById("error-username");
    const emailError = document.getElementById("error-email");
    const passwordError = document.getElementById("error-password");
    const termsError = document.getElementById("error-terms");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // stop page reload

        let isValid = true;

        // Username validation
        if (username.value.trim() === "") {
            usernameError.textContent = "Username is required";
            usernameError.style.display = "block";
            username.classList.add("error-border");
            isValid = false;
        } else {
            usernameError.textContent = "";
            usernameError.style.display = "none";
            username.classList.remove("error-border");
        }

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (
            email.value.trim() === "" || !emailPattern.test(email.value)
        ) {
            emailError.textContent = "Enter a valid email address";
            emailError.style.display = "block";
            email.classList.add("error-border");
            isValid = false;
        } else {
            emailError.textContent = "";
            emailError.style.display = "none";
            email.classList.remove("error-border");
        }

        // Password validation
        if (password.value.length < 8) {
            passwordError.textContent = "Password must be at least 8 characters";
            passwordError.style.display = "block";
            password.classList.add("error-border");
            isValid = false;
        } else {
            passwordError.textContent = "";
            passwordError.style.display = "none";
            password.classList.remove("error-border");
        }

        // Terms checkbox validation
        if (!terms.checked) {
            termsError.textContent = "You must accept the terms";
            termsError.style.display = "block";
            terms.classList.add("error-border");
            isValid = false;
        } else {
            termsError.textContent = "";
            termsError.style.display = "none";
            terms.classList.remove("error-border");
        }

        // Success
        if (isValid) {
            alert("Registration successful!");
            form.reset();
        }
    });
});

// Part 4B
const tiles = document.querySelectorAll(".thumb");
const captionEl = document.getElementById("image-caption");

tiles.forEach(function (tile) {
    tile.addEventListener("click", function () {
        for (let i = 0; i < tiles.length; i++) {
            if (tiles[i] === this) { // selected file
                tiles[i].classList.add("expanded");
                const cityName = tiles[i].dataset.city;
                captionEl.textContent = "You selected: " + cityName;
            } else {
                tiles[i].classList.remove("expanded");
            }
        }
    });

    // Keyboard support (Enter key)
    tile.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            for (let i = 0; i < tiles.length; i++) {
                if (tiles[i] === this) {
                    tiles[i].classList.add("expanded");

                    const cityName = tiles[i].dataset.city;
                    captionEl.textContent = "You selected: " + cityName;
                } else {
                    tiles[i].classList.remove("expanded");
                }
            }
        }
    });
});