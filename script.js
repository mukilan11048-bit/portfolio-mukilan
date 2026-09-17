// ===============================
// ECE QUIZ - 25 QUESTIONS
// ===============================

const questions = [

    {
        question: "What does ECE stand for?",
        options: [
            "Electrical Computer Engineering",
            "Electronics and Communication Engineering",
            "Electronic Computer Engineering",
            "Electrical Communication Equipment"
        ],
        answer: 1
    },

    {
        question: "What is the SI unit of electric current?",
        options: [
            "Volt",
            "Ohm",
            "Ampere",
            "Watt"
        ],
        answer: 2
    },

    {
        question: "What is the SI unit of resistance?",
        options: [
            "Volt",
            "Ohm",
            "Ampere",
            "Hertz"
        ],
        answer: 1
    },

    {
        question: "Which component stores electrical energy?",
        options: [
            "Resistor",
            "Capacitor",
            "Diode",
            "Transistor"
        ],
        answer: 1
    },

    {
        question: "Which component limits electric current?",
        options: [
            "Resistor",
            "Capacitor",
            "Diode",
            "Battery"
        ],
        answer: 0
    },

    {
        question: "Which component allows current mainly in one direction?",
        options: [
            "Resistor",
            "Diode",
            "Capacitor",
            "Transformer"
        ],
        answer: 1
    },

    {
        question: "What does LED stand for?",
        options: [
            "Light Energy Device",
            "Light Emitting Diode",
            "Low Energy Diode",
            "Light Electronic Device"
        ],
        answer: 1
    },

    {
        question: "Which component is commonly used for amplification?",
        options: [
            "Transistor",
            "Resistor",
            "Capacitor",
            "Switch"
        ],
        answer: 0
    },

    {
        question: "What does IC stand for?",
        options: [
            "Integrated Circuit",
            "Internal Circuit",
            "Input Controller",
            "Integrated Computer"
        ],
        answer: 0
    },

    {
        question: "What does PCB stand for?",
        options: [
            "Power Control Board",
            "Printed Circuit Board",
            "Primary Circuit Box",
            "Power Circuit Board"
        ],
        answer: 1
    },

    {
        question: "Which device converts sound into an electrical signal?",
        options: [
            "Speaker",
            "Microphone",
            "Antenna",
            "Amplifier"
        ],
        answer: 1
    },

    {
        question: "Which device converts an electrical signal into sound?",
        options: [
            "Microphone",
            "Antenna",
            "Speaker",
            "Sensor"
        ],
        answer: 2
    },

    {
        question: "Which device transmits and receives radio signals?",
        options: [
            "Antenna",
            "Resistor",
            "Capacitor",
            "Diode"
        ],
        answer: 0
    },

    {
        question: "What is the SI unit of frequency?",
        options: [
            "Volt",
            "Ohm",
            "Hertz",
            "Watt"
        ],
        answer: 2
    },

    {
        question: "Which material is commonly used as a semiconductor?",
        options: [
            "Copper",
            "Silicon",
            "Iron",
            "Aluminium"
        ],
        answer: 1
    },

    {
        question: "Which type of waves are used by Wi-Fi?",
        options: [
            "Sound waves",
            "Radio waves",
            "Water waves",
            "Seismic waves"
        ],
        answer: 1
    },

    {
        question: "Which technology is mainly used for short-range wireless communication?",
        options: [
            "Bluetooth",
            "GPS",
            "AM Radio",
            "Satellite TV"
        ],
        answer: 0
    },

    {
        question: "What does GPS stand for?",
        options: [
            "Global Positioning System",
            "General Position System",
            "Global Power System",
            "Ground Position Signal"
        ],
        answer: 0
    },

    {
        question: "Which instrument measures voltage?",
        options: [
            "Ammeter",
            "Voltmeter",
            "Ohmmeter",
            "Wattmeter"
        ],
        answer: 1
    },

    {
        question: "Which instrument displays electrical waveforms?",
        options: [
            "Multimeter",
            "Ammeter",
            "Oscilloscope",
            "Voltmeter"
        ],
        answer: 2
    },

    {
        question: "What is the main function of a transformer?",
        options: [
            "Store charge",
            "Change AC voltage level",
            "Measure current",
            "Generate light"
        ],
        answer: 1
    },

    {
        question: "Which device converts AC into DC?",
        options: [
            "Rectifier",
            "Amplifier",
            "Oscillator",
            "Antenna"
        ],
        answer: 0
    },

    {
        question: "What is the main function of an amplifier?",
        options: [
            "Increase signal strength",
            "Store electrical charge",
            "Convert AC to DC",
            "Measure resistance"
        ],
        answer: 0
    },

    {
        question: "Which device detects physical quantities such as temperature or light?",
        options: [
            "Sensor",
            "Transformer",
            "Resistor",
            "Antenna"
        ],
        answer: 0
    },

    {
        question: "What does 5G refer to in mobile communication?",
        options: [
            "Fifth Generation",
            "Fifth Gateway",
            "Five Gigabytes",
            "Five Generators"
        ],
        answer: 0
    }

];


