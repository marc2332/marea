interface Movie {
	name: string,
	title: string
}

export const getMovies = async (config: any) => {
	let list: Movie[] = []
	let files = Deno.readDir(config.MOVIES_PATH)
	for await (const { name } of files) {
		let movie = {
			title: getTitleByRegex(name),
			id: getId(name),
			name
			
		}
		list.push(movie)
		
	}
	return list
}

const getId = (name:string) => name.replace(/\s/gm,'')

const getTitleByRegex = (name: string) => {
	const title = name.match(/.+([A-Z]|[\s]|[A-Z])\w+/gm)
	if(title){
		return title[0]
	}else{
		return ""
	}
}
