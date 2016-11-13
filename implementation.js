function play() {
	var audio = document.getElementById("audio");
	var notes = ["A", "B", "C", "D", "E", "F", "G"];
	var j = Math.floor(Math.random() * notes.length);
	document.getElementById("audio").src = "notes/" + notes[j]+".wav";
	audio.play();
}

function playSound(x) {
	var audio = document.getElementsByClassName("audio");
	audio[x].play();
}

var random; // store the random notes as a global array so we can access this later
function randomize() {
	random = []; // reset the array
	var notes = ["A", "B", "C", "D", "E", "F", "G"];

	var buttonIndex = 0;

	while (notes.length > 0) {
		var i = Math.floor(Math.random() * notes.length); // notes[i] is the chosen note
		random.push(notes[i]); // add the randomly chosen note into random
		document.getElementsByClassName("audio")[buttonIndex].src = "notes/" + notes[i] + ".wav";
		buttonIndex++;
		notes.splice(i,1); // delete the chosen note
	}
}