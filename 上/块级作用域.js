function a() {
	let b = 1
	c() //函数的声明提升
	// let c 会报错,因为在声明变量c之前前已经因为声明提升的原因声明了函数c
	function c() {
		console.log(b)
	}
}

a()
