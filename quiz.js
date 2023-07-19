/*Chioma Eme*/
let quizQ = {
	"Quiz" : [{"question":"1) What colour are my eyes?","correct_answer":"Dark Brown","incorrect_answers":["Brown","Black","Green"]},
    {"question":"2) What colour are your eyes? (You're gonna be wrong)","correct_answer":"Hazel","incorrect_answers":["Green","Blue","Grey"]},
    {"question":"3) What do your eyes remind me of?","correct_answer":"A Sandstorm","incorrect_answers":["Love","The Ocean","Home"]},
    {"question":"4) What is my favourite physical attribute of yours?","correct_answer":"All of the above","incorrect_answers":["Your smile","Your eyes","You"]},
    {"question":"5) What can't I live without?","correct_answer":"Technology","incorrect_answers":["You","Money","Baddies"]},
    {"question":"6) Which Pink Sweat$ song is playing on the homepage video?","correct_answer":"Paradise","incorrect_answers":["At My Worst","Heaven","Honesty"]},
    {"question":"7) What was the first movie we watched together?","correct_answer":"Do Revenge","incorrect_answers":["Spider-Man","She's The Man","The Little Mermaid"]},
	{"question":"8) When is my birthday?","correct_answer":"October 7th","incorrect_answers":["August 10th","October 10th","February 14th"]},
	{"question":"9) Where was our first date?","correct_answer":"Honey","incorrect_answers":["Olea","Ice skating",";) ;) ;)"]},
	{"question":"10) How long until our committment ceremony?","correct_answer":"7 years","incorrect_answers":["10 years","5 years","12 years"]},
	{"question":"11) What is my middle name?","correct_answer":"Mgbo","incorrect_answers":["Elizabeth","Louise","Chioma"]},
	{"question":"12) What is my favourite attribute of yours?","correct_answer":"Everything","incorrect_answers":["Smile","Face","Personality"]},
	{"question":"13) How many kids?","correct_answer":"3","incorrect_answers":["5","0","1"]},
	{"question":"14) You are the most beautiful wxman?","correct_answer":"True","incorrect_answers":["False", "Maybe", "I guess"]},
	{"question":"15) Finish the sentence, they/them causing...","correct_answer":"Mayhem","incorrect_answers":["Chaos","Happiness","Debates"]},
	{"question":"16) What is my secret love language?","correct_answer":"Cracking toes","incorrect_answers":["Giving gifts","Happiness","Debates"]},
	{"question":"17) Rate this quiz","correct_answer":"10/10","incorrect_answers":["1/10", "5/10","70%"]}]	
}

let quiz = document.createElement('p');
quiz.id = "quiz";
document.body.appendChild(quiz);

let selectedoption = document.getElementsByTagName("option");
let element = document.createElement('br');

function load() {

	// Extension that adds audio into the page that automatically plays a song.
	let audio = document.createElement('audio');
	audio.id = "autoplay"
	/* controls lets you see when the song would end, and lets the user also not make use
	 of the event handler as when song is paused, the ended condition would not be met.
	 For TA use i have left the controls showing so that they could pause or mute the music if annoying.*/
	//audio.controls = true;
	audio.autoplay = true;
  let source = document.createElement('source');
	source.id = "music";
  source.src = "music.mp3";
  source.type = "audio/mpeg";
  audio.appendChild(source);
	// Event listener that makes the audio also act as a timer such that, when the song ends,
	// you are alerted that you did not finish the test on time and all your answers will be cleared.
	audio.addEventListener('ended', (event) =>{
		alert("Time's Up. \nYou did not complete the quiz before the song ended :(");
		clearfunction2();
		tryAgain();
	});


    for (i = 0; i < selectedoption.length; i++){
        if (selectedoption.item(i).selected == true && selectedoption.item(i).id == "0") {
            window.alert("Good choice love :)");
            let page = document.getElementById("question");
            page.innerHTML = null;

            let amt_of_questions = quizQ["Quiz"].length;

            for (let j = 0; j < amt_of_questions; j++){
				let questions = document.createElement("p");
				questions.id = "divForQ"
				let showquestion = document.createElement('div');
				showquestion.id = "quest"
				showquestion.innerHTML = quizQ["Quiz"][j]["question"];
				questions.appendChild(showquestion);
				//for loop gets all the incorrect_answers and puts them into new label elements and appends
				//it to parentNode (questions, p element). Adds input type radio as well to match up with
				//position of label.
				amt_of_ans = quizQ["Quiz"][j]["incorrect_answers"].length;

				for (let l = 0; l < amt_of_ans; l++ ){
					let radio = document.createElement("input");
					radio.type = "radio";
					radio.name = j;
					questions.appendChild(radio);
					let options = document.createElement("label");
					let newl = document.createElement('br');
					options.innerHTML = quizQ["Quiz"][j]["incorrect_answers"][l];
					questions.appendChild(options);
					questions.appendChild(newl);
				}
				// Creates an input type radio to match up with label for correct answer and stores the label
				// as the correct answer.
				let radio = document.createElement("input");
				radio.type = "radio";
				radio.name = j;
				let options = document.createElement("label");
				options.innerHTML = quizQ["Quiz"][j]["correct_answer"];
				options.id = "correct";
				questions.appendChild(radio);
				questions.appendChild(options);
				quiz.appendChild(questions);

				// Clones a random answer and then replaces the 'correct_answer' with clone and switches their places.
				let randomize = questions.getElementsByTagName('label');
				let f = Math.floor(Math.random()*(randomize.length));
				let clone = randomize.item(f).cloneNode(true);
				old = randomize.item(randomize.length-1);
				questions.replaceChild(clone, old);
				questions.replaceChild(old, randomize.item(f));
            }
			i++;
        }
        else {
            window.alert("EHHHH WRONG ANSWER FOREHEAD!");
        }
    }

	//Add a new "Clear Test" button that implements clearfunction
	let clear = document.createElement('button');
	clear.onclick="click()";
	clear.innerHTML = "Clear Test";
	clear.addEventListener("click", clearfunction);
	quiz.appendChild(clear);

	// Add a new "Check Test" button that implements checkfunction
	let check = document.createElement('button');
	check.onclick="check()";
	check.innerHTML = "Check Test";
	check.addEventListener("click", checkfunction);
	quiz.appendChild(check);
 
}

