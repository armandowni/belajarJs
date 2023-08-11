// tipe data
const a = 1; //number
const a2 = 2; //number
const b = "Helle World"; //string => ['H','e','l', ...]
const c = new Date(); //date
const d = ["apple", "banana", "grapes", "mango"]; //array
const e = {
  nama: "Fulan",
  umur: 10,
  favoriteFood: ["apple", "banana", "grapes", "mango"],
  phone: "085891829839123",
}; //object

const arrayUser = [
  { name: "Fulan", age: 24, phone: "085891239128941324" },
  { name: "Budi", age: 30, phone: "08589123123121" },
  { name: "Joko", age: 21, phone: "0858912312321" },
];
// case 1: cari user namanya Budi
// case 2: check umur user diatas 25 atau tidak
// case 3: check panjang nomor

// const userBudi = arrayUser.find((user) => user.name === "Budi");

// if (userBudi) {
//   console.log("Nama:", userBudi.name);
//   console.log("Usia:", userBudi.age);
//   console.log("Nomor Telepon:", userBudi.phone);
// } else {
//   console.log("User Budi tidak ada.");
// }

// arrayUser.forEach((user) => {
//   if (user.age > 25) {
//     console.log(`${user.name} berusia di atas 25 tahun.`);
//   } else if (user.age == 25) {
//     console.log(`${user.name} berusia 25 tahun.`);
//   } else {
//     console.log(`${user.name} berusia kurang dari 25 tahun.`);
//   }
// });

// arrayUser.forEach((user) => {
//   const panjangPhone = user.phone.length;
//   console.log(`panjang nomor telpon ${user.name} =  ${panjangPhone} digit.`);
// });

// let countHuruf = 0;

// console.log(parseInt(Math.random() * 10))
// console.log(b.toString().replace('Hello', 'Halo'));
// console.log(c.getFullYear());
// console.log(e['nama']);
// console.log(e.nama);

// selection
// if, else if, else, switch case
const key = 0;
const key2 = 10;
// switch (1) {
//   case key < key2:
//     return console.log(1);
//   case key < key2:
//     return console.log(2);
//   default:
//     return console.log("default");
// }

// looping
// for, while, do while
// for (let index = 0; index < b.length; index++) {
//   const huruf = b[index];

//   if (huruf === "e") {
//     countHuruf += 1;
//   }
// }

let count = 0;

// do {
//   console.log("jam ", count, "gua masak Mie");
//   count += 1;
// } while (count < 0);

while (count < 0) {
  console.log("jam ", count, "gua masak Mie");
  count += 1;
}
// console.log('e: ',countHuruf);

// cara 1 untuk mencari index apple
// for (let index = 0; index < d.length; index++) {
//   const word = d[index];
//   if (word === "apple") return console.log("index apple is : ", index);
// }

// cara 2 untuk mencari index apple
// for (const [index, word] of d.entries()) {
//   if (word === "apple") return console.log("index apple is : ", index);
// }

// cara 3 untuk mencari index apple
// console.log(
//   "index apple is : ",
//   d.findIndex((data) => data === "apple")
// );

// for in
// for (const key in e) {
//   if (key === "nama") console.log("if Key :", key, "have value ", e[key]);
//   else if (key === "umur")
//     console.log("else if Key :", key, "have value ", e[key]);
//   else console.log("else Key :", key, "have value ", e[key]);

//   //   console.log("Key :", key, "have Value ", value);
// }
