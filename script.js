
var sentences = [
		"You have successfully graduated high school!",
		//"You have successfully purchased an overpriced yearbook!",
		"You have successfully survived high school!",
		"You have successfully graduated high school!",
		"You have successfully graduated high school!",
		"You have successfully graduated high school!",
		"You have successfully graduated high school!"
];

var quotes = [
		"You must expect great things of yourself before you can do them.", 
		"Motivation is what gets you started. Habit is what keeps you going.",
		"People rarely succeed unless they have fun in what they are doing.",
		"There is no chance, no destiny, no fate, that can hinder or control the firm resolve of a determined soul.",
		"Our greatest fear should not be of failure but of succeeding at things in life that don't really matter." ,
		"You've got to get up every morning with determination if you're going to go to bed with satisfaction." ,
		"You've got to get up every morning with determination if you're going to go to bed with satisfaction.", 
		"Success is ... knowing your purpose in life, growing to reach your maximum potential, and sowing seeds that benefit others.", 
		"Be miserable. Or motivate yourself. Whatever has to be done, it's always your choice.",
		"To accomplish great things, we must not only act, but also dream, not only plan, but also believe."
	];


var depressingQuotes = [
	"High School Was Easy. It Was Like Riding A Bike. Except The Bike Was On Fire & The Ground Was On Fire & Everything Was On Fire Because It Was Hell",

]

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

$("#intro").text(pickRandom(sentences));

var duration = 4 * 1000;
var animationEnd = Date.now() + duration;
var defaults = { startVelocity: 30, spread: 360, ticks:40, zIndex: 0  };
var interval = setInterval(function() {
	var timeLeft = animationEnd - Date.now();
	 if (timeLeft <= 0) {
	   	return clearInterval(interval);
 	}
	var particleCount = 80 * (timeLeft / duration);
 // since particles fall down, start a bit higher than random
	confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.6), y: Math.random() - 0.2 } }));
	//confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.3, 0.6), y: Math.random() - 0.2 } }));
	confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.6, 0.8), y: Math.random() - 0.2 } }));
	
	}, 250);
var count = 0;
$("#generate-quote").click(function(){
	count ++;
	var quote;
	quote = pickRandom(quotes);
//i'm a chicken

	$("#quote").text("\"" + quote + "\"" );
	var duration = 5 * 1000;
	var animationEnd = Date.now() + duration;
	var defaults = { startVelocity: 30, spread: 360, ticks: 40, zIndex: 0  };
	var interval = setInterval(function() {
	var timeLeft = animationEnd - Date.now();
	 if (timeLeft <= 0) {
	   	return clearInterval(interval);
 	}
	var particleCount = 80 * (timeLeft / duration);
 // since particles fall down, start a bit higher than random
	confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.6), y: Math.random() - 0.2 } }));
	//confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.3, 0.6), y: Math.random() - 0.2 } }));
	confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.6, 0.8), y: Math.random() - 0.2 } }));
	
	}, 250);
});

function pickRandom(arr){
	var num = Math.floor(Math.random()*arr.length); 
	return arr[num];
}
$(".video-container").hide();

var change = true;
var end2 = 0;
$(".key").click(function(){
	$(".key").toggleClass("fa-door-closed");
	$(".key").toggleClass("fa-door-open");
	$(".video-container").fadeToggle();
	$(".header").toggleClass("rainbow");
	$(".fa-graduation-cap").toggleClass("far fa-heart");
	$(".main-text").toggle();

	
	if(change){
		change = false;

		$("#exclamation").html("the secret page!!");
		var colors = ['#e40303', '#ff8c00', '#ffed00', '#008026', '#004dff', '#750787'];
		//pastel
		//var colors = ['#FF9AA2', '#FFB7B2', '#FFDAC1', '#E2F0CB', '#B5EAD7', "#C7CEEA"];
		//var colors = ['#D60270', '#9B4F96', '#0038A8', '#D60270', '#9B4F96', '#0038A8'];

		if(Date.now() >= end2){
			end2 = Date.now()+ (5*1000); //8
				(function frame() {
				  confetti({
				    particleCount: 6,
				    angle: 60,
				    spread: 60,
				    origin: { x: 0 }, //y: 0.5

				    colors: colors
				  });
				  confetti({
				    particleCount: 6,
				    angle: 120,
				    spread: 60,
				    origin: { x: 1},
				    colors: colors
				  });
				  if (Date.now() < end2) {
				    requestAnimationFrame(frame);
				  }
				}());
		}
		
	}else{
		change = true;
		$("#exclamation").html("Graduated!");

	}
});
