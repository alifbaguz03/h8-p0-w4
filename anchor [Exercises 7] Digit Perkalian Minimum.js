// Diberikan sebuah function digitPerkalianMinimum(angka) yang menerima satu parameter angka.
// Function akan mengembalikan jumlah digit minimal dari angka yang merupakan faktor angka parameter
// tersebut, Contoh, jika angka adalah 24, maka faktornya adalah 1 * 24, 2 * 12, 3 * 8, dan 4 * 6. 
// Dari antara faktor tersebut, yang digit nya paling sedikit adalah 3 * 8 atau 4 * 6,
// sehingga function akan me-return 2.

function digitPerkalianMinimum(angka) {
  var tampung = 0;
  var arr = [];
  for (var i = 0; i <= angka; i++){
    for (var j = angka; j > 0; j--){
      //mencari angka ke `i` berapa saja yg bila di kalikan dengan angka ke `j` menghasilkan `angka` 
      if(i * j == angka){
        tampung = String(i) + String(j);
        console.log(i , j , tampung)
        arr.push(tampung);
      }
    }
  }
  return arr.sort(function (value1, value2) {return value1 < value2})[0].length
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
