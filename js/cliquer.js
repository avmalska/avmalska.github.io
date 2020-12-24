function getAll() {
	if (localStorage.pog) {
    document.getElementById("Poggers").innerHTML = localStorage.pog;
    pogs = Number(localStorage.pog);
  	} else {
    document.getElementById("Poggers").innerHTML = 0;
  	}
  if (localStorage.autopog) {
    document.getElementById("autoPoggers").innerHTML = localStorage.autopog;
    autopogs = Number(localStorage.autopog);
    } else {
    document.getElementById("autoPoggers").innerHTML = 0;
  }
}

function pogCounter() {
  pogs += 1;
  document.getElementById("Poggers").innerHTML = pogs;
}

function autoPog() {
  if (pogs >= 10) {
    pogs -= 10;
    autopogs += 1;
    document.getElementById("autoPoggers").innerHTML = autopogs;
  }
}

function incrementPog() {
  pogs += autopogs;
  document.getElementById("Poggers").innerHTML = pogs;
}

function saveGame() {
  localStorage.pog = pogs;
  localStorage.autopog = autopogs;
}

function teste() {
  localStorage.pog = 0;
  localStorage.autopog = 0;
  pogs = 0;
  autopogs = 0;
  document.getElementById("autoPoggers").innerHTML = localStorage.autopog;
  document.getElementById("Poggers").innerHTML = localStorage.pog;
}

function resetAll() {
  localStorage.clear();
}

pogs = 0
autopogs = 0

setInterval(saveGame, 30000);

setInterval(incrementPog, 1000);
