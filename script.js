// ================= DATA PROJECT =================

const projects = [

    {
        title: "Website Biodata",

        description:
            "Website biodata sederhana menggunakan HTML dan CSS.",

        code:
`<!DOCTYPE html>
<html>
<head>
    <title>Biodata</title>
</head>

<body>

    <h1>Biodata Saya</h1>

    <p>Nama: Nama Kamu</p>
    <p>Kelas: XI RPL</p>
    <p>Sekolah: SMK</p>

</body>
</html>`
    },


    {
        title: "Website Profil",

        description:
            "Website profil pribadi menggunakan HTML, CSS dan JavaScript.",

        code:
`<!DOCTYPE html>
<html>

<head>
    <title>Profil Saya</title>

    <link rel="stylesheet"
          href="style.css">
</head>

<body>

    <h1>Profil Saya</h1>

    <p>Junior Web Developer</p>

    <button onclick="hello()">
        Klik Saya
    </button>

    <script src="script.js"></script>

</body>

</html>`
    },


    {
        title: "Kalkulator",

        description:
            "Kalkulator sederhana menggunakan HTML, CSS dan JavaScript.",

        code:
`function tambah() {

    let angka1 =
        Number(document.getElementById("angka1").value);

    let angka2 =
        Number(document.getElementById("angka2").value);

    let hasil = angka1 + angka2;

    document.getElementById("hasil")
        .innerHTML = hasil;
}`
    },


    {
        title: "Project Website Saya",

        description:
            "Project website lainnya yang saya buat.",

        code:
`// Tulis codingan project kamu
// di bagian ini.

console.log("Hello World!");`
    }

];


// ================= OPEN PROJECT =================

function openProject(index) {

    const project = projects[index];

    document.getElementById("modalTitle")
        .textContent = project.title;

    document.getElementById("modalDescription")
        .textContent = project.description;

    document.getElementById("projectCode")
        .textContent = project.code;

    document.getElementById("projectModal")
        .style.display = "block";

    document.body.style.overflow = "hidden";
}


// ================= CLOSE PROJECT =================

function closeProject() {

    document.getElementById("projectModal")
        .style.display = "none";

    document.body.style.overflow = "auto";
}


// ================= CLOSE KETIKA KLIK LUAR =================

window.onclick = function(event) {

    const modal =
        document.getElementById("projectModal");

    if (event.target === modal) {

        closeProject();

    }

};


// ================= TOMBOL ESC =================

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeProject();

    }

});