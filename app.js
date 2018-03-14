document.onkeydown = function(evt) {
	evt = evt || window.event;
	var isEscape = false;
	if ("key" in evt) {
		isEscape = (evt.key == "Escape" || evt.key == "Esc");
	} else {
		isEscape = (evt.keyCode == 27);
	}
	if (isEscape) {
		closeMenu('menu-overlay','over-menu');
	}
};


function openMenu(item, content) {
	document.getElementById(item).style.width = "100%";
	document.getElementById('hamburger').style.display = "none";
	document.getElementById(content).style.display = "inline-block";
}

function closeMenu(item, content) {
	document.getElementById(content).style.display = "none";
	document.getElementById('hamburger').style.display = "inline-block";
	document.getElementById(item).style.width = "0%";
}




