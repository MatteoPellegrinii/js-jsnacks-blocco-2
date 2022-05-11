let myarray = [];
let sum = 0

do {
    let numero = prompt("inserisci un numero");
    myarray.push(numero);

    let sum = myarray.reduce(myFunc);

    function myFunc(total, num) {
        return total += num;
      }
    console.log(sum);
    
} while (myarray.length < 3);



