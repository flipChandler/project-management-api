import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecursosModule } from './recursos/recursos.module';

// ES7 decorator
@Module({
  imports: [RecursosModule],
  controllers: [AppController], // classes de controladores de rota
  providers: [AppService], // classes de serviços (container)
})
export class AppModule {}
