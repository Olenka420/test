function hello() {
	console.log("Hello world!");
}
hello();


function greetGuest(str = "guest") {
	console.log(`Hello, ${str}!`);
}
greetGuest("Hi");