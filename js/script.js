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

 const numKm = 50;
 //parseInt(prompt('Quanti chilometri devi fare')); 

 const age = 75;
 //prompt('Quanti anni hai'); 

 const price = 0.21;
 
 let num = numKm * price;
 let finalPrice = num.toFixed(2);

 console.log('prezzo totale',finalPrice);


 youngSale = finalPrice * 0.2 ;
 let youngPrice = false;
 if(age === 18 || age < 18){
  youngPrice = finalPrice - youngSale ;
 }

 console.log('prezzo sconto under 18',youngPrice);

 
 elderSale = finalPrice * 0.4 ;
 let elderPrice = false;
 if(age === 65 || age > 65){
   elderPrice = finalPrice - elderSale ;
 }

 console.log('prezzo sconto over 65',elderPrice);