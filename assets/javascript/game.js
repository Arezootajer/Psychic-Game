var wins=0;
var losses=0;
var guesses=0;
 var letters = [
               "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
               "p","q","r","s","t","u","v","w","x","y","z"
               ];
var GuessLeft=10;
var yourGuess=[];

	document.onkeyup = function(event){

		var userguess= String.fromCharCode(event.keyCode).toLowerCase();
		var computerguess = letters[Math.floor(Math.random()*letters.length)];
		console.log(userguess);
		
		console.log(computerguess);
		//allows only A-Z on keyboard to be registered as answers
        if (event.keyCode >= 65 && event.keyCode <= 90) {
        	
            if (GuessLeft != 0) {

            	GuessLeft--;
				yourGuess.push(userguess);
				if (userguess ==computerguess){

	                wins++
				}
				else {
					losses++
				}
			}
			else{
				window.location.reload(false);
			}
		}
			else{
				alert("please choose  a letter");
			}
			var html="<p> Guess what letter I'm thinking of </p>" + "<p> Wins: " + wins +"</p>"+
			"<p> Losses: " + losses + "</p>" +
			"<p> Guesses Left : " + GuessLeft + "</p>" +
			"<p>Your Guesses So Far: " + yourGuess + "</p>";
			document.querySelector('#container').innerHTML= html;
		}

	