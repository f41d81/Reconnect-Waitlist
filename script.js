document.getElementById("waitlist-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    let data = {
        name: name,
        email: email
    };

    fetch("https://script.google.com/macros/s/AKfycby7_k7VYcYsgLq2JalaAuAtidw81uk3GzIbOslJ0qrO4_Nbn0OgN0YHsQTV9rT9UfXw/exec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
  .then(response => {
        if (!response.ok) {
            return response.json().then(err => {throw new Error(err.message || 'Kesalahan server')});
        }
        return response.json();
    })
  .then(result => {
        document.getElementById("response-message").innerText = result.status === "success"
          ? "Pendaftaran berhasil!"
          : "Gagal: " + result.message;
    })
  .catch(error => {
        document.getElementById("response-message").innerText = "Terjadi kesalahan: " + error.message;
        console.error("Error:", error);
    });
});
