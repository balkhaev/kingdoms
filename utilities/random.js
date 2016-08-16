export function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomKey(obj) {
	const objKeys = Object.keys(obj)
	const randomObjIndex = getRandomInt(0, objKeys.length - 1)

	return objKeys[randomObjIndex]
}

export function getRandomElement(array) {
	return array[getRandomInt(0, getRandomElement.length - 1)]
}

export function getChance(chance) {
	return chance > getRandomInt(0, 100)
}

export function getProbability(capabilities) {
	const probability = new Array(100)

	capabilities.forEach(({capability, chance}) => {
		probability.fill(capability, 100 - chance)
	})

	return getRandomElement(probability)
}

export default {
	getRandomInt,
	getRandomKey,
	getRandomElement,
	getChance,
	getProbability
}