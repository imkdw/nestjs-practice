import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  // 새로운 고양이 생성
  create(cat: Cat) {
    this.cats.push(cat);
  }

  // 고양이들 가져오기
  findAll(): Cat[] {
    return this.cats;
  }
}
