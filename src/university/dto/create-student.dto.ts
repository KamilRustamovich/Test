import { CreateTeacherDto } from './create-teacher.dto';
import { Field, Int, InputType } from '@nestjs/graphql';
import { Teacher } from '../entities/teacher.entity';
import { ManyToMany } from 'typeorm';


@InputType()
export class CreateStudentDto {

    @Field()
    fullName: string;

    @Field(type => CreateTeacherDto, {nullable: true})
    @ManyToMany(() => CreateTeacherDto, teacher => teacher.students, { cascade: true } )
    teachers: Teacher[];
}