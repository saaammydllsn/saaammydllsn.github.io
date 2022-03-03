const QUITB= document.getElementById('quit');
const PAGE1= document.getElementById('page1');
const PAGE2= document.getElementById('page2');
const MAIN= document.getElementById('main');
const TRANS1= document.getElementById('trans1');
const TRANS2= document.getElementById('trans2');
const TRANS3= document.getElementById('trans3');
const BLACKOUT=document.getElementById('blackout');
const POPUP=document.getElementById('popup');
const HIGHSCORESLIST=document.getElementById('highscoreslist');
const HOWTO=document.getElementById('howto');
const SCI5=document.getElementById('sci5');
const SCI5SCORE=document.getElementById('sci5score');
const ENG5=document.getElementById('eng5');
const ENG5SCORE=document.getElementById('eng5score');
const TRIV5=document.getElementById('triv5');
const TRIV5SCORE=document.getElementById('triv5score');
const SHOWCATEGORY=document.getElementById('showcategory');

var cat="";
var qlist="";
var qcount_easy=0;
var qcount_ave=0;
var qcount_diff=0;
var level="";
var score=0;

function STARTQUIZ() {
	PAGE1.classList.add('hide');
	PAGE2.classList.remove('hide');
	console.log('Game has started');
}


function SCIENCE(){
	PAGE2.classList.add('hide');
	TRANS1.classList.remove('hide');
	setTimeout(EASYtoMAIN,3000);
	cat="Science";
}
function ENGLISH(){
	PAGE2.classList.add('hide');
	TRANS1.classList.remove('hide');
	setTimeout(EASYtoMAIN,3000);
	cat="English";
}
function TRIVIA(){
	PAGE2.classList.add('hide');
	TRANS1.classList.remove('hide');
	setTimeout(EASYtoMAIN,3000);
	cat="Trivia";
}


function EASYtoMAIN() {
	TRANS1.classList.add('hide');
	MAIN.classList.remove('hide');
	if (cat==="Science"){
		qlist=EASYSCIENCE;
		level="Easy";
		SHOWQUES();
	} else if (cat==="English"){
		qlist=EASYENGLISH;
		level="Easy";
		SHOWQUES();
	} else if (cat==="Trivia"){
		qlist=EASYTRIVIA;
		level="Easy";
		SHOWQUES();
	}	 
}
function AVERAGEtoMAIN() {
	TRANS2.classList.add('hide');
	MAIN.classList.remove('hide');
	if (cat==="Science"){
		qlist=AVESCIENCE;
		level="Average";
		SHOWQUES();
	} else if (cat==="English"){
		qlist=AVEENGLISH;
		level="Average";
		SHOWQUES();
	} else if (cat==="Trivia"){
		qlist=AVETRIVIA;
		level="Average";
		SHOWQUES();
	}	 
}
function DIFFICULTtoMAIN() {
	TRANS3.classList.add('hide');
	MAIN.classList.remove('hide');
	if (cat==="Science"){
		qlist=DIFFSCIENCE;
		level="Difficult";
		SHOWQUES();
	} else if (cat==="English"){
		qlist=DIFFENGLISH;
		level="Difficult";
		SHOWQUES();
	} else if (cat==="Trivia"){
		qlist=DIFFTRIVIA;
		level="Difficult";
		SHOWQUES();
	}	 
}


function SHOWQUES(){
	RESETBUTTONS();

	SHOWCATEGORY.textContent="CATEGORY:  "+cat+"		LEVEL:  "+level;

	if (level==="Easy"){
		if (qcount_easy<10){
			var question=document.getElementById('question');
			question.textContent=qlist[qcount_easy].question;

			var ans1=document.getElementById('ans1');
			ans1.textContent=qlist[qcount_easy].answers[0].text;

			var ans2=document.getElementById('ans2');
			ans2.textContent=qlist[qcount_easy].answers[1].text;
			
			var ans3=document.getElementById('ans3');
			ans3.textContent=qlist[qcount_easy].answers[2].text;
			
			var ans4=document.getElementById('ans4');
			ans4.textContent=qlist[qcount_easy].answers[3].text;
		} else {
			MAIN.classList.add('hide');
			TRANS2.classList.remove('hide');
			setTimeout(AVERAGEtoMAIN,3000);
			console.log('CURRENT SCORE: '+score);
		}
	}
	else if (level==="Average"){
		if (qcount_ave<5){
			var question=document.getElementById('question');
			question.textContent=qlist[qcount_ave].question;

			var ans1=document.getElementById('ans1');
			ans1.textContent=qlist[qcount_ave].answers[0].text;

			var ans2=document.getElementById('ans2');
			ans2.textContent=qlist[qcount_ave].answers[1].text;
			
			var ans3=document.getElementById('ans3');
			ans3.textContent=qlist[qcount_ave].answers[2].text;
			
			var ans4=document.getElementById('ans4');
			ans4.textContent=qlist[qcount_ave].answers[3].text;
		} else {
			MAIN.classList.add('hide');
			TRANS3.classList.remove('hide');
			setTimeout(DIFFICULTtoMAIN,3000);
			console.log('CURRENT SCORE: '+score);
		}
	}
	else if (level==="Difficult"){
		if (qcount_diff<3){
			var question=document.getElementById('question');
			question.textContent=qlist[qcount_diff].question;

			var ans1=document.getElementById('ans1');
			ans1.textContent=qlist[qcount_diff].answers[0].text;

			var ans2=document.getElementById('ans2');
			ans2.textContent=qlist[qcount_diff].answers[1].text;
			
			var ans3=document.getElementById('ans3');
			ans3.textContent=qlist[qcount_diff].answers[2].text;
			
			var ans4=document.getElementById('ans4');
			ans4.textContent=qlist[qcount_diff].answers[3].text;
		} else {
			console.log('CURRENT SCORE: '+score);
			var tellscore=document.getElementById('tellscore');
			tellscore.textContent="You got a score of "+score+"!";
			POPUP.classList.remove('hide');
			BLACKOUT.classList.remove('hide');
		}
	}
}

