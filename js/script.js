document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    function updateTime() {
        const now = new Date();
        const formatted = now.toUTCString();
        document.getElementById("currentTime").textContent = formatted;
    }

    updateTime(); // Update saat halaman dimuat

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nama = document.getElementById("nama").value;
        const tanggal = document.getElementById("tanggal").value;
        const pesan = document.getElementById("pesan").value;
        const gender = form.querySelector("input[name='gender']:checked").value;

        document.getElementById("outNama").textContent = nama;
        document.getElementById("outTanggal").textContent = tanggal;
        document.getElementById("outGender").textContent = gender;
        document.getElementById("outPesan").textContent = pesan;
    });
});
