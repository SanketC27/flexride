// JavaScript Code

document.getElementById("Login").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting
 
    // Sample user data for both Customer and Admin
   const users = [
        { username: "user1@example.com", password: "123", type: "customer" },
        { username: "admin1@example.com", password: "1234", type: "admin" }
    ];
 
    // Get the entered email, password, and user type
    const enteredEmail = document.getElementById("email").value;
    const enteredPassword = document.getElementById("password").value;
    const userType = document.getElementById("user-type").value;
 
    // Check if the entered credentials match any user in the list
    const isAuthenticated = users.some(user =>
        user.username === enteredEmail &&
        user.password === enteredPassword &&
        user.type === userType
    );
 
    if (isAuthenticated) {
        // Redirect based on user type
        if (userType === "customer") {
            window.location.href = "customerdashboard.html"; // Replace with actual Customer page URL
        } else if (userType === "admin") {
            window.location.href = "dashboard.html"; // Replace with actual Admin page URL
        }
    } else {
        // Show an error prompt
        alert("Invalid email, password, or user type. Please try again.");
    }
});
 
// Function to toggle password visibility
function myFunction() {
    const passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}
// Attach event listener to the login button

