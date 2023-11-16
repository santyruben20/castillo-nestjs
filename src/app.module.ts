import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CarModule } from './cars/car.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarEntity } from './cars/car.entity';
import { VerifyUserMiddleware } from './middlewares/verify-user-middlewares';



@Module({
  imports: [UserModule,
    CarModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'carros',
      entities: [CarEntity],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(VerifyUserMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.POST });
  }
}