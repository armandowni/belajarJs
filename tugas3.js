// hitung dengan rumus luas segitiga
// jika hasilnya atau resultnya koma maka di bulatkan
// contoh 15,2 menjadi 15, 15,5 menjadi 16, 15,7 menjadi 15
// perhatikan datanya, jika null maka yang di cari yang null tersebut
// contoh resultnya null maka cari result dan di bulatkan
// jika yang tingginya null maka yang di cari tinggi dan tidak perlu di bulatkan
// begitu pula jika yang null adalah alas

const testData = [
  { alas: 5, tinggi: 8.1, result: null },
  { alas: 3, tinggi: 6, result: null },
  { alas: 7.2, tinggi: 10, result: null },
  { alas: 4, tinggi: null, result: 18 },
  { alas: 6, tinggi: 12.7, result: null },
  { alas: 8.5, tinggi: null, result: 56 },
  { alas: 10, tinggi: null, result: 25 },
  { alas: null, tinggi: 15, result: 90 },
  { alas: null, tinggi: 6, result: 31.5 },
  { alas: null, tinggi: 5, result: 44 },
];

// tuliskan di sini algoritmanya
// rumus luar segitiga = alas x tinggi :2

function calculateThePhytagoras(data) {
  for (const elements of data) {
    // console.log(elements.alas);
    console.log(elements);

    if (elements.alas == null) {
      const mencarialas = (2 * elements.result) / elements.tinggi;
      elements.alas = Math.round(mencarialas);
    } 
    
    else if (elements.tinggi == null) {
      const mencaritinggi = (2 * elements.result) / elements.alas;
      elements.tinggi = Math.round(mencaritinggi);
    } 
    
    else if (elements.result == null) {
      const mencariluas = (elements.alas * elements.tinggi) / 2;
      elements.result = Math.round(mencariluas);
    }
  }
  console.log(data);
}
calculateThePhytagoras(testData);
