import { dirname, join, opine, serveStatic, config } from "./depts.ts";

const Env = config()

const API_VERSION = "0.0.1"
const API_PORT = 3000

const __dirname = dirname(import.meta.url);

const app = opine();

import { getMovies } from './models/getMovies.ts'


app.get('/api', (req,res)=>{
	res.send({
		v: API_VERSION
	})
})

app.get('/api/movies', async (req,res)=>{
	res.send(await getMovies(Env))
})

app.use('/web', (req,res,next)=>{
	serveStatic(join(__dirname, "src","ui","dist"))(req,res,next)
})

app.use(['/web/index.html/movies','/web/index.html/player'], (req,res,next)=>{
	res.location("/web/index.html").sendStatus(301);
})

app.get('/', (req,res,next)=>{
	res.send("works")
})

app.use('/api/videoshare/:video', (req, res, next) => {
	console.log(req.params,`${Env.MOVIES_PATH}\\\\${req.params.video}`)
	res.sendFile(`${Env.MOVIES_PATH}\\\\${req.params.video}`)
})


app.listen(API_PORT);
