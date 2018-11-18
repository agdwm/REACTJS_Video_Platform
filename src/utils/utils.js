export const leftPad = (number) => {
	const pad = '00';
	return pad.substring(0, pad.length - number.length) + number;
}

export const formattedTime = (secs) => {
	const minutes = parseInt(secs/60, 10);
	const seconds = parseInt(secs%60, 10);
	return `${minutes} : ${leftPad(seconds.toString())}`
}

export const checkIsFullscreen = () => {
	if (document.fullscreen || document.mozFullScreen || document.webkitIsFullScreen) {
		return true
	}
}

export const launchFullscreen = (el) => {
	
	const target = el || document;

	if(target.requestFullscreen) {
		target.requestFullscreen();
	} else if(target.mozRequestFullScreen) {
		target.mozRequestFullScreen();
	} else if(target.webkitRequestFullscreen) {
		target.webkitRequestFullscreen();
	} else if(target.msRequestFullscreen) {
		target.msRequestFullscreen();
	}
}

export const exitFullscreen = () => {
	if(document.exitFullscreen) {
		document.exitFullscreen();
	} else if(document.mozCancelFullScreen) {
		document.mozCancelFullScreen();
	} else if(document.webkitExitFullscreen) {
		document.webkitExitFullscreen();
	} else if(document.msExitFullscreen) {
		document.msExitFullscreen();
	}
}