function CHECK1() {
	if (level==="Easy"){
		if (qlist[qcount_easy].answers[0].correct){
			ans1.style.backgroundColor="#62c370";
			ans1.style.borderColor="#49a757";
			score=score+1;
		} else{
			ans1.style.backgroundColor="#E63946";
			ans1.style.borderColor="#bc3951";
			score=score-1;
		}

		ans1.setAttribute('disabled','disabled');
		DISABLE2();
		DISABLE3();
		DISABLE4();

		qcount_easy=qcount_easy+1;
	}

	else if (level==="Average"){
		if (qlist[qcount_ave].answers[0].correct){
			ans1.style.backgroundColor="#62c370";
			ans1.style.borderColor="#49a757";
			score=score+3;
		} else{
			ans1.style.backgroundColor="#E63946";
			ans1.style.borderColor="#bc3951";
			score=score-3;
		}

		ans1.setAttribute('disabled','disabled');
		DISABLE2();
		DISABLE3();
		DISABLE4();

		qcount_ave=qcount_ave+1;
	}

	else if (level==="Difficult"){
		if (qlist[qcount_diff].answers[0].correct){
			ans1.style.backgroundColor="#62c370";
			ans1.style.borderColor="#49a757";
			score=score+5;

		} else{
			ans1.style.backgroundColor="#E63946";
			ans1.style.borderColor="#bc3951";
			score=score-5;
		}

		ans1.setAttribute('disabled','disabled');
		DISABLE2();
		DISABLE3();
		DISABLE4();

		qcount_diff=qcount_diff+1;
	}

	setTimeout(SHOWQUES,1000);
}
function CHECK2() {
	if (level==="Easy"){
		if (qlist[qcount_easy].answers[1].correct){
			ans2.style.backgroundColor="#62c370";
			ans2.style.borderColor="#49a757";
			score=score+1;
		} else{
			ans2.style.backgroundColor="#E63946";
			ans2.style.borderColor="#bc3951";
			score=score-1;
		}

		ans2.setAttribute('disabled','disabled');
		DISABLE1();
		DISABLE3();
		DISABLE4();

		qcount_easy=qcount_easy+1;
	}
	else if (level==="Average"){
		if (qlist[qcount_ave].answers[1].correct){
			ans2.style.backgroundColor="#62c370";
			ans2.style.borderColor="#49a757";
			score=score+3;
		} else{
			ans2.style.backgroundColor="#E63946";
			ans2.style.borderColor="#bc3951";
			score=score-3;
		}

		ans2.setAttribute('disabled','disabled');
		DISABLE1();
		DISABLE3();
		DISABLE4();

		qcount_ave=qcount_ave+1;
	}
	else if (level==="Difficult"){
		if (qlist[qcount_diff].answers[1].correct){
			ans2.style.backgroundColor="#62c370";
			ans2.style.borderColor="#49a757";
			score=score+5;
		} else{
			ans2.style.backgroundColor="#E63946";
			ans2.style.borderColor="#bc3951";
			score=score-5;
		}

		ans2.setAttribute('disabled','disabled');
		DISABLE1();
		DISABLE3();
		DISABLE4();

		qcount_diff=qcount_diff+1;
	}

	setTimeout(SHOWQUES,1000);
}
function CHECK3() {
	if (level==="Easy"){
		if (qlist[qcount_easy].answers[2].correct){
			ans3.style.backgroundColor="#62c370";
			ans3.style.borderColor="#49a757";
			score=score+1;
		} else{
			ans3.style.backgroundColor="#E63946";
			ans3.style.borderColor="#bc3951";
			score=score-1;
		}

		ans3.setAttribute('disabled','disabled');
		DISABLE1();
		DISABLE2();
		DISABLE4();

		qcount_easy=qcount_easy+1;
	}
	else if (level==="Average"){
		if (qlist[qcount_ave].answers[2].correct){
			ans3.style.backgroundColor="#62c370";
			ans3.style.borderColor="#49a757";
			score=score+3;
		} else{
			ans3.style.backgroundColor="#E63946";
			ans3.style.borderColor="#bc3951";
			score=score-3;
		}

		ans3.setAttribute('disabled','disabled');
		DISABLE1();
		DISABLE2();
		DISABLE4();

		qcount_ave=qcount_ave+1;
	}
	else if (level==="Difficult"){
		if (qlist[qcount_diff].answers[2].correct){
			ans3.style.backgroundColor="#62c370";
			ans3.style.borderColor="#49a757";
			score=score+5;
		} else{
			ans3.style.backgroundColor="#E63946";
			ans3.style.borderColor="#bc3951";
			score=score-5;
		}

		ans3.setAttribute('disabled','disabled');
		DISABLE1();
		DISABLE2();
		DISABLE4();

		qcount_diff=qcount_diff+1;
	}	
	setTimeout(SHOWQUES,1000);
}
function CHECK4() {
	if (level==="Easy"){
		if (qlist[qcount_easy].answers[3].correct){
			ans4.style.backgroundColor="#62c370";
			ans4.style.borderColor="#49a757";
			score=score+1;
		} else{
			ans4.style.backgroundColor="#E63946";
			ans4.style.borderColor="#bc3951";
			score=score-1;
		}

		ans4.setAttribute('disabled','disabled');
		DISABLE1();
		DISABLE2();
		DISABLE3();

		qcount_easy=qcount_easy+1;
	}
	else if (level==="Average"){
		if (qlist[qcount_ave].answers[3].correct){
			ans4.style.backgroundColor="#62c370";
			ans4.style.borderColor="#49a757";
			score=score+3;
		} else{
			ans4.style.backgroundColor="#E63946";
			ans4.style.borderColor="#bc3951";
			score=score-3;
		}

		ans4.setAttribute('disabled','disabled');
		DISABLE1();
		DISABLE2();
		DISABLE3();

		qcount_ave=qcount_ave+1;
	}
	else if (level==="Difficult"){
		if (qlist[qcount_diff].answers[3].correct){
			ans4.style.backgroundColor="#62c370";
			ans4.style.borderColor="#49a757";
			score=score+5;
		} else{
			ans4.style.backgroundColor="#E63946";
			ans4.style.borderColor="#bc3951";
			score=score-5;
		}

		ans4.setAttribute('disabled','disabled');
		DISABLE1();
		DISABLE2();
		DISABLE3();

		qcount_diff=qcount_diff+1;
	}	
	setTimeout(SHOWQUES,1000);
}


function SKIP(){
	if (level==="Easy"){
		qcount_easy=qcount_easy+1;
	}else if (level==="Average"){
		qcount_ave=qcount_ave+1;
	}else if (level==="Difficult"){
		qcount_diff=qcount_diff+1;
	}
	SHOWQUES();
}


function DISABLE1(){
	ans1.setAttribute('disabled','disabled');
	ans1.classList.remove('btn');
	ans1.style.backgroundColor="#461A42"
	ans1.style.borderColor="#461A42";
	ans1.style.color="#461A42";
}
function DISABLE2(){
	ans2.setAttribute('disabled','disabled');
	ans2.classList.remove('btn');
	ans2.style.backgroundColor="#461A42"
	ans2.style.borderColor="#461A42";
	ans2.style.color="#461A42";
}
function DISABLE3(){
	ans3.setAttribute('disabled','disabled');
	ans3.classList.remove('btn');
	ans3.style.backgroundColor="#461A42"
	ans3.style.borderColor="#461A42";
	ans3.style.color="#461A42";
}
function DISABLE4(){
	ans4.setAttribute('disabled','disabled');
	ans4.classList.remove('btn');
	ans4.style.backgroundColor="#461A42"
	ans4.style.borderColor="#461A42";
	ans4.style.color="#461A42";
}


function RESETBUTTONS(){
	ans1.removeAttribute('disabled');
	ans2.removeAttribute('disabled');
	ans3.removeAttribute('disabled');
	ans4.removeAttribute('disabled');
	ans1.classList.add('btn');
	ans2.classList.add('btn');
	ans3.classList.add('btn');
	ans4.classList.add('btn');
	ans1.style.backgroundColor="#2F6DAE";
	ans1.style.borderColor="#275488";
	ans1.style.color="white";
	ans2.style.backgroundColor="#2c9ca6";
	ans2.style.borderColor="#247780";
	ans2.style.color="white";
	ans3.style.backgroundColor="#eca82c";
	ans3.style.borderColor="#cb8a1c";
	ans3.style.color="white";
	ans4.style.backgroundColor="#d4546a";
	ans4.style.borderColor="#bc3951";
	ans4.style.color="white";
}
function RESET(){
	MAIN.classList.add('hide');
	PAGE1.classList.remove('hide');
	cat="";
	qlist="";
	qcount_easy=0;
	qcount_ave=0;
	qcount_diff=0;
	level="";
	score=0;
	EASYSCIENCE.sort((a,b)=> 0.5 - Math.random());
	AVESCIENCE.sort((a,b)=> 0.5 - Math.random());
	DIFFSCIENCE.sort((a,b)=> 0.5 - Math.random());
	EASYENGLISH.sort((a,b)=> 0.5 - Math.random());
	AVEENGLISH.sort((a,b)=> 0.5 - Math.random());
	DIFFENGLISH.sort((a,b)=> 0.5 - Math.random());
	EASYTRIVIA.sort((a,b)=> 0.5 - Math.random());
	AVETRIVIA.sort((a,b)=> 0.5 - Math.random());
	DIFFTRIVIA.sort((a,b)=> 0.5 - Math.random());
	console.log('Game has been reset')
}

const SCIENCESCORES = JSON.parse(localStorage.getItem("SCIENCESCORES")) || [];
const ENGLISHSCORES = JSON.parse(localStorage.getItem("ENGLISHSCORES")) || [];
const TRIVIASCORES = JSON.parse(localStorage.getItem("TRIVIASCORES")) || [];

function SAVE(){
	var name= document.getElementById('name').value;

	if (name.length===0){
		const game1={
			username: "no name",
			userscore: score
		};
		if (cat==="Science"){
			SCIENCESCORES.push(game1);
		}else if (cat==="English"){
			ENGLISHSCORES.push(game1);
		}else if (cat==="Trivia"){
			TRIVIASCORES.push(game1);
		}
		console.log("no name: "+score)
	}
	else{
		const game2={
			username: name,
			userscore: score
		};
		if (cat==="Science"){
			SCIENCESCORES.push(game2);
		}else if (cat==="English"){
			ENGLISHSCORES.push(game2);
		}else if (cat==="Trivia"){
			TRIVIASCORES.push(game2);
		}
		console.log(name+":  "+score)
	}

	SCIENCESCORES.sort(function(a,b){
		return b.userscore - a.userscore;
	});
	ENGLISHSCORES.sort(function(a,b){
		return b.userscore - a.userscore;
	});
	TRIVIASCORES.sort(function(a,b){
		return b.userscore - a.userscore;
	});	

	SCIENCESCORES.splice(5);
	ENGLISHSCORES.splice(5);
	TRIVIASCORES.splice(5);

	localStorage.setItem("SCIENCESCORES",JSON.stringify(SCIENCESCORES));
	localStorage.setItem("ENGLISHSCORES",JSON.stringify(ENGLISHSCORES));
	localStorage.setItem("TRIVIASCORES",JSON.stringify(TRIVIASCORES));

	POPUP.classList.add('hide');
	BLACKOUT.classList.add('hide');
	RESET();
} 

function HIGHSCORES(){
	BLACKOUT.classList.remove('hide');
	HIGHSCORESLIST.classList.remove('hide');

	SCI5.innerHTML=SCIENCESCORES.map(scinames =>{
		return '<li>'+scinames.username+'</li>';
	}).join('');
	SCI5SCORE.innerHTML=SCIENCESCORES.map(sciscores =>{
		return '<li>'+sciscores.userscore+'</li>';
	}).join('');

	ENG5.innerHTML=ENGLISHSCORES.map(engnames =>{
		return '<li>'+engnames.username+'</li>';
	}).join('');	
	ENG5SCORE.innerHTML=ENGLISHSCORES.map(engscores =>{
		return '<li>'+engscores.userscore+'</li>';
	}).join('');

	TRIV5.innerHTML=TRIVIASCORES.map(trivnames =>{
		return '<li>'+trivnames.username+'</li>';
	}).join('');
	TRIV5SCORE.innerHTML=TRIVIASCORES.map(trivscores =>{
		return '<li>'+trivscores.userscore+'</li>';
	}).join('');
}

