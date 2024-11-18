"use client"
import ProductList from '@/components/ProductList';
import Filters from '@/components/Filters';

type Product = { id: number; name: string; price: number; category: string };

const products: Product[] = [
  {
    id: 1,
    name: "Wireless Mouse",
    price: 29.99,
    category: "Electronics",
  },
  {
    id: 2,
    name: "Yoga Mat",
    price: 19.99,
    category: "Fitness",
  },
]

export default function Home() {

  // searching products
  const handleFilter = (query: string) => {
    console.log('query :>> ', query);
  };
  // filter category vise product
  const handleSelectCategory = (query: string) => {
    console.log('query :>> ', query);
  }

  // sorting
  const handleSort = (sortQuery: string) => {
    console.log('sortQuery:>> ', sortQuery);
  };

  return (
    <main>
      <Filters onFilter={handleFilter} onSelectCategory={handleSelectCategory} onSort={handleSort} />
      <ProductList products={products} />
    </main>
  );
};

