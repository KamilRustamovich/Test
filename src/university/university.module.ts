import { Module } from "@nestjs/common";
import { UniversityService } from "./university.service";
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from "./entities/student.entity";
import { Teacher } from "./entities/teacher.entity";
import { StudentResolver } from "./students.resolver";
import { TeacherResolver } from "./teachers.resolver";


@Module({
    imports: [TypeOrmModule.forFeature([Student, Teacher])],
    providers: [UniversityService, StudentResolver, TeacherResolver],
})

export class UnversityModule {

}