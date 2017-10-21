'use strict';

console.log("działa!");

 document.addEventListener('DOMContentLoaded', function() {
      // tutaj będziemy umieszczać kod ze wszystkich zadań
      // mamy 100% pewności że HTML się wczytał

var menuList = document.querySelectorAll(".nav-list > li");
console.log(menuList); // Mamy tutaj tablicę !!! więc zawsze myślimy o pętli

for(var i = 0; i < menuList.length; i++){
    menuList[i].addEventListener("mouseover", function(){
    	
    	//this to taka zmienna, która jest tym na co najechał użytkownik
    	var dropdown = this.querySelector(".dropdown");
    	//console.log(dropdown);
        if( dropdown != null){
        dropdown.style.display = "block"	
        }
    	
    })
}

for(var i = 0; i < menuList.length; i++){
    menuList[i].addEventListener("mouseout", function(){
    	
    	//this to taka zmienna, która jest tym na co najechał użytkownik
    	var dropdown = this.querySelector(".dropdown");
    	//console.log(dropdown);
        if( dropdown != null){
        dropdown.style.display = "none"	
        }
    	
    })
}


 });