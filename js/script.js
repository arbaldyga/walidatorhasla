const pass = document.querySelector("#password");
const p = document.querySelector(".passinfo");
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 12;

// /^[0-9a-z_.-] //dostępne znaki to od 0 do 9, litery od a do z oraz _ . -
// +@[0-9a-z_.-] // małpa + to co wyzej

// /^[0-9a-z_.-]+@+@[0-9a-z_.-]+\.[a-z]{2,3}$/i;

const showMsg = () => {
	if (
		pass.value.length >= minValue &&
		pass.value.match(letters) &&
		pass.value.match(numbers) &&
		pass.value.match(special)
	) {
		p.textContent = "Twoje hasło jest bardzo dobre.";
		p.style.color = "lime";
	} else if (
		pass.value.length >= minValue &&
		pass.value.match(letters) &&
		pass.value.match(numbers)
	) {
		p.textContent = "Twoje hasło jest dobre.";
		p.style.color = "gold";
	} else {
		p.textContent = "Twoje hasło jest słabe.";
		p.style.color = "tomato";
	}
};

const checkPassword = () => {
	if (pass.value !== "") {
		showMsg();
	} else {
		p.textContent = "Nie podałes jeszcze hasła...";
		p.style.color = "";
	}
};

pass.addEventListener("keyup", checkPassword);
