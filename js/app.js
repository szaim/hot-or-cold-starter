
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  /**	
  	function newGame(){
  		var random = Math.floor(Math.random() * 100);
  		console.log(random);
  	}

	/*--- Generate Random Number ---*/
/**	function generateNumber() {

		var generatedNumber = Math.floor((Math.random()*100)+1);
		console.log("Generated Random Number = "+ generatedNumber);

		return generatedNumber;
	}

  	newGame();
  	**/
  	
  	var count = 1
  	$("form").submit(function(e){
  		e.preventDefault();
  		var guessNum = $("#userGuess").val();
  		if (guessNum >= 0 && guessNum <= 100){
	  		$("#guessList").append("<li>" + guessNum + "</li>");
	  		$("#count").text(count++);
  		} else (alert("this Number is not valide!"));
  		// Generate the random number
  		randomNum();
  		
  	});
  	// this function will generate the random number that we invoke in the submit 
  	var randomNum = function(){
		var random = Math.floor((Math.random() * 100) + 1);
		console.log("the Random Number is = " + random);
		return random;
  	}


});