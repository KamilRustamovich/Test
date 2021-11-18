import { 
    Body, Controller, Delete, 
    Get, HttpCode, HttpStatus, 
    Param, Post, Put, 
    Header,
    Patch,
} from '@nestjs/common';
import { UniversityService } from './university.service';
import { Student } from './entities/student.entity';
import { Teacher } from './entities/teacher.entity';
import { CreateTeacherDto } from "./dto/create-teacher.dto";
import { UpdateTeacherDto } from "./dto/update-teacher.dto";
import { getConnection } from "typeorm";


@Controller('teachers')
export class TeachersController {

    constructor(private readonly UniversityService: UniversityService) {     
    };

    @Get()
    async getAllTeachers(): Promise<Teacher[]> {
        return await this.UniversityService.getAllTeachers()
    }

    @Get(':id')
    async getOneTeacher(@Param('id') id: number): Promise<Teacher> {
        return await this.UniversityService.getTeacherById(id)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async createTeacher(@Body() createTeacherDto: CreateTeacherDto): Promise<Teacher> {
        return await this.UniversityService.createTeacher(createTeacherDto) 
    }


    @Delete(':id')
    async removeTeacher(@Param('id') id: number): Promise<Teacher> {
        return await this.UniversityService.removeTeacher(id)
    }

    @Patch(':id')
    async updateTeacher(@Param('id') id: number, @Body() updateTeacherDto: UpdateTeacherDto): Promise<Teacher> {
        return await this.UniversityService.updateTeacher(id, updateTeacherDto)
    }
}

