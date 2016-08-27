import BaseKingdom from './types/baseKingdom'

export default class Narkia extends BaseKingdom {
	constructor({ ...args }) {
		super({ name: 'Narkia', ...args })
	}
}