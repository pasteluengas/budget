let total = prompt("Enter full ammout");
let percentageused = 0;

let colors = ["red", "green", "blue"];
let currentcolor = 0;
const bar = document.getElementById("bar");


function newColor() {
	if (currentcolor == 2) {
		currentcolor = 0;
	} else {
		currentcolor++;
	}
	return currentcolor;
}

function add() {
	let toAdd = document.getElementById("num").value;
	newammount = document.createElement("div");
	newammount.className = "amount";

	if (document.getElementById("method").value == "mon") {
		toAdd = (toAdd * 100) / total;
	}
	
	if ((percentageused + parseInt(toAdd)) > 100) {
		alert("Amout excedes total");
		return;
	}

	newammount.style.height = toAdd + "%";
	newammount.title = document.getElementById("name").value + " | " + toAdd + "% | $" + parseInt((toAdd/100) * total);
	newammount.innerHTML = document.getElementById("name").value;
	newammount.contenteditable = "true";
	newColor();
	newammount.style.backgroundColor = colors[currentcolor];
	percentageused = percentageused + parseInt(toAdd);

	bar.append(newammount);
}
