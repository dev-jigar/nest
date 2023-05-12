import { Module } from '@nestjs/common';
// import { UsersController } from './users/usersContorller';
// import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { user } from './typeorm/entities/users';
import { UsersModule } from './users/users.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'nest',
      synchronize: true,
      entities: [user],
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
