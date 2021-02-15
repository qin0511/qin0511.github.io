clockTime();
setInterval(clockTime, 1000);

function clockTime() {
	let zone = ["America/Los_Angeles","America/New_York"];
	let clock = ['seattle','boston'];
	for (var i = 0; i < 2; i++) {
		let time = new Date().toLocaleTimeString("en-US",{timeZone:zone[i]});
		let pm_am = document.evaluate('//*[@id="'+ clock[i] + '-am-pm"]', document).iterateNext();
		pm_am.innerHTML = time.split(" ")[1]
		let[hour,minute,second] = time.split(/:| /);

		document.getElementById(clock[i])
			.getElementsByClassName("second")[0].style.transform = "translateX(100px) rotate("+second*6+"deg)";
		document.getElementById(clock[i])
			.getElementsByClassName("minute")[0].style.transform ="translateX(100px) rotate("+minute*6+"deg)";
		document.getElementById(clock[i])
			.getElementsByClassName("hour")[0].style.transform ="translateX(100px) rotate("+hour*30+"deg)";
	}
}


