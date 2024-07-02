// function foo() {
// 	function hello() {
// 		console.log('hello')
// 	}
// 	function noHello() {
// 		console.log('noHello')
// 	}
// 	return {
// 		hello,
// 		noHello,
// 	}
// }
// const f = foo()

// f.hello()
// f.noHello()

const myModules = (function ManageModules() {
	const modules = []
	function define(name, deps, impl) {
		for (let i = 0; i < deps.length; i++) {
			deps[i] = modules[deps[i]]
		}
		modules[name] = impl.apply(impl, deps)
	}
	function get(name) {
		return modules[name]
	}
	return {
		define,
		get,
	}
})()

myModules.define('foo', [], function () {
	function hello(who) {
		return 'hello' + who
	}
	return {
		hello,
	}
})

myModules.define('aoo', [], function () {
	function aooHello() {
		console.log('aooHello')
	}
	return {
		aooHello,
	}
})

myModules.define('boo', ['foo', 'aoo'], function (foo, aoo) {
	const name = 'xygod'
	function helloToo() {
		console.log(foo.hello(name).toUpperCase())
		console.log(aoo)
		aoo.aooHello()
	}
	return {
		helloToo,
	}
})

const foo = myModules.get('foo')
const boo = myModules.get('boo')

console.log(foo.hello('xygod'))

boo.helloToo()
