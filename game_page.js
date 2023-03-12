var p1_name = localStorage.getItem("player1_name")
var p2_name = localStorage.getItem("player2_name")
var p1_score = 0
var p2_score = 0
document.getElementById("player1_name").innerHTML = p1_name + " : "
document.getElementById("player2_name").innerHTML = p2_name + " : "
document.getElementById("player1_score").innerHTML = p1_score
document.getElementById("player2_score").innerHTML = p2_score
document.getElementById("player_question").innerHTML = "Question turn: " + p1_name
document.getElementById("player_answer").innerHTML = "Answer turn: " + p2_name
function send() {
    getword = document.getElementById("word").value;
    word = getword.toLowerCase()
    c1 = word.charAt(1)
    l1 = Math.floor(word.length / 2)
    c2 = word.charAt(l1)
    l2 = word.length - 1
    c3 = word.charAt(l2)
    r1 = word.replace(c1, "_")
    r2 = r1.replace(c2, "_")
    r3 = r2.replace(c3, "_")
    qword = "<h4 id='word_display'>Q-" + r3 + "</h4>"
    inputbox = "<br>answer :<input type='text' id='input_check_box'"
    check_button = "<br><br><button class=' btn btn-success' onclick='check()'>Check</button>"
    row = qword + inputbox + check_button
    document.getElementById("output").innerHTML = row
    document.getElementById("word").value = ""
}
question_turn = "player1"
answer_turn = "player2"
function check() {
    getanswer = document.getElementById("input_check_box").value
    answer = getanswer.toLowerCase()
    if (answer == word) {
        if (answer_turn == "player1") {
            p1_score = p1_score + 1
            document.getElementById("player1_score").innerHTML = p1_score
        }
        else {
            p2_score = p2_score + 1
            document.getElementById("player2_score").innerHTML = p2_score
        }

    }
    if (question_turn == "player1") {
        question_turn = "player2"
        document.getElementById("player_question").innerHTML = "Question turn: " + p2_name
    }
    else {
        question_turn = "player1"
        document.getElementById("player_question").innerHTML = "Question turn: " + p1_name
    }
    if (answer_turn == "player1") {
        answer_turn = "player2"
        document.getElementById("player_answer").innerHTML = "Answer turn: " + p2_name
    }
    else {
        answer_turn = "player1"
        document.getElementById("player_answer").innerHTML = "Answer turn: " + p1_name
    }
    document.getElementById("output").innerHTML = ""
    if (p1_score==5) {
        document.getElementById("win").innerHTML =p1_name+ " has reached milestone of 5🥉"
    }
    if (p1_score==15) {
        document.getElementById("win").innerHTML =p1_name+ " has reached milestone of 15🥈"
    }
    if (p1_score>=30) {
        document.getElementById("win").innerHTML =p1_name+ " has been declared to be the winner of the word game🥇"
        document.getElementById("SEND").disabled=true
    }
    if (p2_score==5) {
        document.getElementById("win1").innerHTML =p2_name+ " has reached milestone of 5🥉"
    }
    if (p2_score==15) {
        document.getElementById("win1").innerHTML =p2_name+ " has reached milestone of 15🥈"
    }
    if (p2_score>=30) {
        document.getElementById("win1").innerHTML =p2_name+ " has been declared to be the winner of the word game🥇"
        document.getElementById("SEND").disabled=true
    }
}