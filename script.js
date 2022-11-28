const questions = [
    'hi',
    'how',
    'are',
    'you'
];
const maxQuestions = questions.length


randNum = maxQuestions => Math.floor(Math.random() * maxQuestions);

function newQuestion() {
    document.getElementById("qOnScreen").innerHTML = questions[randNum(questions.length)]
}
