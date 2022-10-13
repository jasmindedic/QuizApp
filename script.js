
let currentQuestion = 0;

// Init function to run all generating functions
function init() {
    generateHeader();
    questionsAmount();
    showQuestion();
}

// Update questions amount
function questionsAmount() {
    document.getElementById("all-questions").innerHTML = questions.length;
}

function showQuestion() {

    if (currentQuestion >= question.length) {
        // Show end screen
    } else {


        let question = questions[currentQuestion];

        document.getElementById("question-number").innerHTML = currentQuestion + 1;
        document.getElementById("questionText").innerHTML = question["question"];
        document.getElementById("answer_1").innerHTML = question["answer_1"];
        document.getElementById("answer_2").innerHTML = question["answer_2"];
        document.getElementById("answer_3").innerHTML = question["answer_3"];
        document.getElementById("answer_4").innerHTML = question["answer_4"];
    }

}
// Function to check if answer is right
function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question["right_answer"]}`;

    if (selectedQuestionNumber == question["right_answer"]) {
        document.getElementById(selection).parentNode.classList.add("bg-success");
    } else {
        document.getElementById(selection).parentNode.classList.add("bg-danger");
        document.getElementById(idOfRightAnswer).parentNode.classList.add("bg-success");
    }

    document.getElementById("next-button").disabled = false;
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