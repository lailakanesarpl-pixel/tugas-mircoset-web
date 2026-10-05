const form = document.getElementById("biodataForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value;
    const alamat = document.getElementById("alamat").value;
    const jurusan = document.getElementById("jurusan").value;
    const jenisKelamin = document.querySelector(
        'input[name="jenisKelamin"]:checked'
    );
    const tinggi = document.getElementById("tinggi").value;
    const berat = document.getElementById("berat").value;
    const hobi = document.getElementById("hobi").value;
    const nohp = document.getElementById("nohp").value;

    if (
        nama === "" ||
        alamat === "" ||
        jurusan === "" ||
        !jenisKelamin ||
        tinggi === "" ||
        berat === "" ||
        hobi === "" ||
        nohp === ""
    ) {
        alert("Silakan lengkapi semua data!");
        return;
    }

    alert(
        "Data berhasil disimpan!\n\n" +
        "Nama: " + nama + "\n" +
        "Alamat: " + alamat + "\n" +
        "Jurusan: " + jurusan + "\n" +
        "Jenis Kelamin: " + jenisKelamin.value + "\n" +
        "Tinggi: " + tinggi + " cm\n" +
        "Berat: " + berat + " kg\n" +
        "Hobi: " + hobi + "\n" +
        "No. HP: " + nohp
    );
});