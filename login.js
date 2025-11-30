document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    alert("Successful login");
    console.log("Successful login");

    window.location.href = "home.html";
});
