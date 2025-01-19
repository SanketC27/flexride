document.getElementById("Login").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Sample usernames and passwords
    /*const users = [
        { username: "user1@example.com", password: "password123" },
        { username: "user2@example.com", password: "securepassword" },
        { username: "user3@example.com", password: "password456" }
    ];
    */

    // Get the entered email and password
    const enteredEmail = document.getElementById("email").value;
    const enteredPassword = document.getElementById("password").value;

    // Check if the entered credentials match any user in the list
    const isAuthenticated = users.some(user => 
        user.username === enteredEmail && user.password === enteredPassword
    );

    if (isAuthenticated) {
        // Redirect to home page
        window.location.href = "index.html"; // Replace 'home.html' with the actual home page URL
    } else {
        // Show an error prompt
        alert("Invalid email or password. Please try again.");
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

function customerSignUp(e){
    e.preventDefault();
    window.location.href="Login.html";
}
