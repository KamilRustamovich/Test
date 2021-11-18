import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './entities/student.entity';
import { Teacher } from './entities/teacher.entity';
import { CreateTeacherDto } from "./dto/create-teacher.dto";
import { UpdateTeacherDto } from "./dto/update-teacher.dto";
import { CreateStudentDto } from "./dto/create-student.dto";
import { UpdateStudentDto } from "./dto/update-student.dto";


@Injectable()
export class UniversityService {

    constructor(
        @InjectRepository(Student)
        private studentsRepository: Repository<Student>,
        @InjectRepository(Teacher)
        private teachersRepository: Repository<Teacher>,
      ) {}
    

    async getAllStudents(): Promise<Student[]> {
        return await this.studentsRepository.find() 
    }

    async getAllTeachers(): Promise<Teacher[]> {
        return await this.teachersRepository.find() 
    }

    async getStudentById(id: number): Promise<Student> {
        try {
            const student = await this.studentsRepository.findOneOrFail(id, {
                relations: ['teachers']
            })
            return student
        } catch (err) {
            throw err;
        }
    }

    async getTeacherById(id: number): Promise<Teacher> {
        try {
            const teacher = await this.teachersRepository.findOneOrFail(id, {
                relations: ['students']
            })
            return teacher
        } catch (err) {
            throw err;
        }
    }

    async createTeacher(teacherDto: CreateTeacherDto): Promise<Teacher> {
        const student1 = new Student()
        student1.fullName = 'Just a name'
        await this.studentsRepository.save(student1)

        const student2 = new Student()
        student2.fullName = 'Just a name2'
        await this.studentsRepository.save(student2)

        const newTeacher = this.teachersRepository.create(teacherDto)
        newTeacher.students = [student1, student2]
        await this.teachersRepository.save(newTeacher)

        return newTeacher
    }

    async createStudent(studentDto: CreateStudentDto): Promise<Student> {
        const teacher1 = new Teacher()
        teacher1.fullName = 'Just a name'
        await this.teachersRepository.save(teacher1)

        const teacher2 = new Teacher()
        teacher2.fullName = 'Just a name2'
        await this.teachersRepository.save(teacher2)

        const newStudent = this.studentsRepository.create(studentDto)
        newStudent.teachers = [teacher1, teacher2]
        await this.teachersRepository.save(newStudent)

        return newStudent
    }

    async removeStudent(id: number): Promise<Student> {
        const student = await this.getStudentById(id)

        return await this.studentsRepository.remove(student)
    }

    async removeTeacher(id: number): Promise<Teacher> {
        const teacher = await this.getTeacherById(id)

        return await this.teachersRepository.remove(teacher)
    }


    async updateStudent(id: number, studentDto: UpdateStudentDto): Promise<Student> {
        await this.studentsRepository.update({ id }, studentDto)
        return await this.studentsRepository.findOne({ id })
    }

    async updateTeacher(id: number, teacherDto: Partial<UpdateTeacherDto>): Promise<Teacher> {
        await this.teachersRepository.update({ id }, teacherDto)
        return await this.teachersRepository.findOne({ id })
    }

}