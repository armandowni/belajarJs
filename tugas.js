// jika terdapat data dengan nama dan nilai ujian murid dari skala 0-100, berapa jumlah murid yang dinyatakan lulus dan tidak lulus jika batas minimum kelulusannya adalah 75. Jika nilai siswa sama dengan atau lebih besar dari 75 maka siswa dinyatakan lulus, tetapi jika nilai siswa di bawah 75 maka dinyatakan tidak lulus. buat algoritma dan codingannya

// bikin algoritma dibawah ini pakai comment

// data test
const users = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 72 },
  { name: "Charlie", score: 95 },
  { name: "David", score: 64 },
  { name: "Eva", score: 78 },
  { name: "Frank", score: 91 },
  { name: "Grace", score: 89 },
  { name: "Helen", score: 67 },
  { name: "Ivan", score: 76 },
  { name: "Jack", score: 83 },
];
/*Variabel const dengan sebuah array users yang berisi kan
data-data name dan score*/

// tulis codingan di bawah ini menggunakan data test diatas
/*for (const user of users) {
  //Menggunakan pengulangan for mengulang-ulang sebuah data dalam array users
  const score = user.score; //Menghasilakan nilai score dari objek pengguna dan menyimpan dalam variabel score
  switch (
    true //lalu menggunakan pernyataan switch dengan ekspresi true untuk sebuah kasus berdasarkan kondisi nantinya
  ) {
    case score >= 75 && score <= 100: //Jika kasus score lebih atau sama dengan 75 hingga kurang dari atau sama dengan 100
      console.log(`${user.name} Lulus`); //Maka Dinyatakan Lulus
      break; //Pernyataan break berguna untuk menghentikan suatu kondisi apabila sudah menemukan kondisi yang cocok
    case score >= 0 && score < 75: //Jika kasus score lebih atau sama dengan NOL dan hingga score kurang dari 75
      console.log(`${user.name} Tidak Lulus`); //Maka Dinyatakan tidak lulus
      break; //Pernyataan break untuk menghentikan evaluasi suatu kasus lebih lanjut setelah menemukan kondisi yang tepat
    default: //Akan dijalankan apabila kondisi tidak benar
      console.log("Nilai Tidak Valid"); //Maka menghasilkan output yang tidak valid
  }
} */

for (const user of users) {
  //Menggunakan pengulangan for mengulang-ulang sebuah data dalam array users
  const score = user.score; //Menghasilakan nilai score dari objek pengguna dan menyimpan dalam variabel score

  if (score >= 75 && score <= 100) {
    //Jika kasus score lebih atau sama dengan 75 dan hingga kurang dari atau sama dengan 100
    console.log(`${user.name} Lulus`); //Maka Dinyatakan Lulus
  } else if (score >= 0 && score < 75) {
    //Jika if tidak terpenuhi maka pernyataan else if mengevaluasi kasus score lebih atau sama dengan NOL dan hingga score kurang dari 75
    console.log(`${user.name} Tidak Lulus`); //Maka Dinyatakan Tidak Lulus
  } else {
    //Jika tidak ada pernyataan if atau else if yang terpenuhi, maka pernyataan else akan dieksekusi
    console.log("Nilai Tidak Valid"); // Maka Akan Mengeluarkan Output Nilai Tidak Valid
  }
}
