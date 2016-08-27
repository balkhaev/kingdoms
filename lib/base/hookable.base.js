export default class Hookable {
	constructor(hooks = {}) {
		this._hooks = hooks
	}

	_callHook(name, ...args) {
		if (typeof this._hooks[name] === 'undefined') {
			return
		}

		this._hooks[name].forEach(hook => hook(...args))
	}

	_addHook(name, callback) {
		if (typeof this._hooks[name] === 'undefined') {
			this._hooks[name] = []
		}

		this._hooks[name].push(callback)
	}

	before(name, ...args) {
		name = '_before_' + name

		this._addHook(name, ...args)
	}

	after(name, ...args) {
		name = '_after_' + name

		this._addHook(name, ...args)
	}

	callBefore(name, callback) {
		name = '_before_' + name

		this._callHook(name, callback)
	}

	callAfter(name, callback) {
		name = '_after_' + name

		this._callHook(name, callback)
	}
}