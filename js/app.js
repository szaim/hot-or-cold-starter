
$(document).ready(function(){

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});


		// Adds guess number to list
  
    var secretNumber;
  	var count = 10;
		var guessNum;
    generateNumber();
    var gameOn = function(e){
      e.preventDefault();
      guessNum = $("#userGuess").val();
      console.log("this is your guessNum: " + guessNum);
        if (--count){
          if (guessNum > 0 && guessNum <= 100){
              $("#guessList").append("<li>" + guessNum + "</li>");
              $("#count").text(10-count);  
          }else {alert("this Number is not valid!")};
        }else{
          //alert("Sorry you hit the Max :(");
          $("form").off("submit", gameOn);
          $("form").on("submit", gameOff);
        }
      $("form")[0].reset();
    // 2 fucntion one guess one count

      /**
 you might decide that if a user is 50 or further away from 
 the secret number, they are told they are "Ice cold", if they are
  between 30 and 50 they are "cold", if they are between 20 and 30 
  they are warm, between 10 and 20 hot, and between 1 and 10 "very hot". 
 You can choose what the ranges are and what feedback you provide.
 */
      if (guessNum >= 50){
        $("#feedback").text("Ice cold");
      } else if (guessNum >= 30 && guessNum < 50){
        $("#feedback").text("Cold");
      } else if (guessNum >= 20 && guessNum < 30){
        $("#feedback").text("Warm");
      } else if (guessNum >= 10 && guessNum < 20){
        $("#feedback").text("Hot");
      } else if (guessNum >= 1 && guessNum < 10){
        $("#feedback").text("Very Hot");
      }

      // $("form").off("submit", gameOn);

    }

    $(".new").click(function(e) {
      e.preventDefault;
      generateNumber();
      $("form").off("submit", gameOn);
      newGame();
      getNum();
    });


    function gameOff(e){
      alert("Sorry you hit the Max :(");
      e.preventDefault();
    }

    function generateNumber(){
      secretNumber =  Math.floor(Math.random() * 100) + 1;
      console.log("secretNumber is: " + secretNumber);
    }

  	$("form").submit(gameOn);
    function getNum(){
      $("form").submit(function(){
        if(guessNum == secretNumber){
          $("#feedback").text("Yayy you get it :)");
          $("form").off("submit", gameOn);
         }
      });
    }
    getNum();
  	// this function will generate the random number that we invoke in the submit
   //  function generateNumber(){
   //     secretNumber = Math.floor(Math.random() * 100) + 1;
   // }



    function newGame(){
      count = 10;
      $("#count").text(0);
      $("form")[0].reset();
      $("#guessList").empty();
      $("#feedback").text("Make your Guess!");
      $("form").on("submit", gameOn);
      $("form").off("submit", gameOff);
      
    }




});
