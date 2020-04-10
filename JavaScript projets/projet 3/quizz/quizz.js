
function check(){
	
	var question1 = document.quiz.question1.value; //rentrer la valeur de la réponse chosisi par l'user dans une variable
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var correct = 0;


	if (question1 == "jaune") { //  //vérifie que la valeur choisit par l'user = la valeur de la bonne réponse
		correct++;
}
	if (question2 == "bleu") {
		correct++;
}	
	if (question3 == "marron") {
		correct++;
	}
	
	var messages = ["B)", ":)", ":-|", ":/"]; //tableau des message 
	switch (correct) {
		case 0 :
		break;
		case 1 : 
		document.getElementById("after_submit").style.background = "orange"; //faire passer le background de rouge à orange, vert etc.. en fonction du nombre de bonne réponses
		break;
		case 2 : 
		document.getElementById("after_submit").style.background ="blue";
		break;
		case 3 :
		document.getElementById("after_submit").style.background = "green";
	}

	document.getElementById("after_submit").style.visibility = "visible"; // faire passer la visibility de hiden à visible

	document.getElementById("message").innerHTML = messages[3 - correct]; //permet de choisir quel message du tableau sera affecté en focxntion du nombre de bonne réponses
	document.getElementById("number_correct").innerHTML = "tu as " + correct + " bonnes reponses "; //message du nombre de bonne réponses
	}

	