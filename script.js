const questions = [

{
question:"What does HTML stand for?",
answers:[
{text:"Hyper Text Markup Language", correct:true},
{text:"Home Tool Markup Language", correct:false},
{text:"Hyperlinks Text Markup Language", correct:false},
{text:"Hyper Tool Markup Language", correct:false}
]
},

{
question:"Which language is used for styling web pages?",
answers:[
{text:"HTML", correct:false},
{text:"CSS", correct:true},
{text:"Python", correct:false},
{text:"Java", correct:false}
]
},

{
question:"Which language is used for website interactivity?",
answers:[
{text:"CSS", correct:false},
{text:"Java", correct:false},
{text:"JavaScript", correct:true},
{text:"C++", correct:false}
]
},

{
question:"Which tag is used for images?",
answers:[
{text:"<img>", correct:true},
{text:"<image>", correct:false},
{text:"<pic>", correct:false},
{text:"<photo>", correct:false}
]
},

{
question:"Which company developed JavaScript?",
answers:[
{text:"Microsoft", correct:false},
{text:"Netscape", correct:true},
{text:"Google", correct:false},
{text:"Apple", correct:false}
]
}

];

const questionElement =
document.getElementById("question");

const answerButtons =
document.getElementById("answer-buttons");

const nextButton =
document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){

currentQuestionIndex = 0;
score = 0;

nextButton.innerHTML = "Next";

showQuestion();

}

function showQuestion(){

resetState();

let currentQuestion =
questions[currentQuestionIndex];

questionElement.innerHTML =
(currentQuestionIndex + 1) +
". " +
currentQuestion.question;

currentQuestion.answers.forEach(answer => {

const button =
document.createElement("button");

button.innerHTML = answer.text;

button.classList.add("btn");

answerButtons.appendChild(button);

if(answer.correct){
button.dataset.correct =
answer.correct;
}

button.addEventListener(
"click",
selectAnswer
);

});

}

function resetState(){

nextButton.style.display =
"none";

while(answerButtons.firstChild){

answerButtons.removeChild(
answerButtons.firstChild
);

}

}

function selectAnswer(e){

const selectedBtn =
e.target;

const isCorrect =
selectedBtn.dataset.correct ===
"true";

if(isCorrect){

selectedBtn.classList.add(
"correct"
);

score++;

}
else{

selectedBtn.classList.add(
"wrong"
);

}

Array.from(
answerButtons.children
).forEach(button => {

if(button.dataset.correct ===
"true"){

button.classList.add(
"correct"
);

}

button.disabled = true;

});

nextButton.style.display =
"block";

}

function showScore(){

resetState();

questionElement.innerHTML =
`🎉 Quiz Completed! <br><br>
Your Score: ${score} / ${questions.length}`;

nextButton.innerHTML =
"Restart Quiz";

nextButton.style.display =
"block";

}

function handleNextButton(){

currentQuestionIndex++;

if(
currentQuestionIndex <
questions.length
){

showQuestion();

}
else{

showScore();

}

}

nextButton.addEventListener(
"click",
() => {

if(
currentQuestionIndex <
questions.length
){

handleNextButton();

}
else{

startQuiz();

}

}
);

startQuiz();