function HOWTOPLAY(){
	BLACKOUT.classList.remove('hide');
	HOWTO.classList.remove('hide');
}

function EXIT1(){
	BLACKOUT.classList.add('hide');
	HIGHSCORESLIST.classList.add('hide');
}
function EXIT2(){
	BLACKOUT.classList.add('hide');
	HOWTO.classList.add('hide');
}
 
/*------------------QUESTIONS------------------*/

const EASYSCIENCE = [
  {question:"The thinnest layer of the earth is the ____.",
   answers: [
      { text: 'crust', correct: true },
      { text: 'mantle', correct: false },
      { text: 'outer core', correct: false },
      { text: 'inner core', correct: false }]},

  {question: "The main cause of the presence of seasons on earth is the earth\'s ____.",
   answers: [
      { text: 'tilt', correct: true },
      { text: 'rotation', correct: false },
      { text: 'revolution', correct: false },
      { text: 'shape', correct: false }]},

  {question:"The point when the sun is at its highest in the sky is called ____.",
   answers: [
      { text: 'horizon', correct: false },
      { text: 'zenith', correct: true },
      { text: 'sunset', correct: false },
      { text: 'sunrise', correct: false }]},

  {question:"Which layer of the earth is believed to be in the liquid state?",
   answers: [
      { text: 'Crust ', correct: false },
      { text: 'Mantle', correct: false },
      { text: 'Outer core', correct: true },
      { text: 'Inner core', correct: false }]},

  {question:"Which of the following causes the metamorphism of a rock?",
   answers: [
      { text: 'Continuously running water', correct: false },
      { text: 'Extremely high temperature and pressure', correct: true },
      { text: 'Giant sea waves', correct: false },
      { text: 'Volcanic eruption', correct: false }]},

  {question:"The ____ is the site of protein synthesis.",
   answers: [
      { text: 'Vacuole', correct: false },
      { text: 'Ribosome', correct: true },
      { text: 'Lysosome', correct: false },
      { text: 'Peroxisome', correct: false }]},

  {question:"It enables the movement of internal body parts as well as the movement of the whole body.",
   answers: [
      { text: 'Skeletal System', correct: false },
      { text: 'Nervous System', correct: false },
      { text: 'Muscular System', correct: true },
      { text: 'Integumentary System', correct: false }]},

  {question:"Which of the following allows air to pass into the lungs?",
   answers: [
      { text: 'Aorta', correct: false },
      { text: 'Esophagus', correct: false },
      { text: 'Heart', correct: false },
      { text: 'Trachea', correct: true }]},

  {question:"Which one of these is NOT a cell organelle?",
   answers: [
      { text: 'Cytoplasm', correct: true },
      { text: 'Mitochondrion', correct: false },
      { text: 'Lysosome', correct: false },
      { text: 'Endoplasmic Reticulum', correct: false }]},

  {question:"We believe the beginnings of life on earth took place in the ____.",
   answers: [
      { text: 'air', correct: false },
      { text: 'land masses', correct: false },
      { text: 'shallow oceans', correct: true },
      { text: 'glaciers', correct: false }]},

  {question:"Octopus and squid belong to the class of molluscs known as ____.",
   answers: [
      { text: 'cephalopoda', correct: true },
      { text: 'bivalvia', correct: false },
      { text: 'gastropoda', correct: false },
      { text: 'polyplacophora', correct: false }]},

  {question:"Sponges are included in which of the following phyla? ",
   answers: [
      { text: 'Cnidaria', correct: false },
      { text: 'Porifera ', correct: true },
      { text: 'Reptilia', correct: false },
      { text: 'Foraminifera', correct: false }]},

  {question:"All of the following are characteristic of amphibians EXCEPT what?",
   answers: [
      { text: 'moist skin ', correct: false },
      { text: 'the absence of scales ', correct: false },
      { text: 'metamorphosis', correct: false },
      { text: 'live in salt water', correct: true }]},

  {question:"In flowers the terminal part of a stamen, containing the pollen sacs is known as the ____.",
   answers: [
      { text: 'anther', correct: true },
      { text: 'style', correct: false },
      { text: 'filament', correct: false },
      { text: 'pistil', correct: false }]},

  {question:"The smallest of the FORMED elements of the blood are the ____.",
   answers: [
      { text: 'white cells ', correct: false },
      { text: 'red cells ', correct: false },
      { text: 'platelets ', correct: true },
      { text: 'erythrocytes', correct: false }]},

  {question:"Cariology is the study of the ___.",
   answers: [
      { text: 'human heart', correct: false },
      { text: 'tooth decay', correct: true },
      { text: 'kidneys ', correct: false },
      { text: 'liver', correct: false }]},

  {question:"Which of the following are NOT part of a neuron?",
   answers: [
      { text: 'synapse', correct: true },
      { text: 'axon', correct: false },
      { text: 'Nissl bodies', correct: false },
      { text: 'dendrite', correct: false }]},

  {question:"Fertilization of the ovum by the sperm usually occurs in the ____.",
   answers: [
      { text: 'oviduct', correct: true },
      { text: 'vagina ', correct: false },
      { text: 'uterus ', correct: false },
      { text: 'ovary', correct: false }]},

  {question:"Phalanges are found in the ____.",
   answers: [
      { text: 'skull', correct: false },
      { text: 'hip ', correct: false },
      { text: 'chest  ', correct: false },
      { text: 'feet', correct: true }]},

  {question:"Which structure does NOT play a part in the motion of cells? ",
   answers: [
      { text: 'microvilli', correct: true },
      { text: 'cilia ', correct: false },
      { text: 'flagella  ', correct: false },
      { text: 'pseudopodia', correct: false }]},

  {question:"Bacteriophage are _____.",
   answers: [
      { text: 'Bacteria', correct: false },
      { text: 'bacteria precursors', correct: false },
      { text: 'viruses  ', correct: true },
      { text: 'agents which cause the production of bacteria', correct: false }]},

  {question:"Which of the following is NOT a function of the kidney?",
   answers: [
      { text: 'excretion of urea ', correct: false },
      { text: 'regulation of fluids and electrolytes ', correct: false },
      { text: 'elimination of toxic substances', correct: false },
      { text: 'defecation', correct: true }]},

  {question:"Which stage of the cell cycle does chromosome replication occur?",
   answers: [
      { text: 'Interphase', correct: true },
      { text: 'Mitosis', correct: false },
      { text: 'Cytokinesis', correct: false },
      { text: 'Cytoplasmic division', correct: false }]},

  {question:"Which of the following has 4 valence electrons?",
   answers: [
      { text: 'Beryllium', correct: false },
      { text: 'Boron', correct: false },
      { text: 'Carbon', correct: true },
      { text: 'Lithium', correct: false }]},

  {question:"All of the following are general properties of metals EXCEPT _____.",
   answers: [
      { text: 'ductility', correct: false },
      { text: 'capillarity', correct: true },
      { text: 'luster', correct: false },
      { text: 'malleability', correct: false }]},

  {question:"Which of the following is an example of a brittle substance?",
   answers: [
      { text: 'chalk', correct: true },
      { text: 'paper', correct: false },
      { text: 'rubber band', correct: false },
      { text: 'sponge', correct: false }]},

  {question:"All of the following are evidences of chemical change EXCEPT _____.",
   answers: [
      { text: 'change in color', correct: false },
      { text: 'change in shape', correct: true },
      { text: 'evolution of gas', correct: false },
      { text: 'production of a solid or precipitate', correct: false }]},

  {question:"All of the following are examples of physical change EXCEPT _____.",
   answers: [
      { text: 'Boiling of tea', correct: false },
      { text: 'evaporation of alcohol', correct: false },
      { text: 'baking of bread', correct: true },
      { text: 'sublimation of moth balls', correct: false }]},

  {question:"The largest circular storm in our solar system is on the surface of which of the following planets?",
   answers: [
      { text: 'Jupiter', correct: true },
      { text: 'Venus', correct: false },
      { text: 'Uranus', correct: false },
      { text: 'Earth', correct: false }]},

  {question:"The tail of a comet points in which direction? ",
   answers: [
      { text: 'toward the sun', correct: false },
      { text: 'toward the earth', correct: false },
      { text: 'behind the comet in its orbit', correct: false },
      { text: 'away from the sun', correct: true }]},

  {question:"The study of the origin and evolution of the universe is known as ____.",
   answers: [
      { text: 'tomography', correct: false },
      { text: 'cystoscopy', correct: false },
      { text: 'cryology', correct: false },
      { text: 'cosmology', correct: true }]}
]
EASYSCIENCE.sort((a,b)=> 0.5 - Math.random());

