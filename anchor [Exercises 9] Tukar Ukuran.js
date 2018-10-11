/*

Diberikan function tukarBesarKecil(kalimat) yang menerima satu parameter berupa string. Function akan me-return string tersebut dengan menukar karakter yang uppercase menjadi lowercase, dan sebaliknya. Spasi dan simbol diabaikan.

*/


function tukarBesarKecil(kalimat) {
  // you can only write your code here!
  
  var newKalimat =''
  
  for (var i =0; i < kalimat.length; i ++){
    var kalimatKecil = kalimat[i].toLowerCase()
    var kalimatBesar = kalimat[i].toUpperCase()
    if (kalimat[i] === kalimatBesar) {
      
      newKalimat +=kalimatKecil
      
    } else if (kalimat[i] === kalimatKecil){
      
      newKalimat += kalimatBesar
      
    } else {
      
      newKalimat += kalimat[i]
    }
    // console.log(newKalimat)
    
  }
  
 
    // return newKalimat;
  console.log(newKalimat)
  
  
  
  
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"











function tukarBesarKecil(kalimat) {
  // you can only write your code here!
  
  var output='';
  
  for(var i=0,len=kalimat.length-1; i<=len; i++){
        code = kalimat.charCodeAt(i);
        if(code >= 65 && code <= 90){
            output+=kalimat.charAt(i).toLowerCase();
        }else if(code >=97 && code <= 122){
            output+=kalimat.charAt(i).toUpperCase();
        }else{
            output+=kalimat.charAt(i);
        }
    }
    return output;
  
  
  
  
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"







