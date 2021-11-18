import { TypeOrmModule } from '@nestjs/typeorm';
import { UnversityModule } from './university/university.module';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { Module } from '@nestjs/common';


@Module({
  imports: [
    UnversityModule, 
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb+srv://test:21872216@cluster1.1idqb.mongodb.net/test-db?retryWrites=true&w=majority',
      synchronize: false,
      entities: ['dist/**/*.entity{.ts,.js}'],
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
  ],
})


export class AppModule {}