const AVESCIENCE =[
	{question:"The layer of the earth which is composed of iron and nickel is the ____.",
   	answers: [
      { text: 'core', correct: true },
      { text: 'mantle', correct: false },
      { text: 'crust', correct: false },
      { text: 'Moho', correct: false }]},
	{question:"All of the following are solutions EXCEPT ____.",
   	answers: [
      { text: 'vinegar', correct: false },
      { text: 'air', correct: false },
      { text: 'juice', correct: false },
      { text: 'gelatin', correct: true }]},
	{question:"Which of the following substances takes both the shape and volume of its container?",
   	answers: [
      { text: 'Alcohol', correct: false },
      { text: 'Helium', correct: true },
      { text: 'Mercury', correct: false },
      { text: 'Zinc', correct: false }]},
	{question:"The most abundant state of matter in the universe is ____.",
   	answers: [
      { text: 'gas', correct: false },
      { text: 'liquid', correct: false },
      { text: 'solid', correct: false },
      { text: 'plasma', correct: true }]},
	{question:"Which of the following terms describes the ability of the body to maintain its normal state?",
   	answers: [
      { text: 'Catabolism', correct: false },
      { text: 'Tolerance', correct: false },
      { text: 'Homeostasis', correct: true },
      { text: 'Metabolism', correct: false }]},
	{question:"Which of the following cavities are separated by the diaphragm?",
   	answers: [
      { text: 'Abdominal and pelvic', correct: false },
      { text: 'Cranial and spinal', correct: false },
      { text: 'Dorsal and ventral', correct: false },
      { text: 'Thoracic and abdominal', correct: true }]},
	{question:"Which of the following controls body temperature, sleep, and appetite?",
   	answers: [
      { text: 'Adrenal glands', correct: false },
      { text: 'Hypothalamus', correct: true },
      { text: 'Pancreas', correct: false },
      { text: 'Thyroid gland', correct: false }]},
  	{question:"The chromosomes responsible for characteristics other than sex are known by which of the following terms?",
   	answers: [
      { text: 'Ribosomes', correct: false },
      { text: 'Lysosomes', correct: false },
      { text: 'Autosomes', correct: true },
      { text: 'Spermatocytes', correct: false }]},
    {question:"The process by which an amino acid loses its amino group is called ____.",
   	answers: [
      { text: 'hydration', correct: false },
      { text: 'deamination', correct: true },
      { text: 'oxidoamination', correct: false },
      { text: 'dehydration', correct: false }]},
  	{question:"Which of the following is a muscle under involuntary control?",
   	answers: [
      { text: 'rough', correct: false },
      { text: 'striated', correct: false },
      { text: 'smooth', correct: true },
      { text: 'skeletal', correct: false }]},
  	{question:"Brine is mixture because ____.",
   	answers: [
      { text: 'It has a definite boiling point', correct: false },
      { text: 'its components can be easily separated', correct: true },
      { text: 'its components are chemically combined', correct: false },
      { text: 'its components are present in definite proportions', correct: false }]},

  	{question:"Which of the following statements is true?",
   	answers: [
      { text: 'Increasing the basicity of a solution increases its pH', correct: true },
      { text: 'A base has a pH lower than 7', correct: false },
      { text: 'Increasing the acidity of a solution increases its pH', correct: false },
      { text: 'A neutral solution has a pH of 8', correct: false }]},

  	{question:"Which of the following is a characteristic of a base?",
   	answers: [
      { text: 'Sour', correct: false },
      { text: 'Proton acceptor', correct: true },
      { text: 'Reacts with active metals to form a gas', correct: false },
      { text: 'Changes litmus paper from blue to red', correct: false }]},

  	{question:"One of the largest volcanoes in our solar system-if not the largest-is named Olympus Mons. This volcano is located on ____.",
   	answers: [
      { text: 'Jupiter\'s satellite Callisto', correct: false },
      { text: 'Venus', correct: false },
      { text: 'Saturn\'s satellite Titan', correct: false },
      { text: 'Mars', correct: true }]},

  	{question:"The Andromeda Galaxy is which of the following types of galaxies? ",
   	answers: [
      { text: 'Elliptical', correct: false },
      { text: 'Spiral', correct: true },
      { text: 'Barred-spiral', correct: false },
      { text: 'Irregular', correct: false }]},

  	{question:"The planet Jupiter has a mass that is _____.",
   	answers: [
      { text: 'equal to the combined masses of the earth and Mars', correct: false },
      { text: 'equal to the combined masses of Saturn and Pluto', correct: false },
      { text: 'equal to the combined masses of Saturn, Neptune, and Uranus', correct: false },
      { text: 'greater than the combined masses of all of the planets', correct: true }]},

  	{question:"Which of the following is a representative metal?",
   	answers: [
      { text: 'Aluminum', correct: true },
      { text: 'Lanthanum', correct: false },
      { text: 'Platinum', correct: false },
      { text: 'Vanadium', correct: false }]},

 	{question:"Io, Europa, Ganymede and Callisto are satellites of what planet?",
   	answers: [
      { text: 'Jupiter', correct: true },
      { text: 'Saturn', correct: false },
      { text: 'Neptune', correct: false },
      { text: 'Uranus', correct: false }]},

 	{question:"Who among the following first hypothesized that the Earth orbited the sun?",
   	answers: [
      { text: 'Alexander the Great', correct: false },
      { text: 'Copernicus', correct: true },
      { text: 'Socrates', correct: false },
      { text: 'Tycho Brahe', correct: false }]},

 	{question:"A planet is said to be at aphelion when it is ___.",
   	answers: [
      { text: 'closest to the sun', correct: false },
      { text: 'farthest from the sun', correct: true },
      { text: 'at its highest point above the ecliptic', correct: false },
      { text: 'at its lowest point below the ecliptic', correct: false }]}
]
AVESCIENCE.sort((a,b)=> 0.5 - Math.random());

const DIFFSCIENCE=[
	{question:"How many time zones will a traveler pass through during a trip around the world?",
   	answers: [
      { text: '12', correct: false },
      { text: '24', correct: true },
      { text: '36', correct: false },
      { text: '48', correct: false }]},
	{question:"The longest day and the shortest night of the year in the Northern Hemisphere occurs during the ____.",
   	answers: [
      { text: 'summer solstice', correct: true },
      { text: 'winter solstice', correct: false },
      { text: 'autumnal equinox', correct: false },
      { text: 'vernal equinox', correct: false }]},
	{question:"Which of the following is the correct order, from top to bottom, by which sediments settle in water?",
   	answers: [
      { text: 'clay, sand, silt, gravel', correct: false },
      { text: 'clay, silt, sand, gravel', correct: true },
      { text: 'sand, silt, clay, gravel', correct: false },
      { text: 'gravel, sand, silt, clay', correct: false }]},
	{question:"Which cells in the blood do not have a nucleus?",
   	answers: [
      { text: 'Lymphocyte', correct: false },
      { text: 'Monocyte', correct: false },
      { text: 'Erythrocyte', correct: true },
      { text: 'Basophil', correct: false }]},
	{question:"When a color-blind man marries a woman pure for normal color vision, it is probable that ____.",
   	answers: [
      { text: 'all the children will be color-blind', correct: false },
      { text: 'all the grandchildren will be color-blind', correct: false },
      { text: 'only the sons will be color-blind', correct: false },
      { text: 'half the grandsons will be color-blind', correct: true }]},
	{question:"The heaviest isotope of Hydrogen is ____.",
   	answers: [
      { text: 'Deuterium', correct: false },
      { text: 'Protium', correct: false },
      { text: 'Tritium', correct: true },
      { text: 'Hydrogen-4', correct: false }]},
	{question:"A Galactic year is the length of time that it takes our sun to orbit the galaxy. In Earth years, how long is a Galactic year?",
   	answers: [
      { text: '100 million years', correct: false },
      { text: '230 million years', correct: true },
      { text: '620 million years', correct: false },
      { text: '940 million years', correct: false }]},
	{question:"Which of the following constellations has more bright stars than any other constellation?",
   	answers: [
      { text: 'Big Dipper', correct: false },
      { text: 'Cassiopeia', correct: false },
      { text: 'Orion', correct: true },
      { text: 'Scorpion', correct: false }]},
  	{question:"A black hole with the mass of the earth would be the size of ____.",
   	answers: [
      { text: 'the Sun', correct: false },
      { text: 'the Moon', correct: false },
      { text: 'a bowling ball', correct: false },
      { text: 'a marble', correct: true }]},
  	{question:"An object is placed exactly halfway between the Earth and Moon. The object will fall toward the ____.",
   	answers: [
      { text: 'Earth', correct: true },
      { text: 'Moon', correct: false },
      { text: 'Sun', correct: false },
      { text: 'None of these', correct: false }]},
  	{question:'How would the base sequence \"ACAGTGC\"" be coded on mRNA?',
   	answers: [
      { text: 'TGTCACG', correct: false },
      { text: 'GUGACAU', correct: false },
      { text: 'UGUCACG', correct: true },
      { text: 'CACUGUA', correct: false }]},
  	{question:"Of the following colors, which is bent least in passing through a prism?",
   	answers: [
      { text: 'Orange', correct: false },
      { text: 'Violet', correct: false },
      { text: 'Green', correct: false },
      { text: 'Red', correct: true }]}
]
DIFFSCIENCE.sort((a,b)=> 0.5 - Math.random());

