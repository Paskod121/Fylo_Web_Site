document.querySelector(".cta button").addEventListener("click", function(event) {
    const emailInput = document.querySelector(".cta input");
    const emailValue = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex pour valider un email

    if (!emailPattern.test(emailValue)) {
        event.preventDefault(); // Empêche l'envoi
        alert("Veuillez entrer une adresse email valide.");
    } else {
        alert("Email valide ! Merci de vous être inscrit.");
    }
});

const emailInput = document.querySelector(".cta input");
const submitButton = document.querySelector(".cta button");

submitButton.addEventListener("click", (event) => {
    const errorMessage = document.querySelector(".error-message");
    if (!errorMessage) {
        const emailValue = emailInput.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailValue)) {
            event.preventDefault();
            const error = document.createElement("p");
            error.className = "error-message";
            error.style.color = "red";
            error.textContent = "Veuillez entrer une adresse email valide.";
            emailInput.parentElement.appendChild(error);
        }
    }
});

const inputField = document.querySelector(".cta input");

inputField.addEventListener("focus", () => {
    inputField.style.transition = "0.3s";
    inputField.style.border = "2px solid blue";
});

inputField.addEventListener("blur", () => {
    inputField.style.border = "1px solid gray";
});

document.querySelector(".cta button").addEventListener("click", function(event) {
    event.preventDefault();
    const emailValue = document.querySelector(".cta input").value.trim();

    if (emailValue) {
        fetch("https://example.com/submit", { // URL du serveur à remplacer
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: emailValue })
        })
        .then(response => response.json())
        .then(data => {
            alert("Inscription réussie ! Merci !");
        })
        .catch(error => {
            console.error("Erreur :", error);
        });
    }
});
