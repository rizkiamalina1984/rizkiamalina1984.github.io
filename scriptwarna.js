document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const navbar = document.querySelector('.navbar');
    const button = document.querySelector('.button');

    // Cek apakah mode gelap telah disimpan di local storage
    const isDarkMode = localStorage.getItem('dark-mode') === 'enabled';

    // Atur mode gelap atau terang saat halaman dimuat
    if (isDarkMode) {
        body.classList.add('dark-mode');
        navbar.classList.add('dark-mode');
        button.classList.add('dark-mode');
        button.textContent = 'Light Mode'; // Ubah teks tombol jika mode gelap aktif
    } else {
        body.classList.remove('dark-mode');
        navbar.classList.remove('dark-mode');
        button.classList.remove('dark-mode');
        button.textContent = 'Dark Mode'; // Atur teks tombol jika mode gelap nonaktif
    }

    // Togel mode gelap saat tombol atau elemen lain diklik
    document.getElementById('toggle-dark-mode').addEventListener('click', function () {
        body.classList.toggle('dark-mode');
        navbar.classList.toggle('dark-mode');
        button.classList.toggle('dark-mode');

        // Simpan status mode gelap di local storage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('dark-mode', 'enabled');
            button.textContent = 'Light Mode'; // Ubah teks tombol jika mode gelap aktif
        } else {
            localStorage.setItem('dark-mode', 'disabled');
            button.textContent = 'Dark Mode'; // Atur teks tombol jika mode gelap nonaktif
        }
    });
});
