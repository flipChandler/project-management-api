import { Module } from '@nestjs/common';
import { RecursosService } from './recursos.service';
import { RecursosController } from './recursos.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Recurso } from './entities/recurso.entity';

@Module({
  imports: [
    SequelizeModule.forFeature([Recurso])
  ],
  controllers: [RecursosController],
  providers: [RecursosService]
})
export class RecursosModule {}
