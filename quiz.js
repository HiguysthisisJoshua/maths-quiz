player1score = 0;
player2score = 0;


player1_name = localStorage.getItem("player1Name");
player2_name = localStorage.getItem("player2Name");

function add(){

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";
 
document.getElementById("player1_score").innerHTML = "  " + player1score;
document.getElementById("player2_score").innerHTML = "  " + player2score;


document.getElementById("player_Q").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_A").innerHTML = "Answer Turn - " + player2_name;
}
function set(){


    number1 = document.getElementById("Number1").value ;
    number2 = document.getElementById("Number2").value ;
    actual_answer = parseInt(number1) * parseInt(number2) ;


    question_number = "<h4>" + number1 +" X "+ number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button ="<br><br><button class= 'btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button ;
    document.getElementById("output").innerHTML = row;
    
    document.getElementById("Number1").innerHTML = "";
 
    document.getElementById("Number2").innersHTML = "";


}


question_turn = "player1";
answer_turn = "player2";


function check(){
    get_answer = document.getElementById('input_check_box').value ;
    if(get_answer == actual_answer){


        if(answer_turn == "player1"){
            player1score = player1score + 1 ;
            document.getElementById("player1_score").innerHTML = player1score ;
   
        }
        else{
            player2score = player2score + 1;
            document.getElementById("player2_score").innerHTML = player2score ;
        }
       
     }
   
   
   
    if( question_turn == "player1"){
        question_turn = 'player2';
        document.getElementById("player_Q").innerHTML = "Question Turn -" + player2_name ;
   
      }
    else{
   
    question_turn = 'player1' ;
    document.getElementById("player_Q").innerHTML = "Question Turn -" + player1_name ;
    }
   
   
   
    if( answer_turn == "player1"){
        answer_turn = 'player2';
        document.getElementById("player_A").innerHTML = "Answer Turn -" + player2_name ;
   
      }
    else{
   
    answer_turn = 'player1' ;
    document.getElementById("player_A").innerHTML = "Answer Turn -" + player1_name ;
    }
      document.getElementById("output").innerHTML = "";
   
    }


 


   

