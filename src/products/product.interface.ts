export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  description: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message: string;
}
