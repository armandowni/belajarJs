// soal replace +62 menjadi 0 dari sebuah array object yang ada key phoneNo nya dan tampilkan databaru nya
// dan klasifikan umur dari user
// 0-10 tahun : Anak Kecil
// 11-16 tahun : Remaja
// 17-22 tahun : Remaja Dewasa
// 23-29 tahun : Dewasa Muda
// 30-40 tahun : Dewasa Tua
// > 40 tahun : Orang Tua
// Hasil yang di inginkan semua nomor user depannya berubah menjadi 0 dari +62.
// dan klasifikasikan umur dari user.
// contoh output -> Fulan adalah Dewasa muda(umur: 24 tahun). No Hp: 085891239128941324

const arrayUser = [
  { name: "Fulan", age: 24, phoneNumber: "+6285891239128941324" },
  { name: "Budi", age: 30, phoneNumber: "+628589123123121" },
  { name: "Joko", age: 21, phoneNumber: "+62858912312321" },
  { name: "Jack", age: 38, phoneNumber: "+627220884083" },
  { name: "Charlie", age: 63, phoneNumber: "+621789749546" },
  { name: "Ivy", age: 77, phoneNumber: "+624493907964" },
  { name: "Bob", age: 31, phoneNumber: "+625201603944" },
  { name: "Helen", age: 21, phoneNumber: "+629705305100" },
  { name: "Eve", age: 35, phoneNumber: "+624168979996" },
  { name: "Grace", age: 19, phoneNumber: "+626147213152" },
  { name: "David", age: 6, phoneNumber: "+623880680719" },
  { name: "Alice", age: 4, phoneNumber: "+627266699411" },
  { name: "Frank", age: 2, phoneNumber: "+621926209200" },
];

// tuliskan di sini algoritmanya
// ...

function convertPhoneUser(dataUser) {
  // tulis disini codenya
  let klasifikasiUmur="";
const updateDataUser = dataUser.map(user=>{
if (user.phoneNumber) {
  user.phoneNumber =user.phoneNumber.replace(`+62`,`0`);
  if (user.age <=10) {
    klasifikasiUmur ="Anak Kecil";
  }
  else if(user.age <=16){
  klasifikasiUmur="Remaja";
  }
  else if(user.age <=22){
  klasifikasiUmur="Remaja Dewasa";
  }
  else if(user.age <=29){
  klasifikasiUmur="Dewasa Muda";
  }
  else if(user.age <=40){
  klasifikasiUmur="Dewasa Tua";
  }
  else{
    klasifikasiUmur = "Orang Tua"
  }
 user[`Klasifikasi`]=klasifikasiUmur;

}
return user;
});
return updateDataUser;
}
console.log(convertPhoneUser(arrayUser));
