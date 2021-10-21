/**
 * 1. chiedere all'utente di inserire numero di chilometri
 * 2. chidere all'utente la sua età
 * 3. calcolare il prezzo totale del viaggio
 *    - 0.21 € al km
 *    - under 18 hanno sconto 20%
 *    - over 65 sconto 40%
 * 5. output: prezzo con massimo due cifre decimali
 * 
 * BONUS:
 * 1. controllare validità dei dati
 * 2. se utente ha età <= 20 anni, aggiungere sconto 20%.
 *    se no, messaggio errore “Codice non valido per la tua fascia di età"
 *    Se inserisce il codice sbagliato comunicare “Codice non valido”
 */

 const numKm = parseInt(prompt('Quanti chilometri devi fare')); 

 const age = parseInt(prompt('Quanti anni hai')); 

 const price = 0.21;
 
 let num = numKm * price;
 let finalPrice = num.toFixed(2);

 console.log('prezzo totale',finalPrice);

 youngSale = finalPrice * 0.2 ;
 elderSale = finalPrice * 0.4 ;
//  let youngPrice = false;
//  if( age < 18){
//   youngPrice = finalPrice - youngSale ;
//  }

//  console.log('prezzo sconto under 18',youngPrice);



//  let elderPrice = false;
//  if( age > 65){
//    elderPrice = finalPrice - elderSale ;
//  }

//  console.log('prezzo sconto over 65',elderPrice);


if(age < 18){
  finalPrice = num - youngSale;
}else if(age > 65){
  finalPrice = num - elderSale;
}else{
  finalPrice = num;
}

 document.getElementById('price').innerHTML = finalPrice;


 // controllo se numeri inseriti validi
 let kmValido = true;
//  let ageValido = true;

if(isNaN(numKm) && isNaN(age)){
  kmValido = false;
}

console.log('numValido',kmValido)
// console.log('ageValido',ageValido)