const EASYENGLISH=[
	{question:"She\'s got long hair and she wears it in a ____.",
   answers: [
      { text: 'fringe', correct: false },
      { text: 'wavy', correct: false },
      { text: 'moustache', correct: false },
      { text: 'ponytail', correct: true }]},
   {question:"Emily\'s very ____. She understands how other people feel.",
   answers: [
      { text: 'relaxed', correct: false },
      { text: 'sensible', correct: false },
      { text: 'sensitive', correct: true },
      { text: 'reliable', correct: false }]},
   {question:"Chris is quite ____. He doesn\'t talk about his personal life much.",
   answers: [
      { text: 'gentle', correct: false },
      { text: 'reserved', correct: true },
      { text: 'polite', correct: false },
      { text: 'stubborn', correct: false }]},
   {question:"I like Chandler. He\'s got a great ____ of humour.",
   answers: [
      { text: 'feeling', correct: false },
      { text: 'understanding', correct: false },
      { text: 'sense', correct: true },
      { text: 'feel', correct: false }]},
   {question:"After you have applied for a job, you may be invited for a(n) ____.",
   answers: [
      { text: 'conversation', correct: false },
      { text: 'meeting', correct: false },
      { text: 'qualification', correct: false },
      { text: 'interview', correct: true }]},
   {question:"I\'d like a big ___ of chocolate, please.",
   answers: [
      { text: 'bar', correct: true },
      { text: 'jar', correct: false },
      { text: 'packet', correct: false },
      { text: 'can', correct: false }]},
   {question:"I usually have lunch in the school ____.",
   answers: [
      { text: 'bar', correct: false },
      { text: 'canteen', correct: true },
      { text: 'restaurant', correct: false },
      { text: 'pub', correct: false }]},
   {question:"We thought the waiter was very nice, so we left a big ____.",
   answers: [
      { text: 'tip', correct: true },
      { text: 'money', correct: false },
      { text: 'bill', correct: false },
      { text: 'cash', correct: false }]},
   {question:"The book has a very interesting ____.",
   answers: [
      { text: 'plot', correct: true },
      { text: 'bestseller', correct: false },
      { text: 'volume', correct: false },
      { text: 'fiction', correct: false }]},
   {question:"A new supermarket is going to ____ next year.",
   answers: [
      { text: 'build', correct: false },
      { text: 'be built', correct: true },
      { text: 'be building', correct: false },
      { text: 'building', correct: false }]}, 
   {question:"George showed me some pictures ____ by his father.",
   answers: [
      { text: 'painting', correct: false },
      { text: 'painted', correct: false },
      { text: 'that were painted', correct: true },
      { text: 'they were painted', correct: false }]},
   {question:"____ my humble opinion, the plot of this book is overextended.",
   answers: [
      { text: 'In', correct: true },
      { text: 'With', correct: false },
      { text: 'To', correct: false },
      { text: 'On', correct: false }]},
   {question:"How ____ paper do we use in the office daily?",
   answers: [
      { text: 'many', correct: false },
      { text: 'much', correct: true },
      { text: 'a few', correct: false },
      { text: 'some', correct: false }]},
   {question:"Choose the sentence with the right word order.",
   answers: [
      { text: 'Tom a lot of people invited.', correct: false },
      { text: 'A lot of people Tom invited.', correct: false },
      { text: 'Tom invited a lot of people.', correct: true },
      { text: 'Tom invited of people a lot.', correct: false }]},

   {question:"Mike is a person ____ always does his best.",
   answers: [
      { text: 'which', correct: false },
      { text: 'who', correct: true },
      { text: 'whose', correct: false },
      { text: 'whom', correct: false }]},

   {question:"Macy is very proud ____ her little daughter.",
   answers: [
      { text: 'with', correct: false },
      { text: 'for', correct: false },
      { text: 'of', correct: true },
      { text: 'about', correct: false }]},

   {question:"I would like ____ cheese, please.",
   answers: [
      { text: 'any', correct: false },
      { text: 'some', correct: true },
      { text: 'a few', correct: false },
      { text: 'many', correct: false }]},

   {question:"Kate doesn\'t have ____ knowledge at Maths.",
   answers: [
      { text: 'some', correct: false },
      { text: 'a few', correct: false },
      { text: 'many', correct: false },
      { text: 'much', correct: true }]},

   {question:"Jim and Sandra walked in silence ____ a while.",
   answers: [
      { text: 'at', correct: false },
      { text: 'on', correct: false },
      { text: 'for', correct: true },
      { text: 'in', correct: false }]},

   {question:"Chris found a ____ kitten.",
   answers: [
      { text: 'little cute grey', correct: false },
      { text: 'grey little cute', correct: false },
      { text: 'cute little grey', correct: true },
      { text: 'grey cute little', correct: false }]},

   {question:"This group of young people committed many ____ actions.",
   answers: [
      { text: 'dissocial', correct: false },
      { text: 'unsocial', correct: false },
      { text: 'non-social', correct: false },
      { text: 'antisocial', correct: true }]},

   {question:"The singer, ____ I like a lot, is Corey Taylor.",
   answers: [
      { text: 'which', correct: false },
      { text: 'whose', correct: false },
      { text: 'whom', correct: true },
      { text: 'what', correct: false }]},

   {question:"I\'m so tired I ____ for a week.",
   answers: [
      { text: 'can sleep', correct: false },
      { text: 'could sleep', correct: true },
      { text: 'could have slept', correct: false },
      { text: 'should sleep', correct: false }]},

   {question:"The troupe is ____ the performance tonight.",
   answers: [
      { text: 'making', correct: false },
      { text: 'doing', correct: false },
      { text: 'taking', correct: false },
      { text: 'giving', correct: true }]},

   {question:"It is important to ____ the first impression.",
   answers: [
      { text: 'make', correct: true },
      { text: 'do', correct: false },
      { text: 'take', correct: false },
      { text: 'give', correct: false }]},

   {question:"I\’m not sure, but Jay is ____ in the park.",
   answers: [
      { text: 'definitely', correct: false },
      { text: 'probably', correct: true },
      { text: 'certainly', correct: false },
      { text: 'surely', correct: false }]},

   {question:"Sally has been working here ____.",
   answers: [
      { text: 'for six months', correct: true },
      { text: 'since six months', correct: false },
      { text: 'six months ago', correct: false },
      { text: 'in six months', correct: false }]},

   {question:"I ____ tennis a lot, but I don\'t play very often now.",
   answers: [
      { text: 'was playing', correct: false },
      { text: 'was used to play', correct: false },
      { text: 'used to play', correct: true },
      { text: 'was using', correct: false }]},

   {question:"Paul suddenly left the room. He said he ____ to go.",
   answers: [
      { text: 'had', correct: true },
      { text: 'has', correct: false },
      { text: 'have', correct: false },
      { text: 'was', correct: false }]},

   {question:"A lot of Europeans would like to visit Japan. ____, such a travel is very expensive.",
   answers: [
      { text: 'Despite', correct: false },
      { text: 'Thus', correct: false },
      { text: 'Besides', correct: false },
      { text: 'However', correct: true }]}
]
EASYENGLISH.sort((a,b)=> 0.5 - Math.random());

