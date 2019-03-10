//start button. . inisilize game
$('#start').on('click', function () {
 
    game.start();
})
//set pairs of questions and answers
var questions = [
        {question: "Which princess has her mother alive, but her father is dead?",
        answers: ["Aurora", "Belle", "Tiana", "Snow White"],
        correctAnswer: "Tiana"},

        {question: "Who was the first Disney princess?",
        answers: ["Snow White", "Cinderella", "Aurora"],
        correctAnswer: "Snow White"},

        {question: "How long has the curse been over the castle in Beauty and the Beast?",
        answers: ["20 years", "5 years", "10 years", "50 years"],
        correctAnswer: "10 years"},

        {question: "What is the crew celebrating on the ship at the beginning of The Little Mermaid?",
        answers: ["Prince Eric's engagement", "Price Eric's ascendance", "Prince Eric's birthday"],
        correctAnswer: "Prince Eric's birthday"},

        {question: " What name did Princess Aurora use to hide her identity while living in the cottage in the woods?",
        answers: ["Briar Rose", "Rosalind", "Rosemary", "Rose Red"],
        correctAnswer: "Briar Rose"},

        {question: "Who is the only princess with brothers?",
        answers: ["Pocahontas", "Anna", "Merida", "Tiana"],
        correctAnswer: "Merida"},

        {question: "How many pricesses are in the official Disney princess line?",
        answers: ["10", "15", "11", "13"],
        correctAnswer: "11"},

        {question: "What is the name of Ariel's daughter?",
        answers: ["Aria", "Melody", "Harmony", "Lyra"],
        correctAnswer: "Melody"},

        {question: "What is the name of Princess Jasmine’s pet tiger?",
        answers: ["Rajah", "Pasha", "Lahja", "Nala"],
        correctAnswer: "Rajah"},

        {question: "Which Disney movie was the first to be nominated for an Oscar?",
        answers: ["Cinderella", "Frozen", "Snow White", "Beauty and the Beast"],
        correctAnswer: "Beauty and the Beast"}
];
console.log(questions);

correct: 0;
incorrect: 0;

counter: 30;
console.log(correct);
console.log(incorrect);
console.log(counter);

//set timer for questions
start: function () {
    // insert time, 1000seconds
    timer = setInterval(game.countdown,1000);
    $('#trivia').prepend('<h2>Time Remaining: <span id="counter">30</span> Seconds</h2>');
    $('#start').remove();
};


//set multiple clicks for right and wrong answers

//show question and answer options

//counter  for right, wrong and timed out questions
