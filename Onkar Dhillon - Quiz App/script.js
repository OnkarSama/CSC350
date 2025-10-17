// Quiz questions and correct answers
const quiz = {
    q1: "let",
    q2: "Boolean",
    q3: "doWhile",
    // new questions below
    q4: "String",
    q5: "C++",
};

function checkAnswers(formData) {
    let score = 0;
    let total = Object.keys(quiz).length;
    let feedback = "";  // creating feedback var

    // Loop through the quiz questions
    for (let question in quiz) {
        if (formData[question] === quiz[question]) {
            score++;
        } else {
            // allows for multiple wrong answers to display since you are concatenating onto the feedback
            feedback += `<p>Question ${question.slice(1)} was incorrect. 
            The correct answer is <strong>${quiz[question]}</strong>.</p>`;
        }
    }

    return { score, total, feedback };  // added feedback to the return for displaying right answers
}

// Function: Handle the quiz submission.
function submitQuiz() {
    // Access the form
    const form = document.getElementById("quizForm");
    const formData = {};

    // Collect the user's answers
    for (let element of form.elements) {
        if (element.type === "radio" && element.checked) {
            formData[element.name] = element.value;
        }
    }

    // Check answers
    let result = checkAnswers(formData);

    // Show feedback
    document.getElementById("result").innerHTML =
        `You scored ${result.score} out of ${result.total}. ` +
        (result.score === result.total ? "Excellent!" : "Keep practicing!") +
        result.feedback;  // tacking on feedback to end of results
}

// Allow Enter key to submit quiz
document.getElementById("quizForm").onkeydown = function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        submitQuiz();
    }
};
