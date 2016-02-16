$(document).ready(function() {
  var ivan = new Character("", orc, warrior, male);
  var ted = new Character("", human, warrior, male);
  var output = fight(ivan, ted);

  $("#fightTranscript h2").html(output);
  
  $("#selectionMenu button").on("click", function(e){
	  e.preventDefault();
	  var character = CharacterSelection($(this));
	  console.log(character);
	  $("#player1Selection").text(character);
  })
});