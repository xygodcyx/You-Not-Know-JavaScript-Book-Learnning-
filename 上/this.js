// function bar() {
// 	console.log(this.a) //这是错误的,不要试图通过this来跨词法作用域访问变量
// }

// function foo() {
// 	var a = 4
// 	debugger
// 	bar()
// }
// foo.a = 1
// var a = 2
// foo.apply(foo)

function baz() {
	console.log('baz', this)
	// bar()
}

function bar() {
	console.log('bar')
	// foo()
}

function foo() {
	console.log('foo')
}

var a = 1
console.log(a)
baz()
