import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';
import { UniversityService } from './university.service'

@Resolver(() => Student)
export class StudentResolver {
  constructor(private readonly studentService: UniversityService) {}

  @Mutation(() => Student)
  createStudent(@Args('createStudentDto') createStudentDto: CreateStudentDto) {
    return this.studentService.createStudent(createStudentDto);
  }

  @Query(() => [Student])
  findAllStudent() {
    return this.studentService.getAllStudents();
  }

  @Query(() => Student)
  findOneStudent(@Args('id', { type: () => ID }) id: string) {
    return this.studentService.getStudentById(id);
  }

  @Mutation(() => Student)
  updateStudent(@Args('updateStudent') updateStudent: UpdateStudentDto) {
    return this.studentService.updateStudent(updateStudent.id, updateStudent);
  }

  @Mutation(() => Student)
  removeStudent(@Args('id', { type: () => ID }) id: string) {
    return this.studentService.removeStudent(id);
  }
}
