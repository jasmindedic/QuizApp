// Global variables
let rightQuestions = 0;
let currentQuestion = 0;
let AUDIO_SUCCESS = new Audio("sounds/succed.wav");
let AUDIO_FAIL = new Audio("sounds/fail.wav");

// Init function to run all generating functions
function init() {
    questionsAmount();
    showQuestion();
}

// Update questions amount
function questionsAmount() {
    document.getElementById("all-questions").innerHTML = questions.length;
}

function showQuestion() {
    if (gameIsOver()) {
        showEndScreen();
    } else { // show question
        updateProgressBar()
        updateToNextQuestion();
    }
}

// Function to validate 
function gameIsOver() {
    return currentQuestion >= questions.length;
}

// Function to show end screen 
function showEndScreen() {
    document.getElementById("endScreen").style = "";
    document.getElementById("question-body").style = "display: none";
    document.getElementById("amount-of-questions").innerHTML = questions.length;
    document.getElementById("amount-of-right-questions").innerHTML = rightQuestions;
}

// Function to update progress bar
function updateProgressBar() {
    let percent = (currentQuestion + 1) / questions.length;
    percent = Math.round(percent * 100);

    document.getElementById("progress-bar").innerHTML = `${percent} %`;
    document.getElementById("progress-bar").style = `width: ${percent}%`;
}

// Function to show next question
function updateToNextQuestion() {
    let question = questions[currentQuestion];
    document.getElementById("question-number").innerHTML = currentQuestion + 1;
    document.getElementById("questionText").innerHTML = question["question"];
    document.getElementById("answer_1").innerHTML = question["answer_1"];
    document.getElementById("answer_2").innerHTML = question["answer_2"];
    document.getElementById("answer_3").innerHTML = question["answer_3"];
    document.getElementById("answer_4").innerHTML = question["answer_4"];
}

// Function to check if answer is right
function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question["right_answer"]}`;

    if (rightAnswerSelected(selectedQuestionNumber, question)) {
        document.getElementById(selection).parentNode.classList.add("bg-success");
        AUDIO_SUCCESS.play();
        rightQuestions++;
    } else {
        document.getElementById(selection).parentNode.classList.add("bg-danger");
        document.getElementById(idOfRightAnswer).parentNode.classList.add("bg-success");
        AUDIO_FAIL.play();
    }

    document.getElementById("next-button").disabled = false;
}

function rightAnswerSelected(selectedQuestionNumber, question) {
    return selectedQuestionNumber == question["right_answer"];
}

function nextQuestion() {
    currentQuestion++; //zb. von 0 auf 1

    document.getElementById("next-button").disabled = true;
    resetAnswerButtons();
    showQuestion();


}

function resetAnswerButtons() {
    document.getElementById("answer_1").parentNode.classList.remove("bg-danger");
    document.getElementById("answer_1").parentNode.classList.remove("bg-success");
    document.getElementById("answer_2").parentNode.classList.remove("bg-danger");
    document.getElementById("answer_2").parentNode.classList.remove("bg-success");
    document.getElementById("answer_3").parentNode.classList.remove("bg-danger");
    document.getElementById("answer_3").parentNode.classList.remove("bg-success");
    document.getElementById("answer_4").parentNode.classList.remove("bg-danger");
    document.getElementById("answer_4").parentNode.classList.remove("bg-success");
}

// Function to restart the game
function restartGame() {
    document.getElementById("endScreen").style = "display: none";
    document.getElementById("question-body").style = "";

    rightQuestions = 0;
    currentQuestion = 0;
    init();
}