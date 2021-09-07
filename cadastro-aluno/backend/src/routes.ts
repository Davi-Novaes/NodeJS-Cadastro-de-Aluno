import {Router, request, response, Request, Response} from "express"
import { deleteCadastro, finishedCadastro, getCadas, getcadastro, updateCadastro,   } from './controller/controller_cadas'
import { saveCadastros } from './controller/controller_cadas'

const routes = Router()

routes.get('/home' , (request: Request, response: Response) =>{
    return response.json({message: "Ola o programa esta funcionando!!! "})

})

routes.get('/cadastro', getcadastro)
routes.post('/cadastro', saveCadastros)
routes.get('/cadastro/:id', getCadas)
routes.put('/cadastro/:id', updateCadastro)
routes.delete('/cadastro/:id', deleteCadastro)
routes.patch('/cadastro/:id', finishedCadastro)



export default routes
