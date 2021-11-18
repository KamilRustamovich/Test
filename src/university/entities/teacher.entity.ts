
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { Student } from './student.entity';

@Entity()
export class Teacher {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @ManyToMany(() => Student, student => student.teachers, { cascade: true } )
  @JoinTable()
  students: Student[];
}
