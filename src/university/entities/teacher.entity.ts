import { Entity, Column, ManyToMany, JoinTable, ObjectIdColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Student } from './student.entity';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Teacher {
  @Field(() => ID)
  @ObjectIdColumn()
  id: string;

  @Field()
  @Column()
  fullName: string;

  @Field(() => Student, { nullable: true })
  @ManyToMany(() => Student, student => student.teachers)
  @JoinTable()
  students: Student[];
}