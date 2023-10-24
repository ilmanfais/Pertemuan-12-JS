function DaftarMHS() {
    let formLogin = document.getElementById("login");
    let nama = formLogin.elements.nama;
    let jurusan = formLogin.elements.jurusan;
    let asal = formLogin.elements.asal;

    let valueNama = nama.value;
    let valueJurusan = jurusan.value;
    let valueAsal = asal.value;

    if (valueNama && valueJurusan && valueAsal) {
        console.log("Nama Anda : " + valueNama)
        console.log("Jurusan Anda : " + valueJurusan)
        console.log("Asal Anda : " + valueAsal)
    } else {
        console.log("Silakan isi semua kolom form");
    }
}

let btnSimpan = document.getElementById("simpan");
btnSimpan.addEventListener("click", DaftarMHS);

// let form = document.forms.form_coba;
// let element1 = form.elements.element_1;
// let element2 = form.elements.element_2;
// let button = form.elements.element_button;


// button.addEventListener("click", function(){
//     let hasil = parseFloat(element1.value) + parseFloat(element2.value)
//     alert(hasil)
// })

// let nama_mhs = [
//     'Rio',
//     'Abil',
//     'Haeril',
//     'Aryadi'
// ]

// let asal_mhs = [
//     'Afrika',
//     'Jamaika',
//     'Israel',
//     'Gaza'
// ]

// function pendaftaran_mhs(nama, asal){
//     console.log(nama);
//     console.log(asal);
// }

// for(i=0 ; i<4 ; i++){
//     pendaftaran_mhs(nama_mhs[i], asal_mhs[i])
// }

// let mhs = document.forms.form_mhs
// let nama1 = mhs.elements.nama
// let element2 = mhs.elements.element_2
// let button = mhs.elements.element_button

// // function jumlah(input1, input2) {
// //     let hasil = parseFloat(input1) + parseFloat(input2)
// //     alert(hasil)
// // }

// button.addEventListener("click", function() {
//     let hasil = parseFloat(element1.value) + parseFloat(element2.value)
//     alert(hasil)
// })
// alert(element1.value)
// alert(element2.value)

// 
// function salam() {
//     alert("Selamat Pagi")
// }


// function jumlah() {
//     let hasil = 12 + 12
//     return hasil
// }

// let f1 = salam()
// let f2 = jumlah()

// console.log(f1);
// console.log(f2);


// document.addEventListener("DOMContentLoaded", function () {
//     const mahasantriForm = document.getElementById("mahasantriForm");
//     const hasilPendaftaran = document.getElementById("hasilPendaftaran");

//     mahasantriForm.addEventListener("submit", function (e) {
//         e.preventDefault();

//         const nama = document.getElementById("nama").value;
//         const nim = document.getElementById("nim").value;
//         const prodi = document.getElementById("prodi").value;

//         const pendaftaranInfo = `Nama: ${nama}<br>NIM: ${nim}<br>Program Studi: ${prodi}`;

//         hasilPendaftaran.innerHTML = pendaftaranInfo;
//     });
// });