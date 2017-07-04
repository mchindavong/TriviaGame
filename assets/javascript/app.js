$(document).ready(function(){
$("#start-button").click(function(){

  	var number = 30;
    $("#start-button").on("click", start); 
    $("#submit").on("click", finish);  
    $("#restart").on("click", restart);  

    function start(){
    	counter = setInterval(timer, 1000);
    	showMe(".question");
    	showMe(".answers");
    	showMe("#submit");
	    hideMe("#start-button");
	    hideMe(".rules");
	    hideMe("#restart");
	    hideMe("#results");
    }
    function timer(){
      number--
      $("#show-number").html("<h2>" + number + "</h2>" );
      if (number === 0){
        stop();
      }
    }
    function stop(){
    	clearInterval(counter); 
    	$("#results").show();
    	$("#restart").show();
		$(".question").hide();
		$(".answers").hide();
		$("#submit").hide();
    }
    function finish(){
    	number = 1; 
    	clearInterval(counter); 
    	timer();
    }

    function restart(){
    	number = 30;
    	start();
    }

    function hideMe(e) {
    	$(e).hide();
    }
    function showMe(e) {
    	$(e).show();
    }

  	start(); 
  });
});