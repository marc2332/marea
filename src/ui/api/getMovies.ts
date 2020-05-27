import { MOVIES } from './endpoints'

export const getMovies = async ()=> {
	return new Promise((resolve,reject) => {
		fetch(MOVIES).then(data => {
			resolve(data.json())
		}).catch(err => {
			reject(err)
		})
	})
}