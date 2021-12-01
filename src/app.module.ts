/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Recurso } from './recursos/entities/recurso.entity';
import { RecursosModule } from './recursos/recursos.module';

// ES7 decorator
@Module({
  imports: [
    RecursosModule,
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      database: 'project_db' ,
      username: 'root',
      password: 'root',
      models: [Recurso],
      autoLoadModels: true,
    }),
  ],
  controllers: [AppController], // classes de controladores de rota
  providers: [AppService], // classes de serviços (container)
})
export class AppModule {}
