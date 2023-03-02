import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  UseFilters,
  UsePipes,
} from '@nestjs/common';
import { HttpExceptionFilter } from 'src/exceptions/exception-filter';
import { ForbiddenException } from 'src/exceptions/forbidden';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { JoiValidationPipe } from './pipes/joi-validation.pipe';
import { ValidationPipe } from './pipes/validation.pipe';
import { createCatSchema } from './schemas/create-cat.schema';

@Controller('cats')
export class CatsController {
  // 생성자를 통해 catsService 의존성을 주입
  constructor(private catsService: CatsService) {}

  @Post()
  create(@Body(new ValidationPipe()) createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  findAll() {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ValidationPipe) id: number) {
    return `your id : ${id}`;
  }
}
