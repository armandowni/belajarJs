const test1 = "1 + 2";
const test2 = "3 * 2";
const test3 = "3 / 3";
const test4 = "4 - 1";
const test5 = "4 / 2";
const test6 = "100 * 3";
const test7 = "100 / 20";

const data = [test1, test2, test3, test4, test5, test6, test7];

//output dari data diatas adalah menyelesaikan aritmatika di dalam string di atas

for (const datatest of data) {
  const komponen = datatest.split(" "); 
  console.log(komponen);
  

const a = parseInt(komponen[0]);
const calculate = komponen[1];
const b = parseInt(komponen[2]);

switch (calculate) {
  case '+':
    hasil = a + b;
    break;
  case '-':
    hasil = a - b;
    break;
  case '*':
    hasil = a * b;
    break;
  case '/':
    hasil = a / b;
    break;
  default:
    console.log("Tidak Valid");
}

console.log(hasil);
}


//const myArray = test1.split(" ");
//console.log(test1);

//output dari data diatas adalah menyelesaikan aritmatika di dalam string di atas