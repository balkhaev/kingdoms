import hookManager from '../lib/hookManager'

export default class Hookable {
	register(name, callback) {
		hookManager.register(name, callback)
	}

	call(name) {
		hookManager.call(name, this)
	}
}