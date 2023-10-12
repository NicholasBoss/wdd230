const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const h3 = document.getElementsByTagName("h3");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "#000";
		main.style.color = "#fff";
        Array.from(h3).map((h3) => {
            h3.style.color = "#000";
        });
		modeButton.textContent = "🔆";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		modeButton.textContent = "🕶️";
	}
});
