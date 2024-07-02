function foo() {
	console.log(this.a)
}
const obj1 = {
	a: 1,
	foo,
	obj2: {
		a: 2,
		fooObj2: function () {
			setTimeout(() => {
				console.log(this.a)
			}, 2000)
		},
	},
	obj3: {
		a: 3,
		fooOb3: () => {
			console.log(this.a)
		},
	},
}
var a = 4
foo()
obj1.foo()
obj1.obj2.fooObj2()
setTimeout(obj1.obj3.fooOb3, 1000)
// foo() // 4
// obj1.foo() // 1
// obj1.obj2.fooObj2() // 2 因为function会记住当前的词法作用域,而()=>{}则会继承上层的作用域
// setTimeout(obj1.obj3.fooOb3, 1000) //  因为setTimeout函数是在全局调用的,那this就是全局
