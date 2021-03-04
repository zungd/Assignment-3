// declaring a variable called coinFlip
let coinflip;

let i = prompt("enter a number");	

		/*	Create a for loop that loops a certain amount of times. 
             The amount of times that the for loop executes will be collected from the user via a prompt. */
		for(let i =1; i < 8; i++) {
			//random genorator for the outcome being either 1 or 0 
			let coinflip = Math.round(Math.random()); 
            //a conditional statement to check the result of the coin flip
			if (coinflip==0) {
				console.log("Heads"); 
			} else if (coinflip==1) {
				console.log("Tails");
			}
		} 