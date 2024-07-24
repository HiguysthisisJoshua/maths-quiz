function login(){
    player1_name = document.getElementById("player1_name_input").value;
    player2_name = document.getElementById("player2_name_input").value;
    
    localStorage.setItem("player1Name",player1_name);
    localStorage.setItem("player2Name",player2_name);
    
    window.location = "quiz.html";
    }