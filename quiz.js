function results() {

	var total = 0;

	if (localStorage.getItem(1) == 2) {
		total += 2;
	}
	if (localStorage.getItem(2) == 4) {
		total += 2;
	}
	if (localStorage.getItem(3) == 1) {
		total += 2;
	}
	if (localStorage.getItem(4) == 2) {
		total += 2;
	}
	if (localStorage.getItem(5) == 3) {
		total += 2;
	}

	$('#score').html("Your final score is: " + total + " out of 10");
}


function manageQcm(idButon) {

/*	var tmp = "name='q" + idButon + "' ";

	for (var i = 1; i < 5; ++i) {
		var tmp2 = tmp + "value='a" + i + "'";
		if ($(tmp2).isSe)		
	}
*/
	//console.log($( "input:checked" ).val());

	var tmp = "input[name=q" + idButon + "]";
	var tabRadio = $(tmp);

	//console.log(tmp);
	//console.log(tabRadio);

	for (var i = 0; i < tabRadio.length; ++i) {
		if (tabRadio[i].checked == true) {
			localStorage.setItem(idButon, (i+1));
			//console.log(idButon + "|" + (i+1));
			break;
		}
	}

	var now = "#q" + idButon;
	var next =  "#q" + (idButon + 1);

	if (idButon == 5) {
		$(now).hide();
		results();
		$("#final").show();
	} else {
		$(now).hide();
		$(next).show();
	}


}



$(document).ready(
		function() {
			console.log("jQuery is working");
			//$('#output').html("Welcome to jQuery");
			$('#q2').hide();
			$('#q3').hide();
			$('#q4').hide();
			$('#q5').hide();
			$('#final').hide();

			$('#playAgain').click(function (){
				$('#q1').show();
				$('#q2').hide();
				$('#q3').hide();
				$('#q4').hide();
				$('#q5').hide();
				$('#final').hide();
				localStorage.clear();
			});


			localStorage.clear();

			/*$( "input[type=radio]" ).on( "click", function() {
  				console.log( $( "input:checked" ).val() + " is checked!" );
			});*/
});