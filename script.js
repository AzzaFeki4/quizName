let question=[
    {
        question: "Die Freiheitsstatue in New York war ein Geschenk von:",
        answer_one: "Italien",
        answer_two: "Frankreich",
        answer_three: "Kanada",
        answer_four: "Belgien",
        right_answer:2,
        answered: false,
        rightOr_Not: 0
    },
    {
        question: "Was ist H2O?",
        answer_one: "Wasser",
        answer_two: "Helium",
        answer_three: "Sauerstoff",
        answer_four: "Job",
        right_answer:1,
        answered: false,
        rightOr_Not: 0
    },
    {
        question: "In welchem Land wohnen die meisten Menschen?",
        answer_one: "China",
        answer_two: "USA",
        answer_three: "Russland",
        answer_four: "Kenia",
        right_answer:1,
        answered: false,
        rightOr_Not: 0
    },
    {
        question: "Auf welchen Kontinent liegt die Wüste Sahara?",
        answer_one: "Amerika",
        answer_two: "Asien",
        answer_three: "Afrika",
        answer_four: "Europa",
        right_answer:3,
        answered: false,
        rightOr_Not: 0
    },
    {
        question: "Von wem stammt die Relativitätstheorie?",
        answer_one: "Nikola Tesla",
        answer_two: "Stephen Hawking",
        answer_three: "Marie Curie",
        answer_four: "Albert Einstein",
        right_answer:4,
        answered: false,
        rightOr_Not: 0
    }
]

let currentQuestion = 0;

function init(){
    document.getElementById('all-questions').innerHTML= question.length;
    showQuestion();

}

function showQuestion(){
    let questiono = question[currentQuestion];

    document.getElementById('question').innerHTML = questiono['question'];
    document.getElementById('answer_1').innerHTML = questiono['answer_one'];
    document.getElementById('answer_2').innerHTML = questiono['answer_two'];
    document.getElementById('answer_3').innerHTML = questiono['answer_three'];
    document.getElementById('answer_4').innerHTML = questiono['answer_four'];
}

function answer(selection){
    if(question[currentQuestion]['answered']==false){
        if(selection.includes(question[currentQuestion]['right_answer'])){
            document.getElementById('answer_'+question[currentQuestion]['right_answer']).parentNode.classList.add('bg-success');
            question[currentQuestion]['rightOr_Not']=1;
        }
        
        else{
            document.getElementById(selection).parentNode.classList.add('bg-danger');
            document.getElementById('answer_'+question[currentQuestion]['right_answer']).parentNode.classList.add('bg-success');
            question[currentQuestion]['rightOr_Not']=0;
        }
        question[currentQuestion]['answered']=true;
    }

    document.getElementById('next-button').disabled =false;
    
}

function nextQuestion(){
    document.getElementById('next-button').disabled =true;
    currentQuestion++;
    if(currentQuestion<question.length){
        document.getElementById('current-question').innerHTML= currentQuestion+1;
        showQuestion();
        for(i=1; i<5;i++){
            document.getElementById(`answer_${i}`).parentNode.classList.remove('bg-success');
            document.getElementById(`answer_${i}`).parentNode.classList.remove('bg-danger');
        }
    }
    else if(currentQuestion==question.length){
        document.getElementById('next-button').innerHTML='gut gemacht!';
        document.getElementById('next-button').disabled =true;
        let total= countRightAnswers();
        window.alert('Du hast '+total+' richtige Fragen geantwortet. Super gemacht!');
    }
    
}

function countRightAnswers(){
    let total =0;
    for(i=0; i<question.length;i++){
        let a =question[i]['rightOr_Not'];
        total+=a;
    }
    return total;
}
