import "./style.less";
import "./src/index";

console.log("hello world");

const h1 = document.createElement("h1");
h1.textContent = "123";
h1.classList.add("red");
document.body.appendChild(h1);

// fetch("http://localhost:9000/api/hello")
fetch("/api/hello")
	.then((res) => res.text())
	.then((result) => {
		console.log(result);
	});
