var arr = [];
arr.length = 13;

/*
function play() {
	var audio = document.getElementById("audio");
	var notes = ["C", "D", "E", "F", "G", "A", "B", "Csharp", "Dsharp", "Fsharp", "Gsharp", "Asharp"];
	var j = Math.floor(Math.random() * notes.length);
	document.getElementById("audio").src = "notes/" + notes[j]+".mp3";
	audio.play();
}
*/
function playSound(x) {
	var audio = document.getElementsByClassName("audio");
	audio[x].play();
}


 // store the random notes as a global array so we can access this later
function randomize() {
	if (document.getElementById('random').value == 'Restart'){
		window.location.reload();
	}
	random = []; // reset the array
	var notes = ["C", "D", "E", "F", "G", "A", "B", "Csharp", "Dsharp", "Fsharp", "Gsharp", "Asharp", "C5"];
	var buttonIndex = 0;
	while (notes.length > 0) {
		var i = Math.floor(Math.random() * notes.length); // notes[i] is the chosen note
		random.push(notes[i]); // add the randomly chosen note into random
		document.getElementsByClassName("audio")[buttonIndex].src = "notes/" + notes[i] + ".mp3";
		document.getElementsByClassName("audio")[buttonIndex].id = notes[i];
		document.getElementById(buttonIndex+1+"").id = notes[i];
		buttonIndex++;
		notes.splice(i,1); // delete the chosen note
	}
}


function checkAnswers(){
	var time = 0;

	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == false){
			document.getElementById("answer").innerHTML ="Try Again!";
			resultView(false, "answer");
			break;
		}
		if (i == arr.length -1)
			document.getElementById("answer").innerHTML ="Great Job!!";
			resultView(true, "answer")
	}

	var endd = setInterval(tick, 1000)
	function resultView(result, answer) {
		document.getElementById(answer).style.opacity = "1";
		document.getElementById(answer).style.zIndex = "100";
		if (result == false) {
		document.getElementById(answer).style.backgroundColor = "red";
		} else {
		document.getElementById(answer).style.backgroundColor = "green";
		}
	}

	function tick(){
		if (time == 2) {
		document.getElementById("answer").style.opacity = "0";
		document.getElementById("answer").style.zIndex = "-100";
		clearInterval(endd);

		} else{
			time++;
		}
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
    $('#result1').text(collision($('#C'), $('#slot-C')));
	$('#result2').text(collision($('#D'), $('#slot-D')));
	$('#result3').text(collision($('#E'), $('#slot-E')));
	$('#result4').text(collision($('#F'), $('#slot-F')));
	$('#result5').text(collision($('#G'), $('#slot-G')));
	$('#result6').text(collision($('#A'), $('#slot-A')));
	$('#result7').text(collision($('#B'), $('#slot-B')));
	$('#result8').text(collision($('#Csharp'), $('#slot-Csharp')));
	$('#result9').text(collision($('#Dsharp'), $('#slot-Dsharp')));
	$('#result10').text(collision($('#Fsharp'), $('#slot-Fsharp')));
	$('#result11').text(collision($('#Gsharp'), $('#slot-Gsharp')));
	$('#result12').text(collision($('#Asharp'), $('#slot-Asharp')));
	$('#result13').text(collision($('#C5'), $('#slot-C5')));
	
	arr[0] = collision($('#C'), $('#slot-C'));
	arr[1] = collision($('#D'), $('#slot-D'));
	arr[2] = collision($('#E'), $('#slot-E'));
	arr[3] = collision($('#F'), $('#slot-F'));
	arr[4] = collision($('#G'), $('#slot-G'));
	arr[5] = collision($('#A'), $('#slot-A'));
	arr[6] = collision($('#B'), $('#slot-B'));
	arr[7] = collision($('#Csharp'), $('#slot-Csharp'));
	arr[8] = collision($('#Dsharp'), $('#slot-Dsharp'));
	arr[9] = collision($('#Fsharp'), $('#slot-Fsharp'));
	arr[10] = collision($('#Gsharp'), $('#slot-Gsharp'));
	arr[11] = collision($('#Asharp'), $('#slot-Asharp'));
	arr[12] = collision($('#C5'), $('#slot-C5'));
	
}, 200);

$("random").click(function(){
	alert("hi");
	//document.getElementById("1").style.backgroundColor="blue";
});

$( function() {
    $( ".drag" ).draggable({ cancel: false, snap: ".slot", snapMode: "inner"});
  } );
