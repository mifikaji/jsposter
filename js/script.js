document.addEventListener('DOMContentLoaded', () =>{
	// появляется подсказка
	const sun = document.querySelector(".sun");
	const tip = document.querySelector(".tip");

	sun.addEventListener("click", function () {
		console.log(tip.classList);
		tip.classList.toggle("hidden");
	})
	
	// появляется 1 игра
	const start1 = document.querySelector(".start1");
	const game1 = document.querySelector(".game1");

	start1.addEventListener("click", function () {
		console.log(game1.classList);
		game1.classList.toggle("hidden");
	})

	// появляется 2 игра
	const star2 = document.querySelector(".start2");
	const game2 = document.querySelector(".game2");

	star2.addEventListener("click", function () {
		console.log(game2.classList);
		game2.classList.toggle("hidden");
	})

	// появляется 3 игра
	const star3 = document.querySelector(".start3");
	const game3 = document.querySelector(".game3");

	star3.addEventListener("click", function () {
		console.log(game3.classList);
		game3.classList.toggle("hidden");
	})

	// 1 игра
	const cards = document.querySelectorAll('.card'); 
	let flippedCard = false; 
	let lockCard = false; 
	let firstCard, secondCard; 
	
	function flipCard() { 
		if (lockCard || this === firstCard) return; 
		this.classList.add('flip'); 
		if (!flippedCard) { 
			flippedCard = true; 
			firstCard = this; 
			return; 
		} 
		secondCard = this; 
		checkForMatch(); 
	} 

	function checkForMatch() { 
		let isMatch = firstCard.dataset.framework === secondCard.dataset.framework; 
		isMatch ? disableCards() : unflipCards(); 
	} 
	
	function disableCards() { 
		firstCard.removeEventListener('click', flipCard); 
		secondCard.removeEventListener('click', flipCard); 
		resetBoard(); 
	} 
	
	function unflipCards() { 
		lockCard = true; 
		setTimeout(() => { 
			firstCard.classList.remove('flip'); 
			secondCard.classList.remove('flip'); 
			resetBoard(); 
		}, 1500); 
	} 
	
	function resetBoard() { 
		[flippedCard, lockCard] = [false, false]; 
		[firstCard, secondCard] = [null, null]; 
	} 
	
	(function shuffle() { 
		cards.forEach(card => card.style.order = Math.floor(Math.random() * 12)); 
	})(); 
	
	cards.forEach(card => card.addEventListener('click', flipCard));
	  
	// 2 игра

	// 1 цветок
	const image1 = document.getElementById("change1");

	image1.addEventListener("click", function(){
		if (image1.getAttribute("src") == "img/flower1_s.png"){
			image1.src = "img/flower1_m.png"}
		else if (image1.getAttribute("src") == "img/flower1_m.png") {
			image1.src = "img/flower1_l.png"} 
		else if (image1.getAttribute("src") == "img/flower1_l.png") {
			image1.src = "img/flower1_xl.png"}
		else{
			image1.src = "img/flower1_xxl.png"
		}
	});

	// 2 цветок
	const image2 = document.getElementById("change2");

	image2.addEventListener("click", function(){
		if (image2.getAttribute("src") == "img/flower2_s.png"){
			image2.src = "img/flower2_m.png"}
		else if (image2.getAttribute("src") == "img/flower2_m.png") {
			image2.src = "img/flower2_l.png"} 
		else if (image2.getAttribute("src") == "img/flower2_l.png") {
			image2.src = "img/flower2_xl.png"}
		else{
			image2.src = "img/flower2_xxl.png"
		}
    });

	// 3 цветок
	const image3 = document.getElementById("change3");

	image3.addEventListener("click", function(){
		if (image3.getAttribute("src") == "img/flower3_s.png"){
			image3.src = "img/flower3_m.png"}
		else if (image3.getAttribute("src") == "img/flower3_m.png") {
			image3.src = "img/flower3_l.png"} 
		else if (image3.getAttribute("src") == "img/flower3_l.png") {
			image3.src = "img/flower3_xl.png"}
		else{
			image3.src = "img/flower3_xxl.png"
		}
    });

	// 3 игра
	let rows = 3;
	let columns = 3;

	let currPuzzle;
	let otherPuzzle;

	const imgOrder = ["4", "2", "8", "5", "1", "6", "7", "9", "3"];

	window.onload = function() {
		for (let r=0; r < rows; r++ ) {
			for (let c=0; c <columns; c++){
				let puzzle = document.createElement("img");
				puzzle.hd = r.toString() + "-" + c.toString();
				puzzle.src = "img/" + imgOrder.shift() + ".jpg";

				puzzle.addEventListener("dragstart", dragStart);
				puzzle.addEventListener("dragover", dragOver);
				puzzle.addEventListener("dragenter", dragEnter);
				puzzle.addEventListener("dragleave", dragLeave);
				puzzle.addEventListener("drop", dragDrop);
				puzzle.addEventListener("dragend", dragEnd);
				
				document.getElementById("board").append(puzzle);

			}
		}
	}

	function dragStart() {
		currPuzzle = this;
	}
	function dragOver(e) {
		e.preventDefault();
	}
	function dragEnter(e) {
		e.preventDefault();
	}
	function dragLeave() {

	}
	function dragDrop() {
		otherPuzzle = this;
	}
	function dragEnd() {

		let currImg = currPuzzle.src;
		let otherImg = otherPuzzle.src;

		currPuzzle.src = otherImg;
		otherPuzzle.src = currImg;
	}
})