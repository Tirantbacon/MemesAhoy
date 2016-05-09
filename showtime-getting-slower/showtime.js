var john = new Howl({
	src: ["audio/showtime.ogg"],
	loop: true,
});

var update_time = new Date();

var percent_time = 0.05;

var inv_rate = 1;
var rate_timer = percent_time;

function update() {

	var new_time = new Date();
	var delta = new_time.getTime() - update_time.getTime();
	update_time.setTime(new_time.getTime());

	rate_timer -= (1 / inv_rate) * delta / 1000;

	if (rate_timer <= 0) {
		rate_timer += percent_time;
		inv_rate += 0.0001;
		john.rate(1 / inv_rate);
		document.getElementById("speed").innerHTML = "speed: " + (1 / inv_rate * 100).toFixed(2) + "%";
		document.getElementById("john").style.opacity = 1 / inv_rate / inv_rate;
	}

	requestAnimationFrame(update);
}

function run() {
	john.play();
	update_time = new Date();
	requestAnimationFrame(update);
}
