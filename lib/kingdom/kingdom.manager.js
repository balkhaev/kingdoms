import CommonKingdom from './types/commonKingdom'
import KingdomClass from './kingdom.class'
import Manager from '../base/manager.base'

export const kingdomTypes = {
	common: CommonKingdom
}

export default class KingdomManager extends Manager {
	constructor({ entitiesPath }) {
		super({ type: 'kingdom', Class: KingdomClass, classTypes: kingdomTypes, entitiesPath })
	}
}