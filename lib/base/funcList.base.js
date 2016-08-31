export class FuncList extends Array {
	constructor(...args) {
		super(...args)
	}

	exec(cb, ...args) {
		this.forEach(fn => cb(fn(...args)))
	}
}