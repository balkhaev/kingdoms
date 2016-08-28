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

	_removeHook(name) {
		if (typeof this._hooks[name] === 'undefined') {
			return false
		}

		this._hooks[name] = []

		return true
	}

	reset(hookName = {}) {
		if (typeof hookName === 'string' && hookName instanceof String) {
			return this._removeHook(hookName)
		}

		this._hooks = {}

		return true
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