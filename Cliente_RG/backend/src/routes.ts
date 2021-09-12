import { Router, request, response, Request, Response } from 'express'
import { getRgs, getRG, saveCadastro, UpdatedCadastros, deleteCadastroRG, finishedCadastroRG } from './controller/RgController'

const routes = Router()

routes.get ('/home', (request: Request, response: Response) =>{
    return response.json({message: "Esta funcionando" })
})

routes.get('/Cadastro' , getRG)
routes.post('/Cadastro', saveCadastro)
routes.get('/Cadastro/:id', getRgs)
routes.put('/Cadastro/:id', UpdatedCadastros)
routes.delete('/Cadastro/:id', deleteCadastroRG)
routes.patch('/Cadastro/:id', finishedCadastroRG)
export default routes