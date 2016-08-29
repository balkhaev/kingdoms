import CommonKingdom from './types/commonKingdom'
import KingdomClass from './kingdom.class'

export const kingdomTypes = {
	common: CommonKingdom
}

export default class KingdomManager extends Mapgame.base.Manager {
	constructor({ entitiesPath }) {
		super({ type: 'kingdom', Class: KingdomClass, classTypes: kingdomTypes, entitiesPath })
	}
}