var p1Button = document.getElementById("p1");
var p2Button = document.querySelector("#p2");
var reset = document.querySelector("#reset");
var p1display = document.getElementById("p1display");
var p2display = document.getElementById("p2display");
var numInput = document.querySelector("input");
var wsdisplay = document.getElementById("wsdisplay");
var p1score = 0;
var p2score = 0;
var gameOver = false;
var winningScore = 3;
p1Button.addEventListener("click",function () {
	if(!gameOver){
		p1score++;
		if(p1score === winningScore){
			p1display.classList.add("winner");
			gameOver = true;
		}
		p1display.textContent = p1score;
	}
	
});
p2Button.addEventListener("click",function () {
	if(!gameOver){
		p2score++;
		if(p2score === winningScore){
			gameOver = true;
			p2display.classList.add("winner");
		}
		p2display.textContent = p2score;
	}
	
});

reset.addEventListener("click",function () {
	final();
});

function final(){
	p1score=0;
	p2score=0;
	p2display.textContent = 0;
	p1display.textContent = 0;
	p2display.classList.remove("winner");
	p1display.classList.remove("winner");
	gameOver = false;
}
numInput.addEventListener("change", function(){
	winningScore = Number(numInput.value);
	wsdisplay.textContent = numInput.value;
	final();
});