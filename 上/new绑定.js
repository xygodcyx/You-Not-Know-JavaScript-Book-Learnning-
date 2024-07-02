function foo() {
	console.log('foo')
	return {
		a: 12,
	}
}
class A {
	constructor() {
		return {
			b: 1,
		}
	}
}

const f = new foo()

const s = new String(12)
const aa = new A()
console.log(aa)
console.log(aa.b)
console.log(s.replace(/^12$/, 123))
// console.log(f)
