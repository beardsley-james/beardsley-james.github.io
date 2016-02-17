$(document).ready(function() {
	$("#selectionMenu").on("click", "button", function(e){
		e.preventDefault();
		var character = CharacterSelection($(this));
		console.log(character);
		$("#player1Selection").text(character);
	});
  
	for (i=1; i<3; i++) {

		$("#player" + i + "NPCs").html(npcListGenerator(npcs));
		
		$("#player" + i + "FormCharGenCareer").html(createOptionList(careers));
		$("#player" + i + "FormCharGenSpecies").html(createOptionList(races));
		$("#player" + i + "FormCharGenGender").html(createOptionList(genders));
		
		$("#player" + i + "FormAdvancedGender").html(createOptionList(genders));
		$("#player" + i + "FormAdvancedWeapon").html(createOptionList(weapons));
		$("#player" + i + "FormAdvancedArmor").html(createOptionList(armors));
	}
});


var slabGrunt = new Character("Slab Grunt", orc, warrior, male, true);
var robberBaron = new Character("Robber Baron", human, mercenary, male, true);
var lucyFormic = new Character("Lucy Formic", formic, soldier, none, true);
var jamesBeardsley = new Character("James Beardsley", human, arbalest, male, true);
var kellyLoveless = new Character("Kelly Loveless", human, warrior, female, true);

console.log(weapons);
console.log(armors);