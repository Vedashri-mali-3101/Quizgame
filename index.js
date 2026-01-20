const questions = [
    
    // Python Questions
    
    {
        id: 1,
        question: "1. What is Python?",
        options: [
            "Programming Language",
            "Snake",
            "Car",
            "Game"
        ],
        correct: "A. Programming Language",
        category: "Python"
    },
    {
        id: 2,
        question:" Which of the following is the correct way to print in Python?",
        options: [
            " print('Hello')",
            " echo('Hello')",
            " printf('Hello')",
            " console.log('Hello')"
        ],
        correct: "A. print('Hello')",
        category: "Python"
    },
    {
        id: 3,
        question: ` What is the output?
                   x = 5,
                   y = 2,
                   print(x // y)
                   `,
        options: [
            "5",
            "2",
            "3",
            "Error"
        ],
        correct: "2",
        category: "Python"
    },
    {
        id: 4,
        question: " 4. Which data type is used to store True or False values?",
        options: [
            "int",
            "float",
            "bool",
            "str"
        ],
        correct: "bool",
        category: "Python"
    },
    {
        id: 5,
        question: " Which keyword is used to define a function in Python?",
        options: [
            "def",
            "func",
            "define",
            "function"
        ],
        correct: "def",
        category: "Python"
    },
    {
        id: 6,
        question: `6. What will be the output?
                      list1 = [1, 2, 3]
                      list1.append([4, 5])
                      print(len(list1))
          `,
        options: [
            "3",
            "4",
            "5",
            "6"
        ],
        correct: "4",
        category: "Python"
    },

    {
        id: 7,
        question: " Which of the following is immutable in Python?",
        options: [
            "List",
            "Dictionery",
            "set",
            "Tuple"
        ],
        correct: "Tuple",
        category: "Python"
    },
    {
        id: 8,
        question: ` What is the output?
                   a = "Python"
                   print(a[::-1])
                                  `,
        options: [
            "Python",
            "nonhtyp",
            "Error",
            "No output"
        ],
        correct: "nonhtyp",
        category: "Python"
    },
    {
        id: 9,
        question: "Which statement is used to handle exceptions in Python",
        options: [
            "try-except",
            "catch-throw",
            "handle-error",
            "error-catch"
        ],
        correct: "try-except",
        category: "Python"
    },
    {
        id: 10,
        question: " What does *args allow in a function?",
        options: [
            "Only keyword arguments",
            "Fixed number of arguments",
            "Variable number of positional arguments",
            "Only integers"
        ],
        correct: "Variable number of positional arguments",
        category: "Python"
    },
   



    // HTML Questions


    {
        id: 1,
        question: "Which HTML attribute improves accessibility for form inputs?",
        options: [
            "title",
            "alt",
            "aria-label",
            "name"
        ],
        correct: "aria-label",
        category: "HTML"
    },    
    {
        id: 2,
        question: "What is the purpose of the <meta viewport> tag?",
        options: [
            "SEO ranking",
            "Responsive layout",
            "Page speed",
            "Charset"
        ],
        correct: "Responsive layout",
        category: "HTML"
    },   
    {
        id: 3,
        question: "3. Which element is best for navigation links?",
        options: [
            "<div>",
            "<span>",
            "<nav>",
            "<section>"
        ],
        correct: "<nav>",
        category: "HTML"
    } ,   
    {
        id: 4,
        question: " 4. What does the defer attribute do in <script>?",
        options: [
            "Loads script asynchronously",
            "Delays execution until HTML parsed",
            "Blocks rendering",
            "Runs before HTML"
        ],
        correct: "Delays execution until HTML parsed",
        category: "HTML"
    },   
    {
        id: 5,
        question: "Which attribute improves SEO for images?",
        options: [
            "title",
            "alt",
            "id",
            "name"
        ],
        correct: "alt",
        category: "HTML"
    }, 
    {
        id: 6,
        question: "async in script means?",
        options: [
            "Block parsinge",
            "Load later, run immediately",
            "Run after DOM",
            "Cache script"
        ],
        correct: "Load later, run immediately",
        category: "HTML"
    },
   {
        id: 7,
        question: ` Purpose of aria-hidden="true"? `,
        options: [
            "Hide visually",
            "Disable input",
            "Hide from screen readers",
            "Remove DOM"
        ],
        correct: "Hide from screen readers",
        category: "HTML"
    },
   {
        id: 8,
        question: " Which input type shows numeric keypad on mobile?",
        options: [
            "text",
            "number",
            "range",
            "tel"
        ],
        correct: "number",
        category: "HTML"
    },
  {
        id: 9,
        question: " What does <picture> tag provide?",
        options: [
            "Video support",
            "Responsive images",
            "SVG rendering",
            "Lazy loading"
        ],
        correct: "Responsive images",
        category: "HTML"
    },
 {
        id: 10,
        question: "  Which tag defines footer for a section?",
        options: [
            "<bottom>",
            "<footer>",
            "<aside>",
            "<nav>"
        ],
        correct: "<footer>",
        category: "HTML"
    },
  

    // CSS Questions

    
    {
        id: 1,
        question: "  Which creates a flex container?",
        options: [
            "display: block",
            "position: flex",
            "display: flex",
            "float: flex"
        ],
        correct: "display: flex",
        category: "CSS"
    },
    {
        id: 2,
        question: "Which unit is viewport-based?",
        options: [
            "em",
            "rem",
            "vh",
            "%"
        ],
        correct: "vh",
        category: "CSS"
    },
    {
        id: 3,
        question: "  z-index works only with?",
        options: [
            "static",
            "relative/absolute",
            "float",
            "inline"
        ],
        correct: "relative/absolute",
        category: "CSS"
    },
    {
        id: 4,
        question: "  Which property hides overflow content?",
        options: [
            "display",
            "visibility",
            "overflex",
            "opacity"
        ],
        correct: "overflex",
        category: "CSS"
    },
    {
        id: 5,
        question: "  What does position: sticky do?",
        options: [
            "Fixed always",
            "Relative always",
            "Switches relative to fixed",
            "Absolute position"
        ],
        correct: "Switches relative to fixed",
        category: "CSS"
    },
    {
        id: 6,
        question: "  Best property for smooth animation?",
        options: [
            "transform",
            "margin",
            "left",
            "width"
        ],
        correct: "transform",
        category: "CSS"
    },
    {
        id: 7,
        question: " Which pseudo-class selects first child?",
        options: [
            ":first",
            ":first-of-type",
            ":first-child",
            ":nth-child(0)"
        ],
        correct: ":first-child",
        category: "CSS"
    },
    {
        id: 8,
        question: "  Which creates grid layout?",
        options: [
            "block",
            "flex",
            "grid",
            "inline"
        ],
        correct: "grid",
        category: "CSS"
    },
    {
        id: 9,
        question: "  Which property controls text spacing?",
        options: [
            "line-height",
            "word-break",
            "white-space",
            "letter-spacing"
        ],
        correct: "line-height",
        category: "CSS"
    },
    {
        id: 10,
        question: " Which hides element but keeps space?",
        options: [
            "isplay: none",
            "opacity:0",
            "visibility:hidden",
            "z-index:-1"
        ],
        correct: "visibility:hidden",
        category: "CSS"
    },




  // javaScript Questions

    {
        id: 1,
        question: " Which keyword defines block scope?",
        options: [
            " var",
            " let",
            " const",
            " both B & C"
        ],
        correct :  " both B & C",
        category: "JavaScript"
    },    
    {
        id: 2,
        question: " What is a closure?",
        options: [
            "Loop",
            "Callback ",
            "Preserved lexical scope",
            "Object method"
        ],
        correct: "Preserved lexical scope",
        category: "JavaScript"
    },   
    {
        id: 3,
        question: " Which method converts JSON to object?",
        options: [
            "JSON.stringify",
            "JSON.parse",
            "JSON.object",
            "parse.JSON"
        ],
        correct:  "JSON.parse",
        category: "JavaScript"
    },  
    {
        id: 4,
        question: " What does event.preventDefault() do?",
        options: [
            " Stop bubbling",
            " Stop default action",
            " Stop execution",
            " Remove event"
        ],
        correct:  " Stop default action",
        category: "JavaScript"
    }, 
    {
        id: 5,
        question: " Promise state when resolved?",
        options: [
            "pending",
            "rejected",
            "fulfilled",
            "completed"
        ],
        correct:  "fulfilled",
        category: "JavaScript"
    }, 
    {
        id: 6,
        question: "Which runs code after delay?",
        options: [
            "setInterval",
            "setTimeout",
            "requestAnimationFrame",
            "delay()"
        ],
        correct:  "setTimeout",
        category: "JavaScript"
    },
{
        id: 7,
        question: "What does === check?",
        options: [
            "Value only",
            "Type only",
            "Value & type",
            "Reference"
        ],
        correct:  "both B & C",
        category: "JavaScript"
    },
    {
        id: 8,
        question: " Which loop is best for arrays?",
        options: [
            "for…in",
            "for",
            "for…of",
            "while"
        ],
        correct:  "for…of",
        category: "JavaScript"
    },
    {
        id: 9,
        question: "Which keyword stops loop?",
        options: [
            "stop",
            "exit",
            "break",
            "return"
        ],
        correct:  "break",
        category: "JavaScript"
    }, 
    {
        id: 10,
        question: "What is NaN?",
        options: [
            "String",
            "Error",
            "Not a Number value",
            "Undefined"
        ],
        correct:  "Not a Number value",
        category: "JavaScript"
    },

];




