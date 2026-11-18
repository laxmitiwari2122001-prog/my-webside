
// Button Click Function
function showMessage() {
    alert("Welcome! Your website is working.");
}

// Contact Form
document.getElementById("contactForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    alert("Thank you " + name + "! Your form has been submitted.");

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    document.getElementById("contactForm").reset();
});
