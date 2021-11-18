import { Field, ID, InputType, Int } from '@nestjs/graphql';
import { CreateStudentDto } from './create-student.dto';

@InputType()
export class UpdateTeacherDto {

    @Field(type => ID)
    id: string;

    @Field()
    fullName: string;

    @Field(type => CreateStudentDto, {nullable: true})
    students: CreateStudentDto[];
}