const AVEENGLISH =[
	{question:"This bread is rather ____.",
   	answers: [
      { text: 'stale', correct: true },
      { text: 'well-done', correct: false },
      { text: 'strong', correct: false },
      { text: 'mild', correct: false }]},
	{question:"I\'ve lost one of my gloves. I ____ it somewhere.",
   	answers: [
      { text: 'must drop', correct: false },
      { text: 'must have dropped', correct: true },
      { text: 'must be dropping', correct: false },
      { text: 'must have been dropping', correct: false }]},
	{question:"Why did you stay at a hotel when you were in Paris? You ____ with Julia.",
   	answers: [
      { text: 'can stay', correct: false },
      { text: 'could stay', correct: false },
      { text: 'could have stayed', correct: true },
      { text: 'could have been stay', correct: false }]},
	{question:"We\'re late. The film ____ by the time we get to the cinema.",
   	answers: [
      { text: 'will already start', correct: false },
      { text: 'would already start', correct: false },
      { text: 'will be already started', correct: false },
      { text: 'will already have started', correct: true }]},
	{question:"We ____ by a loud noise during the night.",
   	answers: [
      { text: 'were woken up', correct: true },
      { text: 'woke up', correct: false },
      { text: 'are woken up', correct: false },
      { text: 'were waking up', correct: false }]},
	{question:"There\'s somebody walking behind us. I think ____.",
   	answers: [
      { text: 'we are following', correct: false },
      { text: 'we are being following', correct: false },
      { text: 'we are followed', correct: false },
      { text: 'we are being followed', correct: true }]}, 
	{question:"Jane ____ to phone me last night, but she didn\'t.",
   	answers: [
      { text: 'supposed', correct: false },
      { text: 'was supposed', correct: true },
      { text: 'is supposed', correct: false },
      { text: 'were supposed', correct: false }]},
	{question:"Where ____? Which hairdresser did you go to?",
   	answers: [
      { text: 'did you cut your hair', correct: false },
      { text: 'have you cut your hair', correct: false },
      { text: 'did you have cut your hair', correct: false },
      { text: 'did you have your hair cut', correct: true }]},
	{question:"The police officer stopped us and asked us where ____.",
   	answers: [
      { text: 'were we going', correct: false },
      { text: 'we were going', correct: true },
      { text: 'are we going', correct: false },
      { text: 'we are going', correct: false }]},
	{question:"The path was icy, so we walked very carefully. We were afraid ____.",
   	answers: [
      { text: 'of falling', correct: true },
      { text: 'from falling', correct: false },
      { text: 'to fall', correct: false },
      { text: 'to falling', correct: false }]},
	{question:"Lucy ____. She left last month.",
   	answers: [
      { text: 'still doesn\'t work here', correct: false },
      { text: 'doesn\'t still work here', correct: false },
      { text: 'no more works here', correct: false },
      { text: 'doesn\'t work here any more', correct: true }]},
	{question:"Nobody believed Paul at first, but he ____ to be right.",
   	answers: [
      { text: 'worked out ', correct: false },
      { text: 'came out', correct: false },
      { text: 'found out', correct: false },
      { text: 'turned out', correct: true }]},

	{question:"I parked in a no-parking zone, but I ____ it.",
   	answers: [
      { text: 'came up with', correct: false },
      { text: 'got away with', correct: true },
      { text: 'made off with', correct: false },
      { text: 'got on with', correct: false }]},

	{question:"You can always rely on Pete. He\'ll never ____.",
   	answers: [
      { text: 'put you up', correct: false },
      { text: 'let you down', correct: true },
      { text: 'take you over', correct: false },
      { text: 'see you off', correct: false }]},

	{question:"At six, she was the ____ of the movie industry.",
   	answers: [
      { text: 'wunderkind', correct: true },
      { text: 'bourgeoisie', correct: false },
      { text: 'raconteur', correct: false },
      { text: 'paparazzi', correct: false }]},

	{question:"An Eskimo wears a warm ____ to keep himself comfortable.",
   	answers: [
      { text: 'igloo', correct: false },
      { text: 'kowtow', correct: false },
      { text: 'creche', correct: false },
      { text: 'anorak', correct: true }]},

	{question:"Sarah would have made sure John was here __________ were coming too.",
   	answers: [
      { text: 'when she had known I', correct: false },
      { text: 'if he has known you', correct: false },
      { text: 'if she had known you', correct: true },
      { text: 'if she knew', correct: false }]},

	{question:"If Drake ____ time, he ____ better.",
   	answers: [
      { text: 'had had, would have studied', correct: true },
      { text: 'would have, studied', correct: false },
      { text: 'had had, had studied', correct: false },
      { text: 'would have, would study', correct: false }]},

	{question:"Place the adverb on the correct place in the sentence.",
   	answers: [
      { text: 'The team moved after slowly we had passed more than 15 miles.', correct: false },
      { text: 'The team moved after we had passed more than 15 miles slowly.', correct: false },
      { text: 'The team slowly moved after we had passed more than 15 miles.', correct: false },
      { text: 'The team moved slowly after we had passed more than 15 miles.', correct: true }]},
]
AVEENGLISH.sort((a,b)=> 0.5 - Math.random());

const DIFFENGLISH =[
	{question:"My friend gave me a ____ which is a hooded raincoat or windbreaker.",
   	answers: [
      { text: 'loofa', correct: false },
      { text: 'parka', correct: true },
      { text: 'brioche', correct: false },
      { text: 'creche', correct: false }]},
	{question:"____ or racial segregation and discrimination should not be practiced.",
   	answers: [
      { text: 'Shibboleth', correct: false },
      { text: 'Pariah', correct: false },
      { text: 'apartheid', correct: true },
      { text: 'glasnost', correct: false }]},
	{question:"If it were not for ____, journalists could not have gained access to formerly classified information about the Soviet Union\'s prison camps.",
   	answers: [
      { text: 'dacha', correct: false },
      { text: 'glasnost', correct: true },
      { text: 'détente', correct: false },
      { text: 'blitzkrieg', correct: false }]},
	{question:"The circus barker goes into a long ____ before the show begins.",
   	answers: [
      { text: 'crescendo', correct: false },
      { text: 'liaison', correct: false },
      { text: 'imbroglio', correct: false },
      { text: 'spiel', correct: true }]},

	{question:"Which word is spelt correctly?",
   	answers: [
      { text: 'bouquete', correct: false },
      { text: 'bouquette', correct: false },
      { text: 'bouquet', correct: true },
      { text: 'boqquet', correct: false }]},

	{question:"Which is the synonym of \"envisage\"?",
   	answers: [
      { text: 'imagine', correct: true },
      { text: 'guilt', correct: false },
      { text: 'progress', correct: false },
      { text: 'embody', correct: false }]},

	{question:"Which is the antonym of \"squire\"?",
   	answers: [
      { text: 'assault', correct: false },
      { text: 'feign', correct: false },
      { text: 'behave', correct: false },
      { text: 'abandon', correct: true }]},

	{question:"Which is the correct spelling of this synonym of \"ranking\"?",
   	answers: [
      { text: 'hierachy', correct: false },
      { text: 'hiearchy', correct: false },
      { text: 'hierarchy', correct: true },
      { text: 'heirarchy', correct: false }]},

	{question:"Which is the definition of \"unabashed\"?",
   	answers: [
      { text: 'without a break', correct: false },
      { text: 'not embarrassed', correct: true },
      { text: 'unproductive of success', correct: false },
      { text: 'done without fail', correct: false }]},

	{question:"Which is the synonym of \"paltry\"?",
   	answers: [
      { text: 'forecast', correct: false },
      { text: 'doubt', correct: false },
      { text: 'deputy', correct: false },
      { text: 'insignificant', correct: true }]},

	{question:"Which is the antonym of \"beguile\"?",
   	answers: [
      { text: 'repel', correct: true },
      { text: 'impress', correct: false },
      { text: 'react', correct: false },
      { text: 'confuse', correct: false }]},

	{question:"Which is the definition of \"stifle\"?",
   	answers: [
      { text: 'unwilling to spend', correct: false },
      { text: 'prevent something from happening', correct: true },
      { text: 'persistently annoy', correct: false },
      { text: 'refuse to budge', correct: false }]}
]
DIFFENGLISH.sort((a,b)=> 0.5 - Math.random());

