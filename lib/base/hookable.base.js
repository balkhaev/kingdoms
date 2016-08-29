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

	_getHooks() {
		return this._hooks
	}

	_setHooks(hooks) {
		this._hooks = hooks
	}

	_removeHook(name) {
		if (typeof this._hooks[name] === 'undefined') {
			return false
		}

		this._hooks[name] = []

		return true
	}

	_updateHooks(fn) {
		const updatedHooks = {}
		const hooksKeys = Object.keys(this._hooks)

		hooksKeys.forEach(hookName => {
			const hooks = this._hooks[hookName]
			updatedHooks[hookName] = []

			hooks.forEach(hookFn => {
				const wrappedHook = fn(hookName, hookFn)

				updatedHooks[hookName].push(wrappedHook)
			})
		})

		this._setHooks(updatedHooks)
	}

	resetHooks(hookName = {}) {
		if (typeof hookName === 'string' || hookName instanceof String) {
			return this._removeHook(hookName)
		}

		this._hooks = {}

		return true
	}

	before(name, ...args) {
		name = 'before:' + name

		this._addHook(name, ...args)
	}

	after(name, ...args) {
		name = 'after:' + name

		this._addHook(name, ...args)
	}

	callBefore(name, ...args) {
		name = 'before:' + name

		this._callHook(name, ...args)
	}

	callAfter(name, ...args) {
		name = 'after:' + name

		this._callHook(name, ...args)
	}
}