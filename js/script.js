function getTriangleArea(a, h) {
	if ((a > 0) && (h > 0)) {
		console.log('dane poprawne');
	}  else {
		console.log('dane niepoprawne');
	}
	return a*h/2
}
console.log(getTriangleArea(1, 6));
var one = console.log(getTriangleArea(-1, 6)),
	dwo = console.log(getTriangleArea(12, 26)),
	three = console.log(getTriangleArea(1/5, 1/2));