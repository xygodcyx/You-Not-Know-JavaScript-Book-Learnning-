function foo() {
	console.log(this.a)
}

const obj = {
	a: 1,
}

// const f = foo.bind(obj)
// f.call({ a: 2 })
// f.apply({ a: 3 })
// const f2 = f.bind({ a: 4 })
// f() // 1 1 1 因为bind返回的是硬绑定后的foo函数,无论对f自身绑定多少次,依然不会改变this的指向
// f2() // 依然是1
// bind的内部大概实现方式(bind不会自动调用):
// function MyBind(func, arg) {
// 	// 因为包裹了一层匿名函数,所以无论调用多少次,被包裹在内的最内层(第一次调用时)的原始函数的this都不会受到影响
// 	return function () {
// 		return func.apply(arg) //apply和call会自动调用
// 	}
// }
// const f = MyBind(foo, obj)
// const f2 = MyBind(f, { a: 2 })
// // f.apply({ a: 2 }) // 1
// // f2() // 依然是1 因为MyBind返回的是硬绑定
