var a = prompt ('podaj a'),
	h= prompt ('podaj b');

getTriangleArea(a, h);

function getTriangleArea(a, h) {
	if ((a > 0) && (h > 0)) {
		console.log('dane poprawne');
	}  else {
		console.log('dane niepoprawne');
		return
	}
	return a * h / 2
}