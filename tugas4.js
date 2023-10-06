// // soal berapa banyak pasangan penjumlahan dari sebuah array yang hasil nya dari sebuah angka

const testData = [
  { arrayNumber: [2, 1, 8, 9], result: 10 },
  { arrayNumber: [1, 5, 3, 7], result: 8 },
  { arrayNumber: [1, 5, 3, 7], result: 8 },
  { arrayNumber: [2, 1, 8, 9], result: 10 },
  { arrayNumber: [4, 5, 3, 7], result: 8 },
  { arrayNumber: [10, 9, 30, 40], result: 50 },
  { arrayNumber: [1, 2, 3, 4, 5], result: 9 },
  { arrayNumber: [5, 5, 5, 5, 5], result: 10 },
  { arrayNumber: [2, 4, 6, 8, 10], result: 12 },
  { arrayNumber: [7, 14, 21, 28], result: 35 },
  { arrayNumber: [15, 25, 35, 45], result: 50 },
  { arrayNumber: [2, 1, 8, 9], result: 10 },
  { arrayNumber: [4, 5, 3, 7], result: 6 },
];

// Hasil yang di inginkan adalah berapa jumlah data yang di hasilkan dari array number untuk menjadi result.
// contohnya dari array number [1,4,6,2], dari array number tersebut mau di hasilkan sebuah angka 6
// lalu array number di hitung satu" seperti 1+4=5, 1+6=7,1+2=3,4+6=10,4+2=6,6+2=8.
// kombinasi angka yang menghasilakn 6 kan hanya satu yaitu 4+2 saja.
// outputnya berarti "kombinasi yang dapat menghasilkan angka 6 dari array number hanya 1"

// tuliskan di sini algoritmanya
// ...

function calculateTheCombination(dataUser) {
  const combinations = [];
  for (const elements of dataUser) {
    let count = 0;
    const a = elements.arrayNumber;
    const b = elements.result;
    for (let i = 0; i < a.length; i++) {
      for (let j = i + 1; j < a.length; j++) {
        const sum = a[i] + a[j];
        if (sum === b) {
          combinations.push({
            combination: [a[i], a[j]],
            sum,
          });
          count++;
        }
      }
    }
    console.log(`Total Combination : ${count}, result : ${b}`)
  }
  return  combinations;
}

calculateTheCombination(testData);

