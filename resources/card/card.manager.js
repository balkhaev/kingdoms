import BaseCard from './types/commonCard'
import CardClass from './card.class'

export const cardTypes = {
	base: BaseCard
}

export default class CardManager extends Mapgame.base.Manager {
	constructor({ entitiesPath }) {
		super({ type: 'card', Class: CardClass, classTypes: cardTypes, entitiesPath })
	}
}