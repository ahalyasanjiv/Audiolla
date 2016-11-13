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
    $('#result1').text(collision($('#3'), $('#slot-C')));
		$('#result2').text(collision($('#4'), $('#slot-D')));
		$('#result3').text(collision($('#5'), $('#slot-E')));
		$('#result4').text(collision($('#6'), $('#slot-F')));
		$('#result5').text(collision($('#7'), $('#slot-G')));
		$('#result6').text(collision($('#1'), $('#slot-A')));
		$('#result7').text(collision($('#2'), $('#slot-B')));

		arr[0] = collision($('#3'), $('#slot-C'));
		arr[1] = collision($('#4'), $('#slot-D'));
		arr[2] = collision($('#5'), $('#slot-E'));
		arr[3] = collision($('#6'), $('#slot-F'));
		arr[4] = collision($('#7'), $('#slot-G'));
		arr[5] = collision($('#1'), $('#slot-A'));
		arr[6] = collision($('#2'), $('#slot-B'));
}, 200);

$( function() {
    $( ".drag" ).draggable({ cancel: false, snap: ".slot", snapMode: "inner"});
  } );