const EASYTRIVIA=[
	{question:"What company was founded by Bill Gates?",
   	answers: [
      { text: 'Vista Systems', correct: false },
      { text: 'IBM', correct: false },
      { text: 'Microsoft', correct: true },
      { text: 'MicroUnity', correct: false }]},
	{question:"What is the name of the first astronaut to step on the moon?",
   	answers: [
      { text: 'Jim Lovell', correct: false },
      { text: 'Mike Collins', correct: false },
      { text: 'Neil Armstrong', correct: true },
      { text: 'Buzz Aldrin', correct: false }]},
	{question:"Which is formed in the shells of oysters?",
   	answers: [
      { text: 'Pearl', correct: true },
      { text: 'Gold', correct: false },
      { text: 'Silver', correct: false },
      { text: 'Crystal', correct: false }]},
	{question:"How many faces are there in a single die?",
   	answers: [
      { text: 'Six', correct: true },
      { text: 'Eight', correct: false },
      { text: 'Ten', correct: false },
      { text: 'Twelve', correct: false }]},
	{question:"What is an omnivore?",
   	answers: [
      { text: 'Something that is omnipresent', correct: false },
      { text: 'Something that eats humans', correct: false },
      { text: 'Something that eats constantly', correct: false },
      { text: 'Something that eats both plants and animals', correct: true }]},
	{question:"What types of products does Sony primarily manufacture?",
   	answers: [
      { text: 'Electronics', correct: true },
      { text: 'Furniture', correct: false },
      { text: 'Automobiles', correct: false },
      { text: 'Board games', correct: false }]},
	{question:"Which month has only 28 days and every 4 years has 29?",
   	answers: [
      { text: 'January', correct: false },
      { text: 'February', correct: true },
      { text: 'August', correct: false },
      { text: 'December', correct: false }]},
	{question:"What material is used by a potter?",
   	answers: [
      { text: 'Clay', correct: true },
      { text: 'Glass', correct: false },
      { text: 'Stone', correct: false },
      { text: 'Wood', correct: false }]},
	{question:"Which country is famous for its pyramids?",
   	answers: [
      { text: 'Algeria', correct: false },
      { text: 'Vietnam', correct: false },
      { text: 'Tunisia', correct: false },
      { text: 'Egypt', correct: true }]},
	{question:"In the animated film \"Despicable Me\", what color are the small creatures known as \"Minions\"?",
   	answers: [
      { text: 'Blue', correct: false },
      { text: 'Brown', correct: false },
      { text: 'Yellow', correct: true },
      { text: 'Purple', correct: false }]},
	{question:"What do the initials DIY usually stand for?",
   	answers: [
      { text: 'Do it your way', correct: false },
      { text: 'Describe it yourself', correct: false },
      { text: 'Do it yourself', correct: true },
      { text: 'Decorate it yourself', correct: false }]},
	{question:"Which is the smallest bird?",
   	answers: [
      { text: 'Goldcrest', correct: false },
      { text: 'Robbin', correct: false },
      { text: 'Hummingbird', correct: true },
      { text: 'Barn Swallow', correct: false }]},
	{question:"What is the name given to the study of the skin?",
   	answers: [
      { text: 'Surgery', correct: false },
      { text: 'Dermatology', correct: true },
      { text: 'Rheumatology', correct: false },
      { text: 'Audiology', correct: false }]},
 	{question:"What is the national bird of the United States?",
   	answers: [
      { text: 'White-tailed hawk', correct: false },
      { text: 'Bald eagle', correct: true },
      { text: 'Prairie falcon', correct: false },
      { text: 'Black Vulture', correct: false }]},           
 	{question:"Which fruit has seeds on the outside?",
   	answers: [
      { text: 'Dragonfruit', correct: false },
      { text: 'Miracle fruit', correct: false },
      { text: 'Strawberry', correct: true },
      { text: 'Blueberry', correct: false }]}, 
 	{question:"What is the name of King Arthur's sword?",
   	answers: [
      { text: 'Durandal', correct: false },
      { text: 'Mjolnir', correct: false },
      { text: 'Tizona', correct: false },
      { text: 'Excalibur', correct: true }]},
 	{question:"What is the largest land mammal?",
   	answers: [
      { text: 'Indian elephant', correct: false },
      { text: 'African bush elephant', correct: true },
      { text: 'African forest elephant', correct: false },
      { text: 'Sri Lankan elephant', correct: false }]},
 	{question:"Which country has the highest number of internet users?",
   	answers: [
      { text: 'India', correct: false },
      { text: 'United States', correct: false },
      { text: 'China', correct: true },
      { text: 'Indonesia', correct: false }]},
 	{question:"Who is the CEO and the founder of Facebook?",
   	answers: [
      { text: 'Bill Gates', correct: false },
      { text: 'Steve Jobs', correct: false },
      { text: 'Elon Musk', correct: false },
      { text: 'Mark Zuckerberg', correct: true }]},
  	{question:"What is the karat value for pure gold?",
   	answers: [
      { text: '10', correct: false },
      { text: '18', correct: false },
      { text: '24', correct: true },
      { text: '30', correct: false }]},
  	{question:"In the Walt Disney film \"Cinderella\" what does the fairy godmother turn into a carriage?",
   	answers: [
      { text: 'Old shoe', correct: false },
      { text: 'Melon', correct: false },
      { text: 'Apple', correct: false },
      { text: 'Pumpkin', correct: true }]},
  	{question:"Where is the smallest bone in the human body?",
   	answers: [
      { text: 'In the ear', correct: true },
      { text: 'In the hand', correct: false },
      { text: 'In the chest', correct: false },
      { text: 'In the foot', correct: false }]},
	{question:"What is the form of government where citizens have the right to elect leaders?",
   	answers: [
      { text: 'Democracy', correct: true },
      { text: 'Monarchy', correct: false },
      { text: 'Dictatorship', correct: false },
      { text: 'Aristocracy', correct: false }]},
	{question:"Which singer made the \"Moonwalk\" dance famous?",
   	answers: [
      { text: 'Elvis Presley', correct: false },
      { text: 'Michael Jackson', correct: true },
      { text: 'Gary V', correct: false },
      { text: 'James Brown', correct: false }]},
	{question:"What caused the Titanic to sink?",
   	answers: [
      { text: 'Malfunctioning engines exploded', correct: false },
      { text: 'A collision with a massive iceberg', correct: true },
      { text: 'Hit by a torpedo from a warship', correct: false },
      { text: 'A collision with another ship', correct: false }]},
	{question:"Which cheese is traditionally used for pizzas?",
   	answers: [
      { text: 'Gouda', correct: false },
      { text: 'Ricotta', correct: false },
      { text: 'Mozzarella', correct: true },
      { text: 'Edam', correct: false }]},
	{question:"Where is the tallest building in the world located?",
   	answers: [
      { text: 'Dubai', correct: true },
      { text: 'London', correct: false },
      { text: 'Paris', correct: false },
      { text: 'Tokyo', correct: false }]},
	{question:"What is/are some perks of Queen Elizabeth II of England?",
   	answers: [
      { text: 'Owns all the swans in the River Thames', correct: false },
      { text: 'Owns every dolphin in Britain', correct: false },
      { text: 'Has her own personal poet paid in Sherry wine', correct: false },
      { text: 'All of the choices are correct', correct: true }]},  
	{question:"What does IQ stand for?",
   	answers: [
      { text: 'Intense Quality', correct: false },
      { text: 'Important Question', correct: false },
      { text: 'Intelligence Quotient', correct: true },
      { text: 'Intelligent Query', correct: false }]}, 
	{question:"Who started World War II?",
   	answers: [
      { text: 'France', correct: false },
      { text: 'Britain', correct: false },
      { text: 'Poland', correct: false },
      { text: 'Germany', correct: true }]},
	{question:"Which of these gems is red in color?",
   	answers: [
      { text: 'Ruby', correct: true },
      { text: 'Emerald', correct: false },
      { text: 'Topaz', correct: false },
      { text: 'Sapphire', correct: false }]},
	{question:"Which of these gems is red in color?",
   	answers: [
      { text: 'Ruby', correct: true },
      { text: 'Emerald', correct: false },
      { text: 'Topaz', correct: false },
      { text: 'Sapphire', correct: false }]},
	{question:"Which is not one of the four shapes on a PlayStation controller?",
   	answers: [
      { text: 'Triangle', correct: false },
      { text: 'Star', correct: true },
      { text: 'Circle', correct: false },
      { text: 'Square', correct: false }]},
	{question:"What is the center of a dartboard called?",
   	answers: [
      { text: 'Fish Mouth', correct: false },
      { text: 'Triple Ring', correct: false },
      { text: 'Bull\'s Eye', correct: true },
      { text: 'Bird\'s Eye', correct: false }]}
] 
EASYTRIVIA.sort((a,b)=> 0.5 - Math.random());

