const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const h3 = document.getElementsByTagName("h3");
const body = document.querySelector("body");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "#000";
        document.documentElement.style.setProperty('--ham-color', 'white');
        document.documentElement.style.setProperty('--accent3-color', '#fff')
        document.documentElement.style.setProperty('--secondary-color', '#000');
        body.style.background = "#000";
		main.style.color = "#fff";
        Array.from(h3).map((h3) => {
            h3.style.color = "#000";
        });
		modeButton.textContent = "🔆";
	} else {
		main.style.background = "#eee";
        document.documentElement.style.setProperty('--accent3-color', '#000');
        document.documentElement.style.setProperty('--secondary-color', '#D5A021');
        document.documentElement.style.setProperty('--ham-color', '#d5a021');
        body.style.background = "#fff";
		main.style.color = "#000";
		modeButton.textContent = "🕶️";
	}
});
