import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentController } from './controller/student/student.controller';
import { StudentSchema } from './schema/student.schema';
import { StudentService } from './service/student/student.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://Cluster39761:12345qwe@cluster39761.rsg85.mongodb.net/', {dbName:'studentdb'}),
    MongooseModule.forFeature([{ name: 'Student', schema: StudentSchema }])
  ],
  controllers: [AppController, StudentController],
  providers: [AppService, StudentService],
})
export class AppModule {}