const AVETRIVIA=[
	{question:"How many bridges are there over the Amazon River?",
   	answers: [
      { text: '0', correct: true },
      { text: '1', correct: false },
      { text: '10', correct: false },
      { text: '20', correct: false }]},
	{question:"Who wrote \"To be or not to be. That is the question.\"?",
   	answers: [
      { text: 'Virginia Woolf', correct: false },
      { text: 'William Shakespeare', correct: true },
      { text: 'John Steinbeck', correct: false },
      { text: 'J.K. Rowling', correct: false }]},
	{question:"Which scientist is well known for his theory of relativity?",
   	answers: [
      { text: 'Alfred Nobel', correct: false },
      { text: 'Albert Einstein', correct: true },
      { text: 'Alexander Fleming', correct: false },
      { text: 'John Lennon', correct: false }]},
  	{question:"Who was the artist that drew the Vitruvian Man?",
   	answers: [
      { text: 'Picasso', correct: false },
      { text: 'Michaelangelo', correct: false },
      { text: 'Da Vinci', correct: true },
      { text: 'Rapahael', correct: false }]},
	{question:"What is a monochrome photograph?",
   	answers: [
      { text: 'An image taken under long exposure', correct: false },
      { text: 'Many pictures put together as one', correct: false },
      { text: 'Forced perspective photograph', correct: false },
      { text: 'An image composed of one color in varying tones', correct: true }]},
	{question:"What song was used in Titanic?",
   	answers: [
      { text: 'My Heart Will Go On', correct: true },
      { text: 'Because You Loved Me', correct: false },
      { text: 'All By Myself', correct: false },
      { text: 'I\'m Alive', correct: false }]},
	{question:"What is a Blue Moon?",
   	answers: [
      { text: 'An extra full moon that appears in a 12 month cycle', correct: true },
      { text: 'A planet that has become lifeless', correct: false },
      { text: 'An eclipse', correct: false },
      { text: 'Another name for the Northern Star', correct: false }]},      
	{question:"What is the name of the princess in the animated feature film \"The Princess and the Frog\"?",
   	answers: [
      { text: 'Thianna', correct: false },
      { text: 'Tara', correct: false },
      { text: 'Tiana', correct: true },
      { text: 'Tiara', correct: false }]},
	{question:"How many teeth do adult humans have?",
   	answers: [
      { text: '32', correct: true },
      { text: '38', correct: false },
      { text: '40', correct: false },
      { text: '44', correct: false }]},
	{question:"Why does Queen Elizabeth II have no passport?",
   	answers: [
      { text: 'She doesn\'t travel to other countries', correct: false },
      { text: 'She is very busy', correct: false },
      { text: 'She doesn\'t like the idea of passports', correct: false },
      { text: 'All British passports are issued in her name', correct: true }]},
	{question:"In radio, what does the F in FM stand for?",
   	answers: [
      { text: 'First', correct: false },
      { text: 'Free', correct: false },
      { text: 'Frequency', correct: true },
      { text: 'French', correct: false }]},
	{question:"What male sea creature is the only male animal to become pregnant?",
   	answers: [
      { text: 'Hermit crab', correct: false },
      { text: 'Octopus', correct: false },
      { text: 'Seahorse', correct: true },
      { text: 'Jellyfish', correct: false }]},
	{question:"What is the capital city of the Netherlands?",
   	answers: [
      { text: 'Utrecht', correct: false },
      { text: 'Amsterdam', correct: true },
      { text: 'Rotterdam', correct: false },
      { text: 'The Hague', correct: false }]},
	{question:"What is the most attended or watched sport in the world?",
   	answers: [
      { text: 'Volleyball', correct: false },
      { text: 'Basketball', correct: false },
      { text: 'Soccer(Football)', correct: true },
      { text: 'Baseball', correct: false }]},
	{question:"Who said \"One small step for man, one giant leap for mankind\"?",
   	answers: [
      { text: 'Nelson Mandela', correct: false },
      { text: 'Neil Armstrong', correct: true },
      { text: 'Stan Lee', correct: false },
      { text: 'Martin Luther King, Jr.', correct: false }]},
	{question:"Which color are bulls attracted to?",
   	answers: [
      { text: 'red', correct: false },
      { text: 'blue', correct: false },
      { text: 'white', correct: false },
      { text: 'they don\'t care about the colors', correct: true }]},
	{question:"Which of the following foods is safe to feed a dog?",
   	answers: [
      { text: 'Eggs', correct: true },
      { text: 'Chocolate', correct: false },
      { text: 'Onions', correct: false },
      { text: 'Grapes', correct: false }]},
	{question:"Brazil was once a colony of which European country?",
   	answers: [
      { text: 'Germany', correct: false },
      { text: 'Montenegro', correct: false },
      { text: 'Portugal', correct: true },
      { text: 'United Kingdom', correct: false }]},
	{question:"Which species of hummingbird is the smallest?",
   	answers: [
      { text: 'Black Chinned Hummingbird', correct: false },
      { text: 'Rufous Hummingbird', correct: false },
      { text: 'Oasis Hummingbird', correct: false },
      { text: 'Bee Hummingbird', correct: true }]},
	{question:"What does the emergency procedure CPR stand for?",
   	answers: [
      { text: 'Cardiopulmonary resuscitation', correct: true },
      { text: 'Cerebral performance adjustment', correct: false },
      { text: 'Cardiac procedural relief', correct: false },
      { text: 'Cerebralpulmonary release', correct: false }]},
	{question:"What city is nicknamed and the most commonly called \"The City of Light\"",
   	answers: [
      { text: 'New York City', correct: false },
      { text: 'Los Angeles, California', correct: false },
      { text: 'Paris, France', correct: true },
      { text: 'Miami, Florida', correct: false }]},
	{question:"If you were born on January 20, what sign are you?",
   	answers: [
      { text: 'Capricorn', correct: false },
      { text: 'Virgo', correct: false },
      { text: 'Aquarius', correct: true },
      { text: 'Pisces', correct: false }]},
	{question:"What is the world\'s largest living lizard?",
   	answers: [
      { text: 'Gila Monster', correct: false },
      { text: 'Monitor Lizard', correct: false },
      { text: 'Komodo Dragon', correct: true },
      { text: 'Iguana', correct: false }]},
	{question:"What is the largest country in South America?",
   	answers: [
      { text: 'Chile', correct: false },
      { text: 'Brazil', correct: true },
      { text: 'Columbia', correct: false },
      { text: 'Mexico', correct: false }]},
	{question:"On average, which of these animals has the longest life span?",
   	answers: [
      { text: 'Cow', correct: false },
      { text: 'Horse', correct: true },
      { text: 'Pig', correct: false },
      { text: 'Goat', correct: false }]}
]
AVETRIVIA.sort((a,b)=> 0.5 - Math.random());

const DIFFTRIVIA=[
	{question:"Who is Stefani Joanne Angelina Germanotta?",
   	answers: [
      { text: 'Sia', correct: false },
      { text: 'Lady Gaga', correct: true },
      { text: 'Halsey', correct: false },
      { text: 'Becky G', correct: false }]},
	{question:"Nyctophobia is the fear of what?",
   	answers: [
      { text: 'Darkness', correct: true },
      { text: 'Dirt', correct: false },
      { text: 'Water', correct: false },
      { text: 'Closed spaces', correct: false }]},
	{question:"What is the highest mountain peak in Japan?",
   	answers: [
      { text: 'Mount Yari', correct: false },
      { text: 'Mount Shiomi', correct: false },
      { text: 'Mount Komori', correct: false },
      { text: 'Mount Fuji', correct: true }]},
	{question:"Which lady below is known for her work among the poor of India?",
   	answers: [
      { text: 'Mother Teresa', correct: true },
      { text: 'Susan B. Anthony', correct: false },
      { text: 'Kalpana Chawla', correct: false },
      { text: 'Anne Frank', correct: false }]},
	{question:"On the 27th of January 1880, who patented the first electric lamp?",
   	answers: [
      { text: 'Alexander Graham Bell', correct: false },
      { text: 'George Westinghouse', correct: false },
      { text: 'Nikola Tesla', correct: false },
      { text: 'Thomas Edison', correct: true }]},
	{question:"What was the first building in the world to have more than 100 floors?",
   	answers: [
      { text: 'Sears Tower', correct: false },
      { text: 'Petronas Twin Towers', correct: false },
      { text: 'Empire State Building', correct: true },
      { text: 'Burj Khalifa', correct: false }]},
	{question:"Which one of the seven ancient wonders of the world is still standing today?",
   	answers: [
      { text: 'The Great Pyramid of Giza', correct: true },
      { text: 'Temple of Artemis', correct: false },
      { text: 'Colossus of Rhodes', correct: false },
      { text: 'Mausoleum at Halicarnassus', correct: false }]},
	{question:"What should a Javanese couple do in order to get married?",
   	answers: [
      { text: 'Sacrifice three chickens', correct: false },
      { text: 'Plant five trees', correct: true },
      { text: 'Dance lambada', correct: false },
      { text: 'Grow three roses', correct: false }]},
	{question:"\"GPS\" is a space-based radionavigation system. What does it stand for?",
   	answers: [
      { text: 'General Positioning System', correct: false },
      { text: 'Global Planetary System', correct: false },
      { text: 'Global Positioning System', correct: true },
      { text: 'Generalized Planetary Systems', correct: false }]},
	{question:"Which was invented first?",
   	answers: [
      { text: 'Car', correct: false },
      { text: 'TV', correct: false },
      { text: 'Telephone', correct: true },
      { text: 'Aeroplane', correct: false }]},
	{question:"The fastest land animal.",
   	answers: [
      { text: 'Sheerah the cheetah', correct: false },
      { text: 'Sarah the cheetah', correct: true },
      { text: 'Sonny the cheetah', correct: false },
      { text: 'Sierra the cheetah', correct: false }]},
	{question:"Where does a Jalapeno take it's name from?",
   	answers: [
      { text: 'A city in Mexico', correct: true },
      { text: 'A mountain in Honduras', correct: false },
      { text: 'An ancient Spaniard ship', correct: false },
      { text: 'A city in Portugal', correct: false }]},
	{question:"Did Disney\'s Minnie and Mickey Mouse ever get married onscreen?",
   	answers: [
      { text: 'Married in a 1928 major film', correct: false },
      { text: 'Never married onscreen', correct: true },
      { text: 'Married in a 1930 short film', correct: false },
      { text: 'Married in a 2013 Mickey Mouse Clubhouse episode', correct: false }]},
	{question:"Which bird can remember human faces for up to 5 years?",
   	answers: [
      { text: 'A crow', correct: true },
      { text: 'A grouse', correct: false },
      { text: 'A pigeon', correct: false },
      { text: 'A pelican', correct: false }]},
	{question:"How many years did Hachiko wait for his owner at Shibuya station?",
   	answers: [
      { text: '13 years', correct: false },
      { text: '8 years', correct: false },
      { text: '9 years', correct: true },
      { text: '24 years', correct: false }]},
	{question:"How many people have died while climbing Mount Everest?",
   	answers: [
      { text: '298', correct: false },
      { text: '247', correct: false },
      { text: '136', correct: false },
      { text: '300+', correct: true }]},
	{question:"Which are the only birds known to be capable of flying backwards?",
   	answers: [
      { text: 'Vulture', correct: false },
      { text: 'Hummingbird', correct: true },
      { text: 'Flamingo', correct: false },
      { text: 'Pelican', correct: false }]},
	{question:"Iran was formerly known as ____. ",
   	answers: [
      { text: 'Narnia', correct: false },
      { text: 'Athens', correct: false },
      { text: 'Sparta', correct: false },
      { text: 'Persia', correct: true }]},
	{question:"What is the name of the first artificial satellite sent into space?",
   	answers: [
      { text: 'Sputnik', correct: true },
      { text: 'Explorer', correct: false },
      { text: 'Apollo', correct: false },
      { text: 'Skylab', correct: false }]},
	{question:"What is the minimum number of points required to win a tennis tie-break?",
   	answers: [
      { text: '8', correct: false },
      { text: '6', correct: false },
      { text: '5', correct: false },
      { text: '7', correct: true }]}
]
DIFFTRIVIA.sort((a,b)=> 0.5 - Math.random());