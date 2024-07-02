foo()
var foo
function foo() {
	console.log(1)
}
foo = function () {
	console.log(2)
}
// 会输出1,因为所有的声明都会被提升,但是函数提升的优先级比变量提升的优先级高
// 注意:所有的赋值操作不会被提升
