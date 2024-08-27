import { ProductCard } from '@/components';
const products = [
  {
    id: 1,
    name: 'Nike Zoom KD 12',
    price: 99,
    sizes: [5, 6, 7, 8],
    colors: ['red', 'green', 'blue'],
  },
];
function App() {
  return (
    <div className="main">
      {products?.length > 0 &&
        products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
    </div>
  );
}

export default App;
