var video;

window.addEventListener("load", pageLoad());
function pageLoad () {
	video = document.getElementById ("player1");
	console.log("Good job opening the window");
	video.autoplay = false;
	console.log("Auto play is set to false");
	video.loop = false;
	console.log("Loop us set to false");
}

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

document.querySelector("#play").addEventListener("click", playVideo); 

function playVideo() {
	video.play();
	let videoVolume = video.volume * 100 + "%";
	console.log(video.volume);
	document.getElementById("volume").innerHTML = videoVolume;
	console.log("Play Video");
}

document.querySelector("#pause").addEventListener("click", pauseVideo);

function pauseVideo() {
	video.pause()
	console.log("Pause Video");
}

document.querySelector("#slower").addEventListener("click", slowerVideo);

function slowerVideo() {
	let speed = video.playbackRate;
	speed = speed * 0.9;
	video.playbackRate = speed;
	console.log("Slow down video");
	console.log("Speed is" + " " + speed);
}

document.querySelector("#faster").addEventListener("click", fasterVideo);

function fasterVideo() {
	let rate = 1/0.9;
	let speed = video.playbackRate;
	speed = speed * rate;
	video.playbackRate = speed;
	console.log("Speed up Video");
	console.log("Speed is");
	console.log(speed);
}

document.querySelector("#skip").addEventListener("click", skipAhead);

function skipAhead() {
	let currentTime = video.currentTime;
	currentTime = currentTime + 10;
	if(currentTime > video.duration) {
		video.currentTime = 0;
	} else {
		video.currentTime = currentTime;
	}
	console.log("Skip ahead");
	console.log("Video current time is " + video.currentTime)
}

document.querySelector("#mute").addEventListener("click", function() {

if (video.muted === false) {
	video.muted = true;
	document.getElementById("mute").textContent = "Unmute";
	console.log("Unmute");
} else {
	video.muted = false;
	document.getElementById("mute").textContent = "Mute";
	console.log("Mute");
}
} )


document.querySelector("#slider").addEventListener("click", videoSlider);

function videoSlider() {
	let slider = document.querySelector("#slider");
	let sliderValue = slider.value / 100;
	console.log(sliderValue);

	video.volume = sliderValue;
	console.log(video.volume);

	let videoVolume = video.volume * 100 + "%";
	document.getElementById("volume").innerHTML = videoVolume;
}


document.querySelector("#vintage").addEventListener("click", addClass);

function addClass() {
	let classList = video.classList;
	console.log(classList);
	classList.add("oldSchool");
	console.log(classList);
}

document.querySelector("#orig").addEventListener("click", removeClass);

function removeClass() {
	let classList = video.classList;
	console.log(classList);
	classList.remove("oldSchool");
	console.log(classList);
}






	

