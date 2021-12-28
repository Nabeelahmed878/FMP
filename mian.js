questionsArray = [
    {
        question: "Why so JavaScript and Java have similar name?",
        answer: "JavaScript's syntax is loosely based on Java's",
        options: [
            "JavaScript is a stripped-down version of Java",
            "JavaScript's syntax is loosely based on Java's",
            "They both originated on the island of Java",
            "None of the above",
        ]
    },
    {
        question: "When a user views a page containing a JavaScript program, which machine actually executes the script?",
        answer: "The User's machine running a Web browser",
        options: [
            "The User's machine running a Web browser",
            "The Web server",
            "A central machine deep within Netscape's corporate offices",
            "None of the above",
        ]
    },
    {
        question: "______ JavaScript is also called client-side JavaScript.",
        answer: "Navigator",
        options: [
            "Microsoft",
            "Navigator",
            "LiveWire",
            "Native",
        ]
    },
    {
        question: "What are variables used for in JavaScript Programs?",
        answer: "Storing numbers, dates, or other values",
        options: [
            "Storing numbers, dates, or other values",
            "Varying randomly",
            "Causing high-school algebra flashbacks",
            "None of the above",
        ]
    },
    {
        question: "_____ JavaScript statements embedded in an HTML page can respond to user events such as mouse-clicks, form input, and page navigation.",
        answer: "Client-side",
        options: [
            "Client-side",
            "Server-side",
            "Local",
            "Native",
        ]
    },
    {
        question: "Which of the following can't be done with client-side JavaScript?",
        answer: "Storing the form's contents to a database file on the server",
        options: [
            "Validating a form",
            "Sending a form's contents by email",
            "Storing the form's contents to a database file on the server",
            "None of the above",
        ]
    },
    {
        question: "Which of the following are capabilities of functions in JavaScript?",
        answer: "Accept parameters",
        options: [
            "Return a value",
            "Accept parameters and Return a value",
            "Accept parameters",
            "None of the above",
        ]
    },
    {
        question: "Which of the following is not a valid JavaScript variable name?",
        answer: "2names",
        options: [
            "2names",
            "_first_and_last_names",
            "FirstAndLast",
            "None of the above",
        ]
    },
    {
        question: "Which of the following attribute can hold the JavaScript version?",
        answer: "LANGUAGE",
        options: [
            "LANGUAGE",
            "SCRIPT",
            "VERSION",
            "None of the above",
        ]
    }
]
firebase.database().ref('todos').on('child_added',function(data){
    console.log(data.val())
})

function question(e){
    var question = document.getElementById("ques");
    question.innerHTML = "Q"+(e+1)+")" + questionsArray[0].question;

    var option = document.getElementsByClassName("option");
    for( var i= 0 ; i < option.length ; i++ ){
        option[i].innerHTML = questionsArray[e].options[i];
    }

}


var count = 0 ;
var score = 0 ;

function next(){
    calc()
    var radios = document.getElementsByClassName("radioBTn");
    if(count < questionsArray.length-1){
        for(var i = 0; i < radios.length; i++){
            if(radios[i].checked == true){
                count++;
                question(count);
                radios[i].checked = false
            }
        }
    }
    else{
        alert("score =====>" + score)
    }
}

function calc(){
    var radios = document.getElementsByClassName("radioBTn");
    var option = document.getElementsByClassName("option");
    for(var i = 0; i < radios.length; i++ ){
        if(radios[i].checked == true){
            if(option[i].innerHTML == questionsArray[count].answer){
                score++
            }
        }
    }
}
