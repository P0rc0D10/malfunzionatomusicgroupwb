const svg = document.getElementsByTagNameNS(
	"http://www.w3.org/2000/svg",
	"svg"
)[0];
const turb = document.getElementById("turbulence");
let a, b;
function randomize() {
	a = 0.005 + Math.random() * 0.04;
	b = 0.004 + Math.random() * 0.005;
	turb.setAttribute("baseFrequency", a + " " + b);
	//turb.setAttribute("numOctaves",1+Math.round(Math.random()*2));
	//console.log(a,b);
	// HACK force chrome redraw
	// root.remove();
	// document.querySelector("main").append(root);
}
// let b = 0.008;
let va = 0.000001 + Math.random() * 0.000005;
let vb = 0.000001 + Math.random() * 0.000005;
// // let vb = 0.00001;
function onFrame() {
	window.requestAnimationFrame(onFrame);
	// if(va>0) {
	//     if(a>0.01) va = -0.00001;
	// } else {
	//     if(a<0.00001) va = 0.00001;
	// }
	// a += va;
	// a += 0.00001;
	if (vb > 0) {
		if (b > 0.007) vb = -0.000001;
	} else {
		if (b < 0.001) vb = 0.000001;
	}
	b += vb;
	//b += 0.00001;
	turb.setAttribute("baseFrequency", a + " " + b);
	//turb.setAttribute("numOctaves",octaves);
}
window.requestAnimationFrame(onFrame);
//document.querySelector("svg").onclick = randomize;
//window.setInterval(randomize, 2000);
randomize();
