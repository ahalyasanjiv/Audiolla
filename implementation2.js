var arr = [];
arr.length = 7;
function play() {
	var audio = document.getElementById("audio");
	var notes = ["A", "B", "C", "D", "E", "F", "G"];
	var j = Math.floor(Math.random() * notes.length);
	document.getElementById("audio").src = "notes/" + notes[j]+".wav";
	audio.play();
}

function playSound(x) {
	var audio = document.getElementsByClassName("audio");
	audio[0].play();
}

function randomize() {
	var notes = ["A", "B", "C", "D", "E", "F", "G"];
	var letters = ["A", "B", "C", "D", "E", "F", "G"];
	//var buttonIndex = 0;

	for (var i = notes.length -1; i>=0; i--){
		var j = Math.floor(Math.random() * notes.length);
		var temp = notes[i];
		notes[i]=notes[j];
		notes[j]=temp;

	}
	console.log(notes);
	//return notes

	for (var i = 0; i < notes.length; i++) {

		var str=i+"";
		document.getElementById(str).src= "notes/" + notes[i] + ".wav";
		document.getElementById(letters[i]).id=notes[i];
	};
	/*
	for(int i=0;i<notes;i++)
	while (notes.length > 0) {
		var i = Math.floor(Math.random() * notes.length); // notes[i] is the chosen note
		document.getElementsByClassName("audio")[buttonIndex].src = "notes/" + notes[i] + ".wav";
		buttonIndexString= buttonIndex+ "";
		document.getElementById(buttonIndexString).setAttribute("id", notes[i]);
		buttonIndex++;
		notes.splice(i,1); // delete the chosen note
	}
	*/
}

function checkAnswers(){
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == false){
			document.getElementById("answer").innerHTML ="Failed!";
			break;
		}
		if (i == arr.length -1)
			document.getElementById("answer").innerHTML ="Great Job!!";
	}

}

function collision($div1, $div2) {
      var x1 = $div1.offset().left;
      var y1 = $div1.offset().top;
      var h1 = $div1.outerHeight(true);
      var w1 = $div1.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $div2.offset().left;
      var y2 = $div2.offset().top;
      var h2 = $div2.outerHeight(true);
      var w2 = $div2.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;

      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
      return true;
  }
window.setInterval(function() {
    	$('#result1').text(collision($('#A'), $('#slot-A')));
		$('#result2').text(collision($('#B'), $('#slot-B')));
		$('#result3').text(collision($('#C'), $('#slot-C')));
		$('#result4').text(collision($('#D'), $('#slot-D')));
		$('#result5').text(collision($('#E'), $('#slot-E')));
		$('#result6').text(collision($('#F'), $('#slot-F')));
		$('#result7').text(collision($('#G'), $('#slot-G')));

		arr[0] = collision($('#A'), $('#slot-A'));
		arr[1] = collision($('#B'), $('#slot-B'));
		arr[2] = collision($('#C'), $('#slot-C'));
		arr[3] = collision($('#D'), $('#slot-D'));
		arr[4] = collision($('#E'), $('#slot-E'));
		arr[5] = collision($('#F'), $('#slot-F'));
		arr[6] = collision($('#G'), $('#slot-G'));
}, 200);

$( function() {
    $( ".drag" ).draggable({ cancel: false, snap: ".slot", snapMode: "inner"});
  } );
