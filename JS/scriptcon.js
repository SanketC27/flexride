document.addEventListener('DOMContentLoaded', function() {
    const adminDetails = {
        name: "ANUSHKA SAMANTA",
        phone: "123-456-7890",
        email: "admin@example.com"
    };

    document.getElementById('adminname').textContent = adminDetails.name;
    document.getElementById('adminPhone').textContent = adminDetails.phone;
    document.getElementById('adminEmail').textContent = adminDetails.email;
});