// ===============================
// VARIABLES
// ===============================

let currentQuestion = 0;

let score = 0;

let timeLeft = 30;

let timer;


// ===============================
// GET HTML ELEMENTS
// ===============================

const questionElement =
    document.getElementById("question");

const optionsElement =
    document.getElementById("options");

const nextButton =
    document.getElementById("next-btn");

const timerElement =
    document.getElementById("timer");

const questionNumberElement =
    document.getElementById("question-number");

const scoreElement =
    document.getElementById("score");

const progressElement =
    document.getElementById("progress");


// ===============================
// SHOW QUESTION
// ===============================

function showQuestion() {

    // Stop previous timer
    clearInterval(timer);

    // Reset timer
    timeLeft = 30;

    timerElement.textContent = timeLeft;

    timerElement.classList.remove(
        "timer-warning",
        "timer-danger"
    );


    // Get current question
    const current =
        questions[currentQuestion];


    // Question number
    questionNumberElement.textContent =
        `Question ${currentQuestion + 1} / ${questions.length}`;


    // Score
    scoreElement.textContent = score;


    // Progress
    const progress =
        ((currentQuestion + 1) / questions.length) * 100;

    progressElement.style.width =
        progress + "%";


    // QUESTION ANIMATION

    questionElement.style.animation = "none";

    void questionElement.offsetWidth;

    questionElement.style.animation =
        "questionAnimation 0.5s ease";


    // Show question
    questionElement.textContent =
        current.question;


    // Remove old options
    optionsElement.innerHTML = "";


    // Create new options
    current.options.forEach(
        (optionText, index) => {

            const button =
                document.createElement("button");

            button.className = "option";

            button.textContent =
                optionText;


            button.addEventListener(
                "click",
                function () {

                    checkAnswer(
                        index,
                        button
                    );

                }
            );


            optionsElement.appendChild(button);

        }
    );


    // Hide next button
    nextButton.style.display =
        "none";


    // Start timer
    startTimer();
}


// ===============================
// 30 SECOND TIMER
// ===============================

function startTimer() {

    timer = setInterval(
        function () {

            timeLeft--;

            timerElement.textContent =
                timeLeft;


            if (timeLeft <= 10) {

                timerElement.classList.add(
                    "timer-warning"
                );

            }


            if (timeLeft <= 5) {

                timerElement.classList.remove(
                    "timer-warning"
                );

                timerElement.classList.add(
                    "timer-danger"
                );

            }


            if (timeLeft <= 0) {

                clearInterval(timer);

                timeUp();

            }

        },
        1000
    );
}


// ===============================
// CHECK ANSWER
// ===============================

function checkAnswer(
    selectedAnswer,
    selectedButton
) {

    clearInterval(timer);


    const correctAnswer =
        questions[currentQuestion].answer;


    const allOptions =
        document.querySelectorAll(".option");


    // Disable all buttons
    allOptions.forEach(
        button => {

            button.disabled = true;

        }
    );


    // Correct answer
    if (selectedAnswer === correctAnswer) {

        selectedButton.classList.add(
            "correct"
        );

        score++;

        scoreElement.textContent =
            score;

    }

    // Wrong answer
    else {

        selectedButton.classList.add(
            "wrong"
        );

        allOptions[correctAnswer]
            .classList.add("correct");

    }


    // Show next button
    nextButton.style.display =
        "block";
}


// ===============================
// TIME UP
// ===============================

function timeUp() {

    const allOptions =
        document.querySelectorAll(".option");


    const correctAnswer =
        questions[currentQuestion].answer;


    // Disable answers
    allOptions.forEach(
        button => {

            button.disabled = true;

        }
    );


    // Show correct answer
    allOptions[correctAnswer]
        .classList.add("correct");


    nextButton.style.display =
        "block";

    nextButton.textContent =
        "⏰ Time Up! Next ➡️";
}


// ===============================
// NEXT QUESTION
// ===============================

nextButton.addEventListener(
    "click",
    function () {

        currentQuestion++;


        if (
            currentQuestion <
            questions.length
        ) {

            nextButton.textContent =
                "Next Question ➡️";

            showQuestion();

        }

        else {

            showResult();

        }

    }
);


// ===============================
// RESULT
// ===============================

function showResult() {

    clearInterval(timer);


    questionElement.innerHTML =
        `🎉 Quiz Completed!<br><br>
         Your Score: ${score} / ${questions.length}`;

    optionsElement.innerHTML = "";

    nextButton.style.display =
        "none";

    document.querySelector(".timer").style.display =
        "none";

    progressElement.style.width =
        "100%";

}


// ===============================
// START QUIZ
// ===============================

showQuestion();