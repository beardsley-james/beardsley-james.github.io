$(document).ready(function() {
  var ivan = new Character("", orc, warrior, male);
  var ted = new Character("", human, warrior, male);
  var output = fight(ivan, ted);
/*  for (var prop in ivan) {
	  if (typeof(prop) == Object) {
		  for (var key of prop){
			  output += key + ": " + prop[key] + "</br>";
		  }
	  } else {
		  output += prop + ": " + ivan[prop] + "</br>";
	  };
  }; */
  $("#fightTranscript h2").html(output);
});