import { CreateTeacherDto } from './create-teacher.dto';
import { Field, InputType, ID, Int } from '@nestjs/graphql';

@InputType()
export class UpdateStudentDto {

    @Field(type => ID)
    id: string;

    @Field()
    fullName: string;

    @Field(type => CreateTeacherDto, {nullable: true})
    teachers: CreateTeacherDto[];
}