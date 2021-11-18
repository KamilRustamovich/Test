import { Entity, Column, ManyToMany, ObjectIdColumn, PrimaryGeneratedColumn} from 'typeorm';
import { Teacher } from './teacher.entity';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Student {
  @Field(() => ID)
  @ObjectIdColumn()
  id: string;

  @Field()
  @Column()
  fullName: string;

  @Field(type => Teacher, { nullable: true })
  @ManyToMany(() => Teacher, teacher => teacher.students)
  teachers: Teacher[];

}