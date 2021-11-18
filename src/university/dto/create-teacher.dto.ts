import { Student } from '../entities/student.entity';

export class CreateTeacherDto {
    fullName: string;
    students: Student[] = [];
}