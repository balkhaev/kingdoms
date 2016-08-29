export class kingdomFace {
	constructor() {
		this.state = null
		this.history = []
	}

	getHistory() {
		return this.history
	}

	pushHistory(state) {
		this.history.push(state)
	}

	setState(state) {
		this.state = state
	}

	getState() {
		return this.state
	}
}

export default kingdomFace