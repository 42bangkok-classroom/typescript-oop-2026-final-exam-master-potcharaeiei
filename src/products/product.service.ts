import { Injectable } from '@nestjs/common';
import { Productinterface } from './product.interface';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class ProductService {
  private readonly productPath = path.join(
    process.cwd(),
    'data',
    'products.json',
  );
  findAll(): Productinterface<object>[] {
    const fileContent = fs.readFileSync(this.productPath, 'utf-8');
    return JSON.parse(fileContent);
  }
}
