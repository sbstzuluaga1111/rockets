import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CampersModule } from './campers/campers.module';
import { AstronautasModule } from './astronautas/astronautas.module';

@Module({
  imports: [CampersModule, MongooseModule.forRoot('mongodb+srv://astronautas:campus2023@clusterastronautas.9f6orzw.mongodb.net/astronautasDB'), AstronautasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
