function doIt(){
	// Input
	var type = document.getElementById('type').value;
	var size = document.getElementById('size').value;
	var weight = document.getElementById('weight').value;
	var output = document.getElementById('output');

	// Error checking
	if (type == "none") {
		alert("Please select a type.");
		return;
	}
	if (isNaN(parseFloat(size))) {
		alert("Please input a size.");
		return;
	}

	// Reset output
	output.innerHTML = "";

	// Convert to Kb
	var input = convert(parseFloat(size), weight);

	// Check by type:
	if (type == "audio")
		checkAudio(input);
	if (type == "game")
		checkGame(input);
	if (type == "image")
		checkImage(input);
	if (type == "video")
		checkVideo(input);
}
function convert(size, weight){
	if (weight == "mb")
		return size*1024;
	if (weight == "gb")
		return size*1048576;
	//if (weight == "kb")
	return size;
}
function checkAudio(size){
	// Easter Eggs
	if (easterEggs(size))
		return;

	// Ranges
	if (size <= 1024)
		output.innerHTML = "Teeny weeny sound effect.";
	if (size > 1024 && size <= 5120)
		output.innerHTML = "Illegally downloaded music.";
	if (size > 5120 && size <= 102400)
		output.innerHTML = "Very good quality music.";
	if (size > 102400)
		output.innerHTML = "What the heck?! Ever heard of compression?";
}
function checkGame(size){
	// Easter Eggs
	if (easterEggs(size))
		return;

	// Ranges
	if (size <= 102400)
		output.innerHTML = "A very tiny indie game.";
	if (size > 102400 && size <= 512000)
		output.innerHTML = "A small indie game.";
	if (size > 512000 && size <= 1024000)
		output.innerHTML = "A decently sized game.";
	if (size > 1024000 && size <= 5242880)
		output.innerHTML = "This might've been big 5 years ago.";
	if (size > 5242880 && size <= 10485760)
		output.innerHTML = "A regular AAA game.";
	if (size > 10485760 && size <= 20971520)
		output.innerHTML = "A very big game.";
	if (size > 20971520 && size <= 41943040)
		output.innerHTML = "Gianormeous game!";
	if (size > 41943040)
		output.innerHTML = "Welcome to the future!";
}
function checkImage(size){
	// Easter Eggs
	if (easterEggs(size))
		return;

	// Ranges
	if (size <= 200)
		output.innerHTML = "Agh! My eyes!";
	if (size > 200 && size <= 2048)
		output.innerHTML = "A very crappy drawing made in paint.exe."
	if (size > 2048 && size <= 5120)
		output.innerHTML = "A photo.";
	if (size > 5120 && size <= 10240)
		output.innerHTML = "A big photo.";
	if (size > 10240)
		output.innerHTML = "This is an iMAX...";
}
function checkVideo(size){
	// Easter Eggs
	if (easterEggs(size))
		return;

	// Ranges
	if (size <= 20480)
		output.innerHTML = "Hey look, a colorful pixel.";
	if (size > 20480 && size <= 102400)
		output.innerHTML = "A YouTube video.";
	if (size > 102400 && size <= 512000)
		output.innerHTML = "An episode of a TV-show.";
	if (size > 512000 && size <= 716800)
		output.innerHTML = "A nicely compressed movie.";
	if (size > 716800 && size <= 3145728)
		output.innerHTML = "A high-quality movie.";
	if (size > 3145728 && size <= 20971520)
		output.innerHTML = "A super-quality movie.";
	if (size > 20971520 && size <= 73400320)
		output.innerHTML = "A Blu-Ray.";
	if (size > 73400320)
		output.innerHTML = "Holy crap!";
}
function easterEggs(size){
	if (size == 0) {
		output.innerHTML = "That's the perfect size.";
		return true;
	}
	if (parseFloat(size) < 0) {
		output.innerHTML = "So... you're <i>removing</i> memory?";
		return true;
	}
	if (size == 1268776.96) { // 1.21 Gb
		output.innerHTML = "Great Scott! A high-quality movie.";
		return true;
	}
	if (size == 742400) { // DNA
		output.innerHTML = "A high-quality movie.<br>(About the size of a single human DNA)";
		return true;
	}
	return false;
}
