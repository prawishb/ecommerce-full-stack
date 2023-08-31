type Category = {
  id: string;
  name: string;
  description?: string;
}

type Product = {
  id: string;
  name: string;
  category: Category[];
  description?: string;
  quantity: number;
  price: number;
}