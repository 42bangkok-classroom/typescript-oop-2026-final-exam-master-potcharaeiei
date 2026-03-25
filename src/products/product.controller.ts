import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';
import { Productinterface } from './product.interface';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getAllProducts(): {
    success: boolean;
    data: Productinterface<object>[];
    message: string;
  } {
    const products = this.productService.findAll();
    return {
      success: true,
      data: products,
      message: 'Fetched products successfully',
    };
  }
}
