document.getElementById("waitlist-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    let data = {
        name: name,
        email: email
    };

    fetch("https://script.google.com/macros/s/AKfycbymbqgkiqxZUdBCUwRsN4t7rQpz71Rqrv6fDQpakDaeGKC4Qhw225qYK2GAvmvD2zgl/exec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) { // Periksa kesalahan HTTP (4xx atau 5xx)
            return response.json().then(err => {throw new Error(err.message || 'Kesalahan server')}); // Parse kesalahan dari JSON jika tersedia
        }
        return response.json(); // Lanjutkan jika responsnya ok
    })
    .then(result => {
        document.getElementById("response-message").innerText = result.status === "success"
            ? "Pendaftaran berhasil!"
            : "Gagal: " + result.message;
    })
    .catch(error => {
        document.getElementById("response-message").innerText = "Terjadi kesalahan: " + error.message; // Tampilkan kesalahan yang lebih spesifik
        console.error("Error:", error);
    });
});
