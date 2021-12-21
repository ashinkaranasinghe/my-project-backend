import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { BrandModule } from './brand/brand.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UserModule, AuthModule, BrandModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
