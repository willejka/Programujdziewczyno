console.log("działa!")

var myName = "Eliza";
console.log( myName );

var tablica = ["Agata","Eliza","Monika","Magda"]
console.log(tablica[1] );

var zmienna1 = 16;
var zmienna2 = 4;

if ( zmienna1 > zmienna2 ){
	console.log("Hurra!");
}

for (var i = 0; i <= tablica.length-1; i++){
 console.log(tablica[i]);
}

var samochody = ["mercedes","volvo","audi"];
for (var j = 0; j <= samochody.length-1; j++){
	console.log(samochody[j]);
}
// //Liczby i stringi
// var myNumber = 2.2;
// var myNumber2 = 8;
// var myText1 = "lalala";
// var myText2 = 'lalala';


// //Wartości logiczne
// var prawda = true;
// var falsz = false;

// console.log( myText1 + myText2)
// console.log(prawda);

// //Tablice
// var tablica = [ 100,2,3 ]; // ile jest elementów? 3
// // Na jakiej pozycji jest liczba 2? 1 Zawsze w tablicach liczymy od zera
// console.log(tablica[0] ); //wypisuję liczbe na danej pozycji

// // Pobrac dlugosc tablicy
// console.log( tablica.length );

// var tablica2 = ["jablko", "gruszka", 5, true ]; //moga być mieszane typy w tablicy
// console.log( tablica2);
// console.log( tablica2[1] );
// console.log( tablica2.length );

// // Funkcja
// function wypisywanie( owoc ){ //var owoc = marchewka
//   var sok = "miksowanie " + owoc;
//   return sok;
// }

// var otrzymanySok = wypisywanie( "marchewka" ); 
// console.log(otrzymanySok);
// wypisywanie( "banan");
// wypisywanie( "jagoda"); //uruchamianie funkcji albo wywolywanie

// // "miksowanie " + owoc ==== sok ===== wypisywanie( "marchewka" ) =====otrzymanySok

// // Indtrukcje warunkowe
// var czyPada = true;
// if ( czyPada ){ //w nawiasie okągłym coś co stanowi wartosc logiczną, np. true, 1 > 0, 0 > 1, 
// 	console.log( "Wez parasol")
// } else {
// 	console.log("wez okulary")
// }

// //Pętle
// for(var i = 0; i < 20; i++) {
// 	console.log("Czesc" , i);
// }

// DOM Document Object Model DOM Api
var ppp = document.querySelector("jumbotron");
ppp.style.border = "3px solid red"

var divs = 