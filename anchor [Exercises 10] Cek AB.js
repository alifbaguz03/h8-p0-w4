// Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string. 
// function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat 
// karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali. 
// Jika tidak ditemukan sama sekali, kembalikan nilai false.

function checkAB(num) {
    var a;
    var b;
    var tampung;
    
    for(var i = 0; i < num.length; i++){
      // cek huruf 'a' ke index ke berapa
        if(num[i] === 'a'){
         a = i
        }
        // cek huruf 'b' ke index berapa
        else if (num[i] === 'b'){
           b = i   
        }
    }
    return b - a === 4 || a - b === 4
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false
