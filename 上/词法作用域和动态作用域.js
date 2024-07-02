function bar() {
	console.log(a)
}

function foo() {
	// var a = 3 会输出2
	// a = 3 会输出3
	// 这是因为JavaScript的作用域是词法作用域,函数作用域的形成发生在函数定义时而不是运行时
	bar()
}

var a = 2
foo()
