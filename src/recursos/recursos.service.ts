/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateRecursoDto } from './dto/create-recurso.dto';
import { UpdateRecursoDto } from './dto/update-recurso.dto';
import { Recurso } from './entities/recurso.entity';

@Injectable()
export class RecursosService {

  constructor(@InjectModel(Recurso) private recursoModel: typeof Recurso) {
    
  }

  create(createRecursoDto: CreateRecursoDto) {
    return this.recursoModel.create(createRecursoDto);
  }

  // feature: consulta de recursos
  findAll() {
    return this.recursoModel.findAll();
  }

  findByPk(id: string) {
    return this.recursoModel.findByPk(id);
  }

  async update(id: string, updateRecursoDto: UpdateRecursoDto) {
    const recurso = await this.recursoModel.findByPk(id);
    return recurso.update(updateRecursoDto);
  }

  async remove(id: string) {
    const recurso = this.recursoModel.findByPk(id);
    (await recurso).destroy();
  }
}
