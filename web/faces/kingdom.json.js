export class kingdomFace {
	constructor() {
		this.state = null

		this.update = this.update.bind(this)
	}

	setState(state) {
		this.state = state
	}

	getState() {
		return this.state
	}

	update(world) {
		this.setState(world.getState())
	}
}

export default kingdomFace