function clearfunction() {
	// Gets the section of the page
	let quiz = document.getElementById('quiz');
	let radios = quiz.getElementsByTagName('input');
	let audio = document.getElementById('autoplay');
	let images = document.getElementsByTagName('IMG');
	let questions = document.getElementsByTagName('div');
	//Gets confirmation from user that it is wanted.
	let clear = confirm("Are you sure you want to clear all selected answers?");
	if (clear == true){
		let label = quiz.getElementsByTagName('label');
		for (let j = 0; j < questions.length; j++){
			if (questions.item(j).style.color !=null){
				questions.item(j).style.color = "";}}
		for (let i = 0; i < label.length; i++){
			if (radios.item(i).checked == true){
				radios.item(i).checked = false;
				if (label.item(i).getElementsByTagName('IMG').length > 0){
					label.item(i).removeChild(images.item(0));
				}
			}
		}
		if (document.getElementById('quiz_result')!=null){quiz.removeChild(document.getElementById('quiz_result'));}
		if (document.getElementById('contain')!=null){quiz.removeChild(document.getElementById('contain'));}
	}
}

// clear function for the event handler that clears all selected answers without prompt from user
// as a result of timer(audio) having reached it end.
function clearfunction2() {
	let quiz = document.getElementById('quiz');
	let radios = quiz.getElementsByTagName('input');
	let audio = document.getElementById('autoplay');
	let images = document.getElementsByTagName('IMG');
	let questions = document.getElementsByTagName('div');
	let label = quiz.getElementsByTagName('label');

	for (let j = 0; j < questions.length; j++){
		if (questions.item(j).style.color !=null){
			questions.item(j).style.color = "";}}
	for (let i = 0; i < label.length; i++){
		if (radios.item(i).checked == true){
			radios.item(i).checked = false;
			if (label.item(i).getElementsByTagName('IMG').length > 0){
				label.item(i).removeChild(images.item(0));
			}
		}
	}
	if (document.getElementById('quiz_result')!=null){quiz.removeChild(document.getElementById('quiz_result'));}
	if (document.getElementById('contain')!=null){quiz.removeChild(document.getElementById('contain'));}
}

// Function to check answers on quiz.
function checkfunction(){
	let quiz = document.getElementById('quiz');
	let radios = quiz.getElementsByTagName('input');
	let label = quiz.getElementsByTagName('label');
	let questions = document.getElementsById('quest');
	let results = document.createElement("p");
	let count = 0;
	let correct = 0;

	// For loop goes through all the questions in the quiz
	for (let i = 0; i<questions.length; i++){
		let answered = 0;
		// For loop goes through each radio item in specified question and checks if their checked,
		// if they are checked, checks to see if corresponding label is the correct answer.
		for (let j = 0; j <radios.length; j++){
			if ((radios.item(j).name == i) && (radios.item(j).checked == true)){
				answered ++;
	 			if (label.item(j).id == "correct"){correct++;}
			}
		}
		// If else statement keeps track of all the questions not answered.
		if (answered == 0){
			questions.item(i).style.color = "red";
			count++;
		}
		else {questions.item(i).style.color = "";}
	}

	// If there are any questions not answered
	if (count != 0){alert("You must answer all questions before checking the test")}
	else {
		// Checks to see if there are images on the page, checks & x's and then removes them,
		// goes through each label element(which are all answers) and checks if they have an image
		// as a child node, if they do then remove them and removes the quiz results as well.
		let images = document.getElementsByTagName('IMG');
		if (images.length > 0){
			let i = 0;
			for (let s = 0; s < label.length; s++){
				if (label.item(s).getElementsByTagName('IMG').length > 0){
					label.item(s).removeChild(images.item(0));
				}
			}
			quiz.removeChild(document.getElementById('quiz_result'));
			// removes the animated extension and changes music back to original music.
			if (document.getElementById('contain') != null){
				quiz.removeChild(document.getElementById('contain'));
				let music = document.getElementById('autoplay');
			  music2 = music.cloneNode();
			  music2.src = "music.mp3";
			  let replace = document.getElementById('quiz');
			  replace.replaceChild(music2, music);
			}
		}
		// for loop adds the checkmarks and x's for current answers selected.
		for (let i = 0; i < label.length; i++){
			let checkmark = document.createElement('IMG');
			checkmark.style ="width:12px;height:12px;"

			if ((radios.item(i).checked == true) && (label.item(i).id == "correct")){
				checkmark.src="check.png";
				label.item(i).appendChild(checkmark);
			}
			else if ((radios.item(i).checked == true) && (label.item(i).id != "correct")){
				checkmark.src="x.png";
				label.item(i).appendChild(checkmark);
			}
		}
		// Adds the quiz results to the page.
		results.id = "quiz_result";
		results.innerHTML = "You got " + correct +"/" + questions.length + " on this quiz Quiz.";
		quiz.appendChild(results);
		//Extension that animates a picture of the word congrats and changes the audio
		// to congratulstions song if they got 70% or more on the quiz.
		if ((correct/questions.length) >=(0.7)){animate();}
	}
}

function tryAgain(){
	window.open("quiz.html");
}

