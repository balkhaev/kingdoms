import BaseCard from './types/commonCard'
import CardClass from './card.class'

export const cardTypes = {
	base: BaseCard
}

export class CardManager extends Array {
	constructor() {
		super()
	}
}

export default CardManager