export default class Kingdom {
	constructor({ name, type, residents = 1, coffer = 1000 } = {}) {
		this.history = []

		this.name = name
		this.type = type
		this.coffer = coffer
		this.residents = residents
	}

	setCoffer(coffe) {
		this.coffer = coffe
	}

	getCoffer() {
		return this.coffer
	}

	addCoffer(count) {
		this.coffer += count
	}

	removeCoffer(count = 0) {
		this.coffer -= count
	}

	setResidents(residents) {
		this.residents = residents
	}

	getResidents() {
		return this.residents
	}

	addResidents(count = 0) {
		this.residents += count
	}

	removeResidents(count = 0) {
		this.residents -= count
	}
}