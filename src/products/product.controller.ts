import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';
import type { ApiResponse } from './product.interface';
import { Product } from './product.interface';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getAllProducts(): ApiResponse<Product[]> {
    const products = this.productService.findAll();
    return {
      success: true,
      data: products,
      message: 'Fetched products successfully',
    };
  }
}
