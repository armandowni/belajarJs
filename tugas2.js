const test1 = "1 + 2";
const test2 = "3 * 2";
const test3 = "3 / 3";
const test4 = "4 - 1";
const test5 = "4 / 2";
const test6 = "100 * 3";
const test7 = "100 / 20";

const data = [test1, test2, test3, test4, test5, test6, test7];


//output dari data diatas adalah menyelesaikan aritmatika di dalam string di atas
// for si const data,
// pisah string berdasarkan spasi.
// init a,b sama aritmatiknya.
// switch case.
// tampilin hasilnya.


for (const elements of data){
    const a = elements.split(" ")
    const b = parseInt (a[0]);
    const c = parseInt (a[2]);
   
    console.log(a);
     
    
}