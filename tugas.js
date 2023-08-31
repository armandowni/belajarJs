// soal 1
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

// tulis codingan di bawah ini menggunakan data test diatas

let jumlahLulus = 0;
let jumlahTidakLulus = 0;
const batasMinimum = 75;
for (const user of users) {
  user.score >= batasMinimum ? jumlahLulus++ : jumlahTidakLulus++;
}
console.log(`Jumlah murid yang lulus :${jumlahLulus}`);
console.log(`Jumlah murid yang tidak lulus :${jumlahTidakLulus}`);

// for (const data of users) {
//   if (data.score >= 75 && data.score <= 100) console.log("Lulus");
//   else if (data.score >= 0 && data.score <= 75) console.log("Tidak lulus");
//   else console.log("Nilai Tidak Valid");
// }
