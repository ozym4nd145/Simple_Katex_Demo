console.log("hello world");
var inp = document.getElementById("inp");
var eqn = document.getElementById("eqn");

function renderEqn()
{
	eqn.innerHTML = inp.value;
	renderMathInElement(eqn,{
		delimiters: [
			{left: "\\[", right: "\\]", display: true},
			{left: "\\(", right: "\\)", display: false}
		]
	});
}

inp.addEventListener("input",renderEqn);
