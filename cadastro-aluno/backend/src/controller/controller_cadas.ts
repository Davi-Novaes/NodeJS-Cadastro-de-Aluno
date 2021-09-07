import { getRepository } from 'typeorm';
import { cadastro } from '../entity/cadastro';
import { Request, Response } from "express";

export const getcadastro = async(request: Request, response: Response) =>{
    const Cadastro = await getRepository(cadastro).find()
    return response.json(Cadastro)
};

export const saveCadastros = async(request: Request, response: Response) => {
    const Cadastros = await getRepository(cadastro).save(request.body)
    response.json(Cadastros);
};

export const getCadas = async(request: Request, response: Response) =>{
    const {id} = request.params
    const Cadastro = await getRepository(cadastro).findOne(id)
    return response.json(Cadastro);
}
export const updateCadastro = async(request: Request, response: Response) =>{
    const {id} = request.params
    const Cadastros = await getRepository(cadastro).update(id, request.body)

    if (Cadastros.affected == 1) {
        const CadastroUpdated = await getRepository(cadastro).findOne(id)
        return response.json(CadastroUpdated);
   
    }
    else {
        return response.status(404).json({ message: "Erro no Programa"})

    }
}

export const deleteCadastro = async(request: Request, response: Response) => {
    const {id} = request.params
    const Cadastros = await getRepository(cadastro).delete(id)
 
    if (Cadastros.affected == 1) {
        return response.status(200).json( {message: "Tarefa excluída com sucesso!"} );
    }
    else{
        return response.status(404).json( {message: 'Tarefa não encontrada!'} )
    }
};


export const finishedCadastro = async(request: Request, response: Response) => {
    const {id} = request.params
    const Cadastros = await getRepository(cadastro).update(id, {
        matricula: true,
         
    })

    if (Cadastros.affected == 1) {
        const CadastroFinished = await getRepository(cadastro).findOne(id)
        return response.json(CadastroFinished)
    }
    else{
        return response.status(404).json( { mensagem: "Falha na Finalização" })
    }


}



