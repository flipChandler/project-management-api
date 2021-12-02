import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { RecursosService } from './recursos.service';
import { CreateRecursoDto } from './dto/create-recurso.dto';
import { UpdateRecursoDto } from './dto/update-recurso.dto';

@Controller('recursos')
export class RecursosController {
  constructor(private readonly recursosService: RecursosService) {}

  @Post()
  create(@Body() createRecursoDto: CreateRecursoDto) {
    return this.recursosService.create(createRecursoDto);
  }

  @Get()
  findAll() {
    return this.recursosService.findAll();
  }

  @Get(':id')
  findByPk(@Param('id') id: string) {
    return this.recursosService.findByPk(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecursoDto: UpdateRecursoDto) {
    return this.recursosService.update(id, updateRecursoDto);
  }

  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recursosService.remove(id);
  }
}
