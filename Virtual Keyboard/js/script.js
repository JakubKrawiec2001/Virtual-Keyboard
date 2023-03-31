const closeBtn = document.querySelector(".close-btn");
const keyboard = document.querySelector(".keyboard");
const keys = document.querySelectorAll(".key");
const textArea = document.querySelector(".keyboard-text");
const capslock = document.querySelector(".caps");
const tab = document.querySelector(".tab");
const backspace = document.querySelector(".backspace");
const space = document.querySelector(".space");
const enter = document.querySelector(".enter");
const shift = document.querySelector(".shift");
const clearBtn = document.querySelector(".clear-btn");
const btn = document.querySelectorAll("button");
const capsDot = document.querySelector(".caps-dot");

function clickKey(e) {
	const click = e.target.innerText.toLowerCase();
	textArea.value += click;
}

const activateCapsDot = () => {
	capsDot.classList.toggle("active-caps-dot");
};

for (let i = 0; i < keys.length; i++) {
	keys[i].setAttribute("keyname", keys[i].innerText.toLowerCase());
}

window.addEventListener("keydown", (e) => {
	console.log(e);
	for (let i = 0; i < keys.length; i++) {
		if (e.key == keys[i].getAttribute("keyname")) {
			keys[i].classList.add("active");
		}
	}

	if (e.key == "Backspace") {
		backspace.classList.add("active");
		textArea.value = textArea.value.substring(0, textArea.value.length - 1);
	} else if (e.key == "Enter") {
		enter.classList.add("active");
		textArea.value += "\n";
	} else if (e.code == "Space") {
		space.classList.add("active");
		textArea.value += e.key;
	} else if (e.key == "Shift") {
		shift.classList.add("active");
	} else if (e.key == "Tab") {
		e.preventDefault();
		tab.classList.add("active");
		textArea.value += "\t";
	} else if (e.key == "CapsLock") {
		capslock.classList.add("active");
		activateCapsDot();
	} else {
		textArea.value += e.key;
	}
});
window.addEventListener("keyup", (e) => {
	for (let i = 0; i < keys.length; i++) {
		if (e.key == keys[i].getAttribute("keyname") || e.key == keys[i]) {
			keys[i].classList.remove("active");
		}
	}
	if (e.key == "Backspace") {
		backspace.classList.remove("active");
	}
	if (e.key == "Enter") {
		enter.classList.remove("active");
	}
	if (e.code == "Space") {
		space.classList.remove("active");
	}
	if (e.key == "Shift") {
		shift.classList.remove("active");
	}
	if (e.key == "Tab") {
		e.preventDefault();
		tab.classList.remove("active");
	}
	if (e.key == "CapsLock") {
		capslock.classList.remove("active");
	}
});

closeBtn.addEventListener("click", () => {
	if (keyboard.classList.contains("show")) {
		keyboard.classList.remove("show");
		closeBtn.style.transform = "rotate(180deg)";
		keys.forEach((key) => {
			key.style.opacity = "1";
		});
		backspace.style.opacity = "1";
	} else {
		closeBtn.style.transform = "rotate(0)";
		keyboard.classList.add("show");
		keys.forEach((key) => {
			key.style.opacity = "0";
		});
		backspace.style.opacity = "0";
	}
});

keys.forEach((key) => {
	key.addEventListener("click", clickKey);
});

tab.addEventListener("click", () => {
	textArea.value += "\t";
});

backspace.addEventListener("click", () => {
	textArea.value = textArea.value.substring(0, textArea.value.length - 1);
});

space.addEventListener("click", () => {
	textArea.value += " ";
});

enter.addEventListener("click", () => {
	textArea.value += "\n";
});

clearBtn.addEventListener("click", () => {
	textArea.value = "";
});
