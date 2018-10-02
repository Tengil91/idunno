var price = 5, quantity = 33;
var result = price*quantity;
console.log(result);
console.log("nice");
var mangoprice = document.getElementById('mango');
mangoprice.innerHTML = result;
var smashers = ['smasher89', 'Tengil', 'Kagg'];
console.log(smashers[1]);
smashers[0]= "Flasher89";
/*
lets be real:
det finns ingen smasher
det är bara flasher
*/
console.log(smashers[0]);
console.log('7'*1+'9'*1); //kryphåll för att komma runt att stringnummer inte kan adderas xD

function calc(){
    var numberofmangos = document.getElementById('mangonumber').value;
    mangoprice.innerHTML=numberofmangos*price;

}
let cars = new Array(2);
cars[cars.length] = "Volvo";
console.log(cars[1]);