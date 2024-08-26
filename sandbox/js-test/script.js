


//function fib(n) {
//	return n <= 1 ? n : fib(n - 1) + fib(n - 2);
//}

function fib(n) {
	if (n <= 1) {
		return n
	}
	return fib(n - 1) + fib(n - 2)
}

//console.log(fib(77))