let username='';
let category='';
let questionCount=0;
let index=0;
let score=0;

let questionAttempt = 0;
let attempted = false;


function getName(event){
 username=document.getElementById('name-input').value ;



   if(username==''){
   alert('name is required');
   }
    //console.log(username);
     event.preventDefault();
document.getElementById('name-input').value='';

let welcomeNote=`<P>Welcome ,${username} you can start the quiz now!</p>`

    document.getElementById('welcome-note').innerHTML=welcomeNote
}


function startQuiz(event){

if(username==''){
   alert('name is required');
   return false;
   }

    category=event.target.value;
 categoryQuestions=questions.filter((question=>category== question.category));
 questionCount = 0;
  score = 0;

    document.getElementById('container').innerHTML=""
    let quiz=`<h1> ${event.target.value}</h1>
    <div class="container">
         <div>Timer</div>
         <div id="score">Score</div>
    </div>
<div id="question-count">QC</div>
<div id="question-container">Question 1</div> 
<div id="option-container">Options </div>
<button onclick="nextQue()" id="next">Next</button>`
    document.getElementById('container').innerHTML=quiz;
    displayQuestion();
}

function displayQuestion(){

    attempted = false;

let questionContainer=document.getElementById('question-container');

questionContainer.innerHTML="";
document.getElementById('question-count').innerHTML=`${questionCount+1}/10`

const categoryQuestions=questions.filter((question=>category== question.category))

let questionTag= document.createElement('p');
  questionContainer.textContent=categoryQuestions[questionCount].question;
  
  questionContainer.appendChild(questionTag);
displayOptions(categoryQuestions[questionCount]);

}



