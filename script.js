
document.getElementById("nama").textContent = "Nama: John Doe";
document.getElementById("tentang").textContent = "Saya adalah seorang web developer yang sedang belajar JavaScript dan ingin membuat portofolio pribadi.";
const kontak = ["Email: johndoe@example.com", "Telepon: 0812-3456-7890"];
const ul = document.getElementById("kontak");
kontak.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
});
