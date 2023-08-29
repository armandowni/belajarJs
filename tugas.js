// soal 1
// jika terdapat data dengan nama dan nilai ujian murid dari skala 0-100, berapa jumlah murid yang dinyatakan lulus dan tidak lulus jika batas minimum kelulusannya adalah 75. Jika nilai siswa sama dengan atau lebih besar dari 75 maka siswa dinyatakan lulus, tetapi jika nilai siswa di bawah 75 maka dinyatakan tidak lulus. buat algoritma dan codingannya

// bikin algoritma dibawah ini pakai comment:
// program berjalan dan dieksekusi dengan if else dan dengan kondisi user.score >= 75
// dari if else tersebut akan di pilah. jika score dari user lebih dari atau sama dengan 75, maka akan masuk ke statement pertama (lulus).
// jika score tidak memenuhi kondisi yang diminta, maka akan berlanjut ke statement selanjutnya yaitu tidak lulus.

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

// tulis codingan di bawah ini menggunakan data test diatas

let Lulus = 0;
let TLulus = 0;

for (const user of users) {
  if (user.score >= 75) {
    Lulus++;
  } else {
    TLulus++;
  }
}

console.log(`Jumlah murid yang lulus: ${Lulus}`);
console.log(`Jumlah murid yang tidak lulus: ${TLulus}`);