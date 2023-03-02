import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { CatsModule } from './cats/cats.module';
import { HttpExceptionFilter } from './exceptions/exception-filter';

@Module({
  imports: [CatsModule],
})
export class AppModule {}
