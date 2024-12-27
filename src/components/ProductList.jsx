import Image1 from "../assets/image1.png";
import Image2 from "../assets/image2.png";
import Image3 from "../assets/image3.png";

const ProductList = () => {
  const products = [
    { name: "iPhone 16 Pro Max", price: 400000, img: Image1 },
    { name: "iPhone 16", price: 240000, img: Image2 },
    { name: "iPhone 14 Pro", price: 280000, img: Image3 },
  ];

  return (
    <section className="py-12">
      <h3 className="text-center text-2xl font-bold mb-6">Top Products</h3>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {/* Image with consistent size across all devices */}
            <img
              src={product.img}
              alt={product.name}
              className="mx-auto mb-4 h-64 w-auto object-contain md:h-80"
            />
            <h4 className="font-bold text-lg">{product.name}</h4>
            <p className="text-orange-400 font-semibold">
              Rs: {product.price.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
