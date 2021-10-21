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
 * 2. se utente ha età <= 20 anni, inserire il codice di sconto “SCONTO20”
 *    se no, messaggio errore “Codice non valido per la tua fascia di età"
 *    Se inserisce il codice sbagliato comunicare “Codice non valido”
 */

const numKm = parseInt(prompt('Quanti chilometri devi fare')); 
const age = parseInt(prompt('Quanti anni hai'));
const specialSale = prompt ('inserisci "SCONTO20"');

const price = 0.21;
let num = numKm * price;
let finalPrice = num.toFixed(2);

let scontoValido = true;
let errorMsg = '';
let errorMsg2 = '';
let outputStrn = '';
let outputStrn2 = '';

console.log('prezzo totale',finalPrice);

youngSale = finalPrice * 0.2 ;
elderSale = finalPrice * 0.4 ;

// check sconto scritto bene
if(specialSale !== 'SCONTO20'){
  scontoValido = false;
  errorMsg = 'Codice non valido';
}

if(!scontoValido){
  outputStrn = errorMsg;
}

document.getElementById('output1').innerHTML = outputStrn;

// check validità sconto per età
if(age <= 20){
  specialSale = true;
}else{
  scontoValido = false;
  errorMsg2 = 'Codice non valido per la tua fascia di età';
}

if(!scontoValido){
  outputStrn2 = errorMsg2;
}

document.getElementById('output2').innerHTML = outputStrn2;

console.log('scontoValido',scontoValido);

// controllo se numeri inseriti validi
let kmAgeValid = true;

if(isNaN(numKm) == false && isNaN(age) == false){
  kmAgeValid = false;

  if(age < 18){
    finalPrice = num - youngSale;
  }else if(age > 65){
    finalPrice = num - elderSale;
  }else{
    finalPrice = num;
  }
  
   document.getElementById('price').innerHTML = finalPrice;
}

console.log('numValido',kmAgeValid);
console.log('errorMsg',errorMsg);
console.log('errorMsg2',errorMsg2);






