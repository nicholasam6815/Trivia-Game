var questions = [{
    "question": "What is the subatomic particle found in the nucleus with a positive charge ?",
    "option1": "Atom",
    "option2": "Electron",
    "option3": "Proton",
    "option4": "Nucleus",
    "answer": "3"
},  {
    "question": "Who invented the periodic table of elements ?",
    "option1": "Dmitry Meneleyev",
    "option2": "John Daltan",
    "option3": "Albert Einstien",
    "option4": "Wilhelm Conrad Roentgen",
    "answer": "1"

},  {
    "question": "Which type of atomic bond shares electrons for stabilization ?",
    "option1": "Ionic",
    "option2": "Double",
    "option3": "Covalent",
    "option4": "Hydrogen",
    "answer": "3"
},  {
    "question": "What is the first element on the periodic table of elements ?",
    "option1": "Argon",
    "option2": "Carbon",
    "option3": "Oxygen",
    "option4": "Hydrogen",
    "answer": "4"
}];

var currquest = 0;
var score = 0;
var totQuestions = questions.length;

var container = document.getElementById('triviaContainer');
var questEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');

//if(start){
var start = document.getElementById('start');
var timer = document.getElementById('timer');
var triviaTime = 30;
var myInterval;

start.addEventListener('click', function(event){
   //if time ends
   
   clearInterval(myInterval);

    myInterval = setInterval(function(){
        triviaTime --;
        if (triviaTime === 0){
            clearInterval(myInterval);
            alert('Select Answer and Click Next');
           } 
           
       
        timer.innerHTML = triviaTime;
    }, 1000);
});
function loadQuestion (questionIndex) {
    var q = questions[questionIndex];
    questEl.textContent = (questionIndex + 1) + '. ' + q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
};
 
function loadNextQuestion () {
    var selOpt = document.querySelector('input[type=radio]:checked');
    if (!selOpt){
        alert('Select Answer');
        return;
    }

var answer = selOpt.value;
if (questions[currquest].answer == answer) {
    score += 1;
}
selOpt.checked = false;
currquest++;
if (currquest == totQuestions - 1){
    nextButton.textContent = 'Finish';
}

if (currquest == totQuestions){
    container.style.display = 'none';
    resultCont.style.display = '';
    resultCont.textContent = 'Correct: ' + score + '   Incorrect: ' + (totQuestions - score);
    return; 
}

///////////////////////////////////////////////////////////////////////////////////////////////////

loadQuestion(currquest);
}

loadQuestion(currquest);

