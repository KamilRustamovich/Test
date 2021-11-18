import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { Teacher } from './entities/teacher.entity';
import { UniversityService } from './university.service'

@Resolver(() => Teacher)
export class TeacherResolver {
  constructor(private readonly teacherService: UniversityService) {}

  @Mutation(() => Teacher)
  createTeacher(@Args('createTeacherDto') createTeacherDto: CreateTeacherDto) {
    return this.teacherService.createTeacher(createTeacherDto);
  }

  @Query(() => [Teacher])
  findAllTeachers() {
    return this.teacherService.getAllTeachers();
  }

  @Query(() => Teacher)
  findOneTeacher(@Args('id', { type: () => ID }) id: string) {
    return this.teacherService.getTeacherById(id);
  }

  @Mutation(() => Teacher)
  updateTeacher(@Args('createTeacherDto') createTeacherDto: UpdateTeacherDto) {
    return this.teacherService.updateTeacher(createTeacherDto.id, createTeacherDto);
  }

  @Mutation(() => Teacher)
  removeTeacher(@Args('id', { type: () => ID }) id: string) {
    return this.teacherService.removeTeacher(id);
  }
}
