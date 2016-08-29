export const name = 'refugees'

export const score = 6

export function hooks(kingdom) {
	kingdom.before('newDay', kingdom => {
		kingdom.addResidents(4)
	})
}