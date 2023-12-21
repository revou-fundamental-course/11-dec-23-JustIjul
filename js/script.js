function validateForm() {
  const nama = document.forms["message-form"]["nama"].value;
  const tanggalLahir = document.forms["message-form"]["tanggal-lahir"].value;
  const jenisKelamin = document.forms["message-form"]["jenis-kelamin"].value;
  const pesan = document.forms["message-form"]["pesan"].value;

  if (nama == "" || tanggalLahir == "" || jenisKelamin == "" || pesan == "") {
    alert("Tidak boleh ada yang kosong!");
    return false;
  }
  setSender(nama, tanggalLahir, jenisKelamin, pesan);
  return false;
}

function setSender(nama, tanggalLahir, jenisKelamin, pesan) {
  document.getElementById("sender-nama").innerHTML = nama;
  document.getElementById("sender-tanggal-lahir").innerHTML = tanggalLahir;
  document.getElementById("sender-jenis-kelamin").innerHTML = jenisKelamin;
  document.getElementById("sender-pesan").innerHTML = pesan;
}

let namaUser = prompt(
  "Silahkan isi nama anda untuk pengalaman yang lebih baik"
);

document.getElementById("nama-user").innerHTML = namaUser;
