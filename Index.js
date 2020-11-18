

answer = () =>{

let click_me = prompt("How old are you?")

let ans = click_me * 365;

let body = document.getElementById("click");

var h1 = document.createElement("h1");
var textAnswer = document.createTextNode("you are " + ans + " days old");
h1.setAttribute("id", "ageInDays");
h1.appendChild(textAnswer);
document.getElementById('space_ans').appendChild(h1);

//  alert();
}

reset = () =>{

   // let remove = document.getElementById("ageInDays");

    document.getElementById("ageInDays").remove();

}

//Challenge 2 Cat Generator
show_img = () =>{
let image = document.createElement('img');
let img_result = document.getElementById("flex-box-container-2");

image.src="https://api.thecatapi.com/api/images/get?format=src&type=gif&size=small";

img_result.appendChild(image);

}

//Challenge 3 Rock, Paper, Scissors

function rpsGame(yourChoice){
console.log(yourChoice);
var humanChoice, botpic_choice;
humanChoice = yourChoice.id;

botChoice = numberToChoice(randToRpsInt());
console.log('computer Choice:', botChoice);

results = decideWinner(humanChoice, botChoice); // [0,1] human lost | bot won
console.log(results);

message = finalMessage(results); //'You Won!'
console.log(message);
rpsFrontEnd(yourChoice.id, botpic_choice, message);

}

function randToRpsInt(){
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number){
return ["rock", "paper", "scissors"][number];
}

function decideWinner(yourChoice, computerChoice){
    var rpsDatabase = {
        'rock':{'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper':{'rock': 1, 'paper': 0.5, 'scissors':0},
        'scissors':{'paper': 1, 'scissors':0.5, 'rock': 0}
    };
    
    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]){
if (yourScore === 0){
return {'message': 'You lost!', 'color': 'red'};
} else if(yourScore === 0.5){
return{'message': 'You Tied!', 'color': 'yellow'};
}
else{
    return{'message': 'You Won!', 'color': 'green'};
}

}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){

    var picturesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    

    //remove images

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    //create the div's
    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + picturesDatabase[humanImageChoice] + "' height= 150 width= 150 style = 'box-shadow: 0px 10px 50px rgba(37,50,233, 1);'>"
    messageDiv.innerHTML= "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + picturesDatabase[botImageChoice] + "' height= 150 width= 150 style = 'box-shadow: 0px 10px 50px rgba(243,38,24, 1);'>"

   // humanDiv.style.boxShadow = "0px 10px 50px rgba(37,50,233, 1)"
   // botDiv.style.boxShadow = "0px 10px 50px rgba(243,38,24, 1)"

     document.getElementById('flex-box-rps-div').appendChild(humanDiv);
     document.getElementById('flex-box-rps-div').appendChild(messageDiv);
     document.getElementById('flex-box-rps-div').appendChild(botDiv);
     

}








