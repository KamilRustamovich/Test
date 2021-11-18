import { Field, InputType } from '@nestjs/graphql';
import { ManyToMany } from 'typeorm';
import { Student } from '../entities/student.entity';
import { Teacher } from '../entities/teacher.entity';
import { CreateStudentDto } from './create-student.dto';

@InputType()
export class CreateTeacherDto {

    @Field()
    fullName: string;

    @Field(() => CreateStudentDto, { nullable: true })
    @ManyToMany(() => CreateStudentDto, student => student.teachers, { cascade: true } )
    students: Student[];
}