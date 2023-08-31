// soal 1
// jika terdapat data dengan nama dan nilai ujian murid dari skala 0-100, berapa jumlah murid yang dinyatakan lulus dan tidak lulus jika batas minimum kelulusannya adalah 75. Jika nilai siswa sama dengan atau lebih besar dari 75 maka siswa dinyatakan lulus, tetapi jika nilai siswa di bawah 75 maka dinyatakan tidak lulus. buat algoritma dan codingannya

 // data test

// 1. Inisialisi Data Murid
// 2. Skala nilai murid 0-100
// 3. Nilai murid < 75 Tidak Lulus
// 4. Nilai murid >= 75 Lulus

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

let lulus = 0;
let tidakLulus = 0;

for (let i = 0; i < users.length; i++) {
  if (users[i].score >= 75) {
      lulus++;
  } else {
      tidakLulus++;
  }
}

console.log(`Jumlah murid yang lulus: ${lulus}`);
console.log(`Jumlah murid yang tidak lulus: ${tidakLulus}`);







