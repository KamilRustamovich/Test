import { Teacher } from '../entities/teacher.entity';

export class CreateStudentDto {
    fullName: string;
    teachers: Teacher[];
}