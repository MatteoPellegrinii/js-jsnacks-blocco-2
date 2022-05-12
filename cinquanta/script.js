let myarray = [];

while (myarray.length < 10) {
  let random = Math.floor(Math.random()*100)+1;

  if (!myarray.includes(random)) {
    myarray.push(random);
  }
}
console.log(myarray);



