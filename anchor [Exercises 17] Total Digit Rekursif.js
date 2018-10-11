// Diberikan sebuah function totalDigitRekursif(angka) yang menerima satu parameter berupa angka. Function akan me-return nilai total dari digit tersebut dengan menambahkan satu per satu angka dari digit paling depan ke paling belakang. Wajib menggunakan rekursif untuk berlatih rekursif! Disarankan untuk tidak menggunakan looping for untuk soal ini.

function totalDigitRekursif(angka) {
  var arr = angka.toString();
  // console.log(arr);
  if(arr.length === 1){
    return Number(angka);
  } else {
    var angkaSementara = Number(arr[0]);
    arr = arr.slice(1);
    return angkaSementara + totalDigitRekursif(Number(arr));
  }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5

/*
Cara mengubah string ke Number

var angka = '12341'
var toNumber = Number(angka);

var toNumber2 = parseInt(angka);
*/
