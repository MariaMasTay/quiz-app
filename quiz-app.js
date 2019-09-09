//QUESTIONS & ANSWERS
var airQuestions = [
         {
            question: "Which is the primary greenhouse gas in Earth's atmosphere?",
            choiceA: "Ozone",
            choiceB: "Carbon dioxide",
            choiceC: "Water vapor",
            choiceD: "Methane",
            correct: "C",
            information: "The worst greenhouse gas is water. According to the Intergovernmental Panel on Climate Change, 36-70% of the greenhouse effect is due to water vapor in the Earth's atmosphere. An increase of the Earth's surface temperature increases the amount of water vapor air can hold, leading to increased warming. Carbon dioxide comes in second place because of its long-lasting effects, although methane, in third place, has a greater impact while active."
         },
         {
            question: "What is the biggest threat to ocean biodiversity?",
            choiceA: "Fishing",
            choiceB: "Plastic waste",
            choiceC: "Wastewater",
            choiceD: "Accidental oil leakage",
            correct: "A",
            information: "Fishing is estimated to kill two billion marine animals every day around the world, affecting not only species that are used for direct human consumption, but also those who serve as food for other farmed animals and bycatch which often gets caught in nets. Fishing materials also make up more than half of the Great Pacific Garbage Patch. By comparison, plastic and land waste in the oceans are thought to kill approximately 100,000 animals per year."
         },
         {
            question: "What is the main cause of deforestation?",
            choiceA: "Palm oil",
            choiceB: "Soy production",
            choiceC: "Logging",
            choiceD: "Animal agriculture",
            correct: "D",
            information: "According to a study done by the World Bank, 91% of deforestation in the Amazon Rainforest is caused by animal agriculture, especially cattle. Production and farming of cattle varies by region, but in the countries that account for most of the deforestation caused by the four major drivers, beef is responsible for more than twice as much deforestation as the other three commodities combined! Soy production comes in second place, but around 90% of soy beans are used as food for livestock so it’s relation to animal agriculture is significant."
          },
   ];


//DECLARE ALL VARIABLES
  //Entry card
let entry = document.getElementById("entry");
let front_card = document.getElementById("front_card");
let air = document.getElementById("air");
  //Quiz
let quiz_container = document.getElementById("quiz_container");
let quizContent = document.getElementById("quizContent");
let question = document.getElementById("question");
let choiceA = document.getElementById("choiceA");
let choiceB = document.getElementById("choiceB");
let choiceC = document.getElementById("choiceC");
let choiceD = document.getElementById("choiceD");
let result = document.getElementById("result");
  //Information card
let resultQuestion = document.getElementById("resultQuestion");
let information = document.getElementById("information");
let nextQuestion = document.getElementById("nextQuestion");
let pollution = document.getElementById("pollution");
let marine = document.getElementById("marine");
let deforestation = document.getElementById("deforestation");
  //Result
let final = document.getElementById("final");
let doomed = document.getElementById("doomed");
let hope = document.getElementById("hope");
let okay = document.getElementById("okay");
  //Other variables
let lastAirQuestion = airQuestions.length - 1;
let currentQuestionIndex = 0;
let puntuacio = 0;



//GO FROM HOMEPAGE TO QUIZ
function startQuiz(){
  entry.style.display = "none";
  front_card.style.display = "none";
  showQuestion();
  //renderProgress()
  quiz_container.style.display = "block";
}

air.addEventListener("click", startQuiz);



//SHOW QUESTION
function showQuestion(){
  let airQ = airQuestions[currentQuestionIndex];
  question.innerHTML = "<p>"+ airQ.question +"</p>";
  choiceA.innerHTML = "<p>"+ airQ.choiceA +"</p>";
  choiceB.innerHTML = "<p>"+ airQ.choiceB +"</p>";
  choiceC.innerHTML = "<p>"+ airQ.choiceC +"</p>";
  choiceD.innerHTML = "<p>"+ airQ.choiceD +"</p>";
  information.innerHTML = "<p>"+ airQ.information +"</p>";
  nextQuestion.style.display = "none";
}

    //Next question
    nextQuestion.addEventListener("click", renderNextQuestion);

    function renderNextQuestion() {
      if (currentQuestionIndex < lastAirQuestion) {
      currentQuestionIndex++;
      showQuestion();
      quizContent.style.display = "block";
      information.style.display = "none";
      result.style.display = "none";
      nextQuestion.style.display = "none";
      pollution.style.display = "none";
      marine.style.display = "none";
      deforestation.style.display = "none";
      } else {
        showScore();
      }
    }


//CHECK IF ANSWER IS CORRECT
function checkAnswer(answer) {
  information.style.display = "block";
  result.style.display = "block";
  nextQuestion.style.display = "block";
  quizContent.style.display = "none";


  if (currentQuestionIndex == 0) {
    pollution.style.display = "block";
  } else if (currentQuestionIndex == 1) {
    marine.style.display = "block";
  } else {
    deforestation.style.display = "block";
  }


  if (answer == airQuestions[currentQuestionIndex].correct) {
    //correct
    puntuacio++;
    answerIsCorrect();
  } else { //incorrect
    answerIsIncorrect();
  };


}

    //Show information
    function answerIsCorrect() {
      resultQuestion.innerHTML = "<p>"+ "That is correct!" +"</p>";
      information_card.style.display = "block";

    }

    function answerIsIncorrect() {
      resultQuestion.innerHTML = "<p>"+ "That is incorrect!" +"</p>";
      information_card.style.display = "block";

    }


//SHOW SCORE
function showScore() {
  final.style.display = "block";
  quiz_container.style.display = "none";
  //puntuacio

  if (puntuacio == 3) {
    choose.innerHTML = "<p>"+ "You scored 3 out of 3!" +"</p>";
    hope.style.display = "block";
    okay.style.display = "none";
    doomed.style.display = "none";
  } else if (puntuacio == 2) {
    choose.innerHTML = "<p>"+ "You scored 2 out of 3!" +"</p>";
    okay.style.display = "block"
    hope.style.display = "none";
    doomed.style.display = "none";
  } else if (puntuacio == 1) {
    choose.innerHTML = "<p>"+ "You scored 1 out of 3!" +"</p>";
    doomed.style.display = "block"
    okay.style.display = "none";
    hope.style.display = "none";
  } else if (puntuacio == 0) {
    choose.innerHTML = "<p>"+ "You scored 0 out of 3!" +"</p>";
    doomed.style.display = "block"
    okay.style.display = "none";
    hope.style.display = "none";
  }
}
