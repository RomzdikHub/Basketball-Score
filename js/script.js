let scoreEl1 = document.getElementById("score-el-1");
let scoreEl2 = document.getElementById("score-el-2");

let score1 = 0;
let score2 = 0;

function increment(points, team) {
    if(team === 'home') {
        score1 += points;
        scoreEl1.innerText = score1;
    } else if(team === 'away') {
        score2 += points;
        scoreEl2.innerText = score2;
    }
}