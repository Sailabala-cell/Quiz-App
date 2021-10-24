const quizDB = [
    {
        question:"Q1:Which type of JavaScript language is__",
        a:"Object-Oriented",
        b:"Object-Based",
        c:"Assembly-language",
        d:"High-level"  ,
        ans:"ans2"

    },

    
    {
        question:" The Nobel Prize is awarded in _____ categories.",
        a:"5",
        b:"6",
        c:"7",
        d:"8"  ,
        ans:"ans2",
    },
    {
        question:" What divides the planet Earth into Southern and Northern Hemispheres?",
        a:"Equator",
        b:"SouthPole",
        c:"NorthPole",
        d:"Axis of rotation"  ,
        ans:"ans1",
    },
    {
        question:" The world’s longest land-border between two countries is the border between",
        a:"China and Russia",
        b:" China and Mongolia",
        c:"Mexico and the United States",
        d:"Canada and the United States"  ,
        ans:"ans4",
    },
    {
        question:"A liquid called tears produced by the tear glands of each eye contains",
        a:"Water and minerals",
        b:" Proteins and hormones",
        c:"Antibodies and enzymes",
        d:"All of the above"  ,
        ans:"ans4",
    },
    
];
const question = document.querySelector('.question')
const option1 = document.querySelector('#option1')
const option2 = document.querySelector('#option2')
const option3 = document.querySelector('#option3')
const option4 = document.querySelector('#option4')
const submit = document.querySelector('#submit')
const answers= document.querySelectorAll('.answer')
const showScore= document.querySelector('#showScore')
let questionCount=0;
let score=0;

const loadQuestion = () => {

    const questionList=quizDB[questionCount]

    question.innerText=questionList.question

    option1.innerText = questionList.a
    option2.innerText = questionList.b
    option3.innerText = questionList.c
    option4.innerText = questionList.d
}
loadQuestion()

const getCheckAnswer = () => {
    let answer;
    answers.forEach((currAnsElem) => {
        if(currAnsElem.checked){
             answer = currAnsElem.id
        }
        
    })
  return answer
}

const deselectAll = () => {
    answers.forEach((currAnsElem) => currAnsElem.checked = false)
}

submit.addEventListener('click',() =>{
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer)

    if(checkedAnswer===quizDB[questionCount].ans){
        score++
    }
    questionCount++;
    deselectAll();
    if(questionCount<quizDB.length){
        loadQuestion();
    }else{
         showScore.innerHTML = `
         <h3> You scored ${score}/${quizDB.length} 👍 </h3>
         <button class="btn" onclick="location.reload()">Play Again</button>
         `
         showScore.classList.remove('scoreArea')
    }
});