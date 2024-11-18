type Product = { id: number; name: string; price: number; category: string };

const ProductList = ({ products }: { products: Product[] }) => (
    <div className="grid grid-cols-3 gap-4 mx-20">
        {products.map((product) => (
            <div key={product.id} className="border p-4">
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                <p>{product.category}</p>
            </div>
        ))}
    </div>
);

export default ProductList;