function displayOptions(question){
    let optionContainer=document.getElementById('option-container');
optionContainer.innerHTML="";

question.options.forEach((option,index) => {

    const btn=document.createElement('input');
    btn.type="radio";
    btn.name="quiz";
    btn.value=option;
    btn.textContent=option;
    btn.id="opt"+index;
 btn.classList.add("radio-input");


 const label=document.createElement('label');
    label.htmlFor=btn.id;
    label.textContent=option;
     label.classList.add("radio-btn");
console.log(label.htmlFor)


label.onclick=()=>{

//Array.from(optionContainer.children).forEach(b => b.classList.remove('selected'));

         // if (selectedBtn) selectedBtn.classList.remove('selected'); btn.classList.add('selected'); selectedBtn = btn;

         // btn.classList.add('selected');
        checkAns(label,question.correct);
        

       // Array.from(optionContainer.children).forEach(b => { if (b !== btn) b.disabled = true; });
    }

    
        optionContainer.appendChild(btn);
        optionContainer.appendChild(label);



})
}


function checkAns(label, correct) {


    if (!attempted) {
        questionAttempt++;
        attempted = true;
    }


    // clearInterval(timer);
document.querySelectorAll('.radio-btn').forEach(l => {
  l.style.pointerEvents = "none";
});



console.log("Label:", label.textContent);
console.log("Correct:", correct.trim());


    if (label.textContent=== correct.trim()) {
        label.classList.add("correct");
        score++;

      label.style.backgroundColor = "green";
label.style.color = "white";
label.style.border = "2px solid green";

        console.log(label)
        
    } else {

        label.classList.add("wrong");

        label.style.backgroundColor = "red";
label.style.color = "white";
label.style.border = "2px solid red";

        
        // console.log(label)
    }
   document.getElementById('score').textContent =` Score: ${score}`;
// setTimeout(nextQue, 1000);
}


function nextQue() {
        
    questionCount++;

    if (questionCount >= categoryQuestions.length) {
        marks();
    } else {
        displayQuestion();
    }
}




function marks(){

    let percentage = (score / questionCount)*100;
    let result = percentage >= 50 ? 'passed' : 'failed';

        document.getElementById('container').innerHTML = `
   
    <div class="score-container">
     <h1 class="userName"> ${username}, Your Quiz is Completed !</h1>&nbsp;<br><br>
    <p id = "head">Your Total Question are : <br>${questionCount} </p>
   
<p>Attempted Questions: ${questionAttempt}</p>
    <p id = "head"> Total Marks  are :<br> ${score} </p>
    <p id = "head"> Percentage : <br>${percentage}% </p>
    <br>
    <p id = "head">You have ${result} the Quiz </p>
    </div>
    <br><br>    
    <button onclick="location.reload()" id="restart" > Restart Quiz </ button>
    `;

}

