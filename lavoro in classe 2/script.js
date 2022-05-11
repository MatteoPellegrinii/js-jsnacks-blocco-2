let array = [];

while (array.length < 10) {
    let random = Math.floor(Math.random()* 100 + 1);
    if (!array.includes(random)) {
        array.push(random);
    }
    
} 
console.log(array);



    
   