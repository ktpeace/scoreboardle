// https://github.com/dulldesk/words-api/

// Wordle
let cardtainer = document.querySelector(".cardtainer");

let kathy1 = document.querySelector(".kathy1").innerHTML;
let kathy2 = document.querySelector(".kathy2").innerHTML;
let kathywscore = (kathy1 * 3) + parseInt(kathy2);
let kathyw = document.querySelector(".kathyw");

let teresa1 = document.querySelector(".teresa1").innerHTML;
let teresa2 = document.querySelector(".teresa2").innerHTML;
let teresawscore = (teresa1 * 3) + parseInt(teresa2);
let teresaw = document.querySelector(".teresaw");

let kat1 = document.querySelector(".kat1").innerHTML;
let kat2 = document.querySelector(".kat2").innerHTML;
let katwscore = (kat1 * 3) + parseInt(kat2);
let katw = document.querySelector(".katw");

if (kathywscore > teresawscore && kathywscore > katwscore) {
    kathyw.innerHTML = "Wordle 🥇";
} else if (teresawscore > kathywscore && teresawscore > katwscore) {
    teresaw.innerHTML = "Wordle 🥇";
} else if (katwscore > kathywscore && katwscore > teresawscore) {
    katw.innerHTML = "Wordle 🥇";
}
else if (kathywscore === teresawscore && kathywscore === katwscore) {
    kathyw.innerHTML = "Wordle 🥇";
    teresaw.innerHTML = "Wordle 🥇";
    katw.innerHTML = "Wordle 🥇";
} else if (kathywscore === teresawscore) {
    kathyw.innerHTML = "Wordle 🥇";
    teresaw.innerHTML = "Wordle 🥇";
} else if (kathywscore === katwscore) {
    kathyw.innerHTML = "Wordle 🥇";
    katw.innerHTML = "Wordle 🥇";
} else if (katwscore === teresawscore) {
    katw.innerHTML = "Wordle 🥇";
    teresaw.innerHTML = "Wordle 🥇";
}

// if (katw.innerHTML === "Wordle 🥇") {
//     cardtainer.innerHTML = ''
// } else if (teresaw.innerHTML === "Wordle 🥇") {

// } else if (kathyw.innerHTML = "Wordle 🥇") {

// }

// Quordle
let kathyq1 = document.querySelector(".kathyq1").innerHTML;
let kathyq2 = document.querySelector(".kathyq2").innerHTML;
let kathyqscore = (kathyq1 * 2) + parseInt(kathyq2);
let kathyq = document.querySelector(".kathyq");

let teresaq1 = document.querySelector(".teresaq1").innerHTML;
let teresaq2 = document.querySelector(".teresaq2").innerHTML;
let teresaqscore = (teresaq1 * 2) + parseInt(teresaq2);
let teresaq = document.querySelector(".teresaq");

let katq1 = document.querySelector(".katq1").innerHTML;
let katq2 = document.querySelector(".katq2").innerHTML;
let katqscore = (katq1 * 2) + parseInt(katq2);
let katq = document.querySelector(".katq");

if (kathyqscore > teresaqscore && kathyqscore > katqscore) {
    kathyq.innerHTML = "Quordle 🥇";
} else if (teresaqscore > kathyqscore && teresaqscore > katqscore) {
    teresaq.innerHTML = "Quordle 🥇";
} else if (katqscore > kathyqscore && katqscore > teresaqscore) {
    katq.innerHTML = "Quordle 🥇";
}
else if (kathyqscore === teresaqscore && kathyqscore === katqscore) {
    kathyq.innerHTML = "Quordle 🥇";
    teresaq.innerHTML = "Quordle 🥇";
    katq.innerHTML = "Quordle 🥇";
} else if (kathyqscore === teresaqscore) {
    kathyq.innerHTML = "Quordle 🥇";
    teresaq.innerHTML = "Quordle 🥇";
} else if (kathyqscore === katqscore) {
    kathyq.innerHTML = "Quordle 🥇";
    katq.innerHTML = "Quordle 🥇";
} else if (katqscore === teresaqscore) {
    katq.innerHTML = "Quordle 🥇";
    teresaq.innerHTML = "Quordle 🥇";
}