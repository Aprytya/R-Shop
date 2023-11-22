function login(){
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "aprytya@gmail.com" || password === "admin1234"){
        window.location.href = "file:///E:/HTML/penilaian/page/home.html";   
    }else{
        alert("Invalid username or password");
    }
    
}

document.addEventListener("DOMContentLoaded", function() {
    const hereLinks = document.querySelectorAll(".kata1 .kata2"); // Mendapatkan semua tautan "Here"
    
    hereLinks.forEach(function(link) {
      link.addEventListener("click", function(event) {
        event.preventDefault(); // Mencegah aksi bawaan dari link
        
        // Menampilkan modal login
        const loginModal = document.getElementById("loginModal");
        const modal = new bootstrap.Modal(loginModal);
        modal.show();
      });
    });
  });