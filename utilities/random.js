export function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomKey(obj) {
	const objKeys = Object.keys(obj)
	const randomObjIndex = getRandomInt(0, objKeys.length - 1)

	return objKeys[randomObjIndex]
}

export function getRandomElement(array) {
	return array[getRandomInt(0, array.length - 1)]
}

export function getChance(chance) {
	return chance > getRandomInt(0, 100)
}

export function getProbability(capabilities, limit = 1) {
	const probability = []
	const result = []

	capabilities.forEach(({ fn, score }) => {
		const capabilitiy = Array.fill(new Array(score), fn)

		probability.push(...capabilitiy)
	})

	for(let i = 0; i < limit; i++) {
		const randomElement = getRandomElement(probability)

		result.push(randomElement)
	}

	return result
}

export default {
	getRandomInt,
	getRandomKey,
	getRandomElement,
	getChance,
	getProbability
}