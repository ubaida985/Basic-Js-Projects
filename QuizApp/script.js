const quiz = [
    {
        question: 'Which word is most similar to "Idiot"?',
        options: ['Airhead', 'Baghead', 'Smart', 'Detest'],
        answer: 'A'
    }, {
        question: 'Which word is most similar to "Tiredness"?',
        options: ['Lazy', 'Enthusiastic', 'fatigue', 'Dead'],
        answer: 'C'
    }, {
        question: 'Which word is most similar to "Intelligent"?',
        options: ['Handsome', 'Smart', 'Wonderful', 'Idiot'],
        answer: 'B'
    }, {
        question: 'What does the word, "Righthanded" mean?',
        options: ['Idiot', 'Baghead', 'Smart', 'Detest'],
        answer: 'A'
    }, {
        question: 'Which word is most similar to "Handsome"?',
        options: ['Smelly', 'Crisp', 'good-looking', 'Fish'],
        answer: 'C'
    }, {
        question: 'Which word is most similar to "Lethargic"?',
        options: ['Lazy', 'Enthusiastic', 'Alive', 'Dead'],
        answer: 'A'
    }
];
const question = document.getElementById("question");
const options = document.querySelectorAll(".option");
const optionInput = document.querySelectorAll(".optionInput");
const quizBox = document.getElementById("quiz");
let quizNumber = 0;
let score = 0;

function checkAnswer() {
    optionInput.forEach((option) => {
        if (option.checked) {
            if (option.getAttribute("id") == `option${quiz[quizNumber].answer}`) {
                ++score;
            }
        }
    });
}

function uncheckRadioButtons() {
    optionInput.forEach((option) => {
        if (option.checked) {
            option.checked = false;
        }
    });
}

function setQuestion(quiz) {
    let optionNumber = -1;
    question.innerHTML = quiz.question;
    options.forEach((option) => {
        option.innerHTML = quiz.options[++optionNumber]
    });

    uncheckRadioButtons();
}

function reloadQuiz() {
    location.reload();
}

function submitQuestion() {
    checkAnswer();
    if (++quizNumber >= quiz.length) {
        quizBox.innerHTML = `<h1 style="margin-top:2rem">Your score is ${score}</h1> 
                            <Button onClick="reloadQuiz()">Restart</Button>`;
        return;
    }
    setQuestion(quiz[quizNumber]);
}



setQuestion(quiz[quizNumber]);