const buttons = document.querySelectorAll(".buttons");
		let body = document.querySelector("body");


 function colorhandler(event){

		if(event.target.id === 'black'){
			body.style.backgroundColor = 'black'; 
		}
         
         if(event.target.id === "green"){
         	body.style.backgroundColor = "green";
         }

         if(event.target.id === "blue"){
         	body.style.backgroundColor = "blue";
         }

         if(event.target.id === "orange"){
         	body.style.backgroundColor = event.target.id;
         }

         if(event.target.id === "purple"){
         	body.style.backgroundColor = event.target.id;
         }
          
            if(event.target.id === "red"){
         	body.style.backgroundColor = event.target.id;
         }

         if(event.target.id=== "white"){
         	body.style.backgroundColor = event.target.id;
         }

	}

buttons.forEach( function (button){
	button.addEventListener("click", colorhandler);
})


 