import { getCustomRepository } from 'typeorm';
import { Request, Response, response, json } from 'express';
import { CoursesRepository } from '../repositories/CourseRepository';
class CourseController{
    
    async create(req: Request,res: Response){
        const { NM_CURSO,URL_CURSO,DS_CURSO,DS_DURACAO,DS_IDIOMA,DS_CATEGORIA } = req.body;
        
        const courseRepository = getCustomRepository(CoursesRepository);

        const nmt = NM_CURSO + "";

        console.log(nmt)
        
        const course = courseRepository.create({NM_CURSO,URL_CURSO,DS_CURSO,DS_DURACAO,DS_IDIOMA,DS_CATEGORIA});

        await courseRepository.save(course);

        return res.status(201).json(course);

    }

    createMany(req: Request,res: Response) {
        const cursos = req.body;

        return res.json(cursos);

    }

    async list(req: Request,res: Response){
        const courseRepository = getCustomRepository(CoursesRepository);
        const allCourses = await courseRepository.find();

        return res.json(allCourses);
    }

    async listFilterCategory(req: Request,res: Response){
        const { categoria } = req.body;

        const courseRepository = getCustomRepository(CoursesRepository);
        const courseFilterCategory = await courseRepository.find({where: { DS_CATEGORIA: categoria}});
        
        return res.json(courseFilterCategory);
    }


}

export { CourseController };