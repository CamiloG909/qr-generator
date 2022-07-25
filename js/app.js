const header = document.querySelector(".header");

const form = document.querySelector("#generate-form");
const container = document.querySelector(".container-qr");

const eventListeners = () => {
	header.addEventListener("click", () => window.location.reload());
	form.addEventListener("submit", generatePassword);
};

function generatePassword(e) {
	e.preventDefault();

	const value = form["value"].value;

	if (value || value !== "") {
		if (container.childNodes.length > 0) {
			container.innerHTML = "";
		}

		new QRCode(container, value);
	}
}

eventListeners();
