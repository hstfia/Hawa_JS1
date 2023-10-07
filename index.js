// if, else, nested if
const suhu=60;

if(suhu >= -100 && suhu <=0){
    console.log('beku');
}else if(suhu  > 0 && suhu <= 50){
    console.log('cair');
}else if(suhu > 50 && suhu <=100){
    console.log('tidak beku')
}


// switch case
var IPK=70;
var hasil;
switch (true) {
    case (IPK >= 90):
        hasil = "A";
        break;
    case (IPK >= 80):
        hasil = "B";
        break;
    case (IPK >= 70):
        hasil = "C";
        break;
    case (IPK >= 60):
        hasil = "D";
        break;
    default:
        hasil = "E";
}
console.log("Nilai Anda: " + IPK);
console.log("IPK Anda: " + hasil);


// for statement
for (var angka = 2; angka <= 20; angka++) {
    var prima = true;

    for (var pembagi = 2; pembagi < angka; pembagi++) {
        if (angka % pembagi === 0) {
            prima = false;
            break;
        }
    }

    if (prima) {
        console.log(angka);
    }
}


// while
var orang = [
    { nama: "Wawa", status: "belum menikah" },
    { nama: "Aya", status: "menikah" },
    { nama: "Yati", status: "belum menikah" },
    { nama: "Okta", status: "menikah" },
    { nama: "Ais", status: "belum menikah" },
];

var i = 0;

while (i < orang.length) {
    console.log(orang[i].nama + " memiliki status " + orang[i].status);

    if (Math.random() < 0.5) {
        orang[i].status = "menikah";
    } else {
        orang[i].status = "belum menikah";
    }

    console.log("Status " + orang[i].nama + " telah diubah menjadi " + orang[i].status);

    i++;
}


// do while
const prompt=require("prompt-sync")({sigint:true}); 
var cekUmur;

do {
  let inputUmur = prompt("Masukkan umur Anda:");
  umur = parseInt(inputUmur); 
  
  if (isNaN(umur) || umur <= 0) {
    alert("Umur tidak valid. Mohon masukkan umur yang benar.");
  }
} while (isNaN(umur) || umur <= 0);

console.log("Umur Anda adalah: " + umur);


// function
var bus = {
  penumpang: [],
  
  tambahPenumpang: function(namaPenumpang) {
    if (this.penumpang.length < 10) {
      this.penumpang.push(namaPenumpang);
      console.log(namaPenumpang + " berhasil ditambahkan ke dalam bus.");
    } else {
      console.log("Maaf, bus sudah penuh.");
    }
  },
  
  hapusPenumpang: function(namaPenumpang) {
    var index = this.penumpang.indexOf(namaPenumpang);
    if (index !== -1) {
      this.penumpang.splice(index, 1);
      console.log(namaPenumpang + " berhasil dihapus dari bus.");
    } else {
      console.log(namaPenumpang + " tidak ditemukan dalam bus.");
    }
  },
  
  tampilkanPenumpang: function() {
    if (this.penumpang.length === 0) {
      console.log("Bus kosong.");
    } else {
      console.log("Penumpang dalam bus:");
      for (var i = 0; i < this.penumpang.length; i++) {
        console.log((i + 1) + ". " + this.penumpang[i]);
      }
    }
  }
};

bus.tambahPenumpang("Ais");
bus.tambahPenumpang("Pio");
bus.tambahPenumpang("Wawa");
bus.tampilkanPenumpang();
bus.hapusPenumpang("Pio");
bus.tampilkanPenumpang();
