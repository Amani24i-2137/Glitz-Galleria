document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    alert("Account created successfully");
    console.log("Account created successfully");

    window.location.href = "home.html"; 
});