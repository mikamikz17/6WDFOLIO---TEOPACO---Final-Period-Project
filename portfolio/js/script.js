// Dark mode toggle
const toggle = document.getElementById("theme-toggle");

if (toggle) {
toggle.addEventListener("click", () => {
document.body.classList.toggle("dark");
});
}

// Contact form validation
const form = document.getElementById("contact-form");

if (form) {
form.addEventListener("submit", function(e) {
e.preventDefault();
alert("Message sent successfully!");
form.reset();
});
}