import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
//import { Curso } from '../database/entity/Curso';

class CursoController{
    async create(req: Request,res: Response){
        const { nm_curso ,url_curso,ds_curso,ds_duracao,ds_idioma } = req.body; 
        
        //const cursoRepository = getRepository(Curso)
       

       //const curso = cursoRepository.create({ nm_curso ,url_curso,ds_curso,ds_duracao,ds_idioma});
       //await cursoRepository.save(curso)

       return res.json("fuck");
    }
}

export { CursoController};