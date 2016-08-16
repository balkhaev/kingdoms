import hookManager from '../lib/hookManager'
import Kingdom from './kingdom.class'

export default class World {
	constructor() {
		this.frame = 0
		this.day = 1
		this.kingdoms = []
		this.history = []

		this.loop = this.loop.bind(this)
		this.getSummary = this.getSummary.bind(this)
	}

	create(type, opts) {
		switch (type) {
			case 'kingdom':
				const kingdom = new Kingdom(opts)

				this.kingdoms.push(kingdom)

				return kingdom
		}
	}

	newDay() {
		hookManager.call('worldPreNewDay', this)

		this.kingdoms.forEach(kingdom => {
			kingdom.newDay(this)
		})

		hookManager.call('worldNewDay', this)

		this.history.push(this.getSummaryDay())

		this.day++

		hookManager.call('worldPostNewDay', this)
	}

	loop(delta) {
		hookManager.call('worldPreLoop', this)

		this.update()

		this.kingdoms.forEach(kingdom => {
			kingdom.update(this)
		})

		hookManager.call('worldLoop', this)

		this.frame++

		hookManager.call('worldPostLoop', this)
	}

	update() {
		const isNewDay = this.frame % 5 === 0

		if (isNewDay) {
			this.newDay()
		}
	}

	getSummaryDay() {
		const kingdoms = this.kingdoms.map(kingdom => kingdom.getSummaryDay())

		return `-=-=- Day ${this.day} -=-=-
${kingdoms.join("\n\n")}`
	}

	getSummary() {
		return `Frames: ${this.frame}
======================
${this.history.join("\n\n")}`
	}
}