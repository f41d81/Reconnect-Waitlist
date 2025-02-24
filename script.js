document.getElementById("waitlist-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    let data = {
        name: name,
        email: email
    };

    fetch("https://script.google.com/macros/s/AKfycbzoqJCkN9nOyq2-6QUOiTtrb9Oh4msR-tNuIzhBWTACHMneoLwZoBf67H0dYrsADYNb/exec", {
        method: "POST",
        mode: "cors", // Tambahkan ini agar request diterima oleh server
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        document.getElementById("response-message").innerText = result.status === "success"
            ? "Pendaftaran berhasil!"
            : "Gagal: " + result.message;
    })
    .catch(error => {
        document.getElementById("response-message").innerText = "Terjadi kesalahan.";
        console.error("Error:", error);
    });
});
