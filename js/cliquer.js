function clickCounter() {
	if (typeof(Storage) !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount)+1;
    } else {
      localStorage.clickcount = 1;
    }
    document.getElementById("clicks").innerHTML = localStorage.clickcount;
  	} else {
    document.getElementById("clicks").innerHTML = "n suportado";
  	}
}

function getClicks() {
	if (localStorage.clickcount) {
    document.getElementById("clicks").innerHTML = localStorage.clickcount;
  	} else {
    document.getElementById("clicks").innerHTML = 0;
  	}
}