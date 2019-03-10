//start button. . initialized game
$('#start').on('click', function () {

    start();
})
//set pairs of questions and answers
var questions = [{
        question: "1) Which princess has her mother alive, but her father is dead?",
        answers: ["Aurora", "Belle", "Tiana", "Snow White"],
        correctAnswer: "Tiana"
    },

    {
        question: "2) Who was the first Disney princess?",
        answers: ["Snow White", "Cinderella", "Aurora"],
        correctAnswer: "Snow White"
    },

    {
        question: "3) How long has the curse been over the castle in Beauty and the Beast?",
        answers: ["20 years", "5 years", "10 years", "50 years"],
        correctAnswer: "10 years"
    },

    {
        question: "4) What is the crew celebrating on the ship at the beginning of The Little Mermaid?",
        answers: ["Prince Eric's engagement", "Price Eric's ascendance", "Prince Eric's birthday"],
        correctAnswer: "Prince Eric's birthday"
    },

    {
        question: "5) What name did Princess Aurora use to hide her identity while living in the cottage in the woods?",
        answers: ["Briar Rose", "Rosalind", "Rosemary", "Rose Red"],
        correctAnswer: "Briar Rose"
    },

    {
        question: "6) Who is the only princess with brothers?",
        answers: ["Pocahontas", "Anna", "Merida", "Tiana"],
        correctAnswer: "Merida"
    },

    {
        question: "7) How many pricesses are in the official Disney princess line?",
        answers: ["10", "15", "11", "13"],
        correctAnswer: "11"
    },

    {
        question: "8) What is the name of Ariel's daughter?",
        answers: ["Aria", "Melody", "Harmony", "Lyra"],
        correctAnswer: "Melody"
    },

    {
        question: "9) What is the name of Princess Jasmine’s pet tiger?",
        answers: ["Rajah", "Pasha", "Lahja", "Nala"],
        correctAnswer: "Rajah"
    },

    {
        question: "10) Which Disney movie was the first to be nominated for an Oscar?",
        answers: ["Cinderella", "Frozen", "Snow White", "Beauty and the Beast"],
        correctAnswer: "Beauty and the Beast"
    }
];
console.log(questions);

var correct = 0;

var counter = 100;

//set timer for questions
function countdown() {
    counter--;
    $("#counter").html(counter);
    if (counter <= 0) {
        end();
    }
};

function start() {
    correct = 0;
    counter = 100;

    timer = setInterval(countdown, 1000);

    $('#start').remove();
    $('#trivia').prepend('<h2>Time Remaining: <span id="counter">120</span> Seconds</h2>');

    game();
};


//show question and answer options

//counter  for right, wrong and timed out questions
function game() {

    for (var i = 0; i < questions.length; i++) {
        var questionSet = questions[i];
        $("#trivia").append(questionSet.question + "<br>");
        for (var j = 0; j < questionSet.answers.length; j++) {
            var answer = questionSet.answers[j];
            $("#trivia").append("<input type = 'radio' name=\"" + i + "\" value=\"" + answer + "\"> " + answer + " <br>");
        }
    }

};

function end() {
    clearInterval(timer);


    // This is how I get all the values of the checked

    for(var inputChecked of $('input:checked')) {
        var value = inputChecked.value,
            questionIndex = Number(inputChecked.name),
            correctAnswer = questions[questionIndex].correctAnswer;
        if (value === correctAnswer) {
            correct++;
        }
    }
   

    $("#trivia")[0].innerHTML = '';

    $("#trivia").append("Correct Answers: " + correct + "<br>");
    $("#trivia").append("Wrong Answers: " + (10-correct));
};