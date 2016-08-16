export const hooks = {}

export function register(name, callback) {
	if (typeof hooks[name] === 'undefined') {
		hooks[name] = []
	}

	hooks[name].push(callback)
}

export function call(name, ...args) {
	if (typeof hooks[name] === 'undefined') {
		return
	}

	hooks[name].forEach(hook => hook(...args))
}

export default {
	register,
	call
}