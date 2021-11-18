import { Module } from "@nestjs/common";
import { StudentsController } from "./students.controller";
import { TeachersController } from "./teachers.controller";
import { UniversityService } from "./university.service";
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from "./entities/student.entity";
import { Teacher } from "./entities/teacher.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Student, Teacher])],
    providers: [UniversityService],
    controllers: [StudentsController, TeachersController]
})

export class UnversityModule {

}