import Kingdom from '../kingdom.class'

export default class BaseKingdom extends Kingdom {
	constructor({ ...args }) {
		super({ type: 'base', ...args })
	}
}