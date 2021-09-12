import { getRepository } from "typeorm";
import { Entidade_RG } from '../entity/Entidade_RG';
import { Request, Response } from "express"


export const getRG = async(request: Request, response: Response ) =>{
    const CadastroRG = await getRepository(Entidade_RG). find()
    return response.json(CadastroRG)
}

export const saveCadastro = async(request: Request, response: Response ) =>{
    
    const CadastrosRG = await getRepository(Entidade_RG). save(request.body)
    response.json(CadastrosRG)
}
export const getRgs = async(request: Request, response: Response) =>{
    const {id} = request.params
    const getRg = await getRepository(Entidade_RG). findOne(id)
    return response.json(getRg)
}
export const UpdatedCadastros = async(request: Request, response: Response) =>{
    const {id} = request.params
    const CadastroRG_ = await getRepository(Entidade_RG). update(id, request.body)

    if (CadastroRG_.affected == 1) {
        const CadastroUpdate = await getRepository(Entidade_RG). findOne(id)
        return response.json(CadastroUpdate)

    }
    else {
        return response.status(404).json({ message: "Atualização invalida"})
    }
}

export const deleteCadastroRG = async(request: Request, response: Response) =>{
    const {id} = request.params
    const deleteCadastro = await getRepository(Entidade_RG). delete(id)

    if (deleteCadastro.affected == 1){
        return response.status(200).json({ message: "Cadastro excluido com sucesso"})

    }
    else {
        return response.status(404).json({ message: "Invalido "})
    }

}

export const finishedCadastroRG = async(request: Request, response: Response) =>{
    const {id} = request.params
    const finishedCadastro = await getRepository(Entidade_RG). update(id, {solteiro: true,})
    if (finishedCadastro.affected == 1 ){
        const Cadastrofinished = await getRepository(Entidade_RG). findOne(id)
        return response.json(Cadastrofinished)

    }
    else {
        return response.status(404).json({ message: "Não atualizado"})
    }
}