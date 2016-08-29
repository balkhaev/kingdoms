export const name = 'cataclysm'

export const score = 1

export function hooks(kingdom) {
	kingdom.before('newDay', kingdom => {
		kingdom.removeResidents(2)
	})
}