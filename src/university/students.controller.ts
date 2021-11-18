import { 
    Body, Controller, Delete, 
    Get, HttpCode, HttpStatus, 
    Param, Post, Patch,
} from '@nestjs/common';
import { UniversityService } from './university.service';
import { Student } from './entities/student.entity';
import { UpdateStudentDto } from './dto/update-student.dto';
import { CreateStudentDto } from './dto/create-student.dto';




@Controller('students')
export class StudentsController {

    constructor(private readonly UniversityService: UniversityService) {     
    }

    @Get('')
    async getAllStudents(): Promise<Student[]> {
        return await this.UniversityService.getAllStudents()
    }

    @Get(':id')
    async getOneStudent(@Param('id') id: number): Promise<Student> {
        return await this.UniversityService.getStudentById(id)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async createStudent(@Body() createStudentDto: CreateStudentDto): Promise<Student> {
        return await this.UniversityService.createStudent(createStudentDto) 
    }


    @Delete(':id')
    async removeStudnet(@Param('id') id: number): Promise<Student> {
        return await this.UniversityService.removeStudent(id)
    }

    @Patch(':id')
    async updateStudent(@Param('id') id: number, @Body() udpateStudentdto: UpdateStudentDto): Promise<Student> {
        return await this.UniversityService.updateStudent(id, udpateStudentdto)
    }
}
