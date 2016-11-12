function play() {
	 var audio = document.getElementById("audio");
	 var notes = ["C", "A", "B", "D", "F", "G", "E",];
	 var j = Math.floor(Math.random() * notes.length-1);
	 document.getElementById("audio").src = "notes/" + notes[j]+".wav";
	 audio.play();
}

