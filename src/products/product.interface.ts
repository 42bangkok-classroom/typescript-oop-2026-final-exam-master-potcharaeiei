export interface Productinterface<T> {
  success: boolean;
  id: string;
  name: string;
  price: T | null;
  stock: T | null;
  description: string;
}
