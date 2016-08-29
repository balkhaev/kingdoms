export function getHookLogger(hookFn) {
	return function hookLogger(hook, variable, self) {
		const [ hookPosition, hookName ] = hook.split(':')

		console.log(`[${hookPosition}][${hookName}] ${variable}`)

		hookFn(hook, variable, self)
	}
}

export function logger(game, level) {
	switch(level) {
		case 'world':
			game.world._callHook = getHookLogger(::game.world._callHook)
			break
		case 'game':
			game._callHook = getHookLogger(::game._callHook)
	}
}

export default logger