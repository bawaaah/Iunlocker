import Image4 from "../assets/Image4.png";
import Image5 from "../assets/Image5.png";
import Image6 from "../assets/Image6.png";

const AccessoriesList = () => {
    const accessories = [
      { name: "USB-C to USB-C", price: 5990, img: Image4 },
      { name: "5W Wall Adapter", price: 2490, img: Image5 },
      { name: "AirPods Pro 2", price: 4990, img: Image6 },
    ];
  
    return (
      <section className="py-12 bg-gray-50">
        <h3 className="text-center text-2xl font-bold mb-6">Top Accessories</h3>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {accessories.map((accessory, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 text-center shadow hover:shadow-lg"
            >
              <img
                src={accessory.img}
                alt={accessory.name}
                className="mx-auto mb-4"
              />
              <h4 className="font-bold">{accessory.name}</h4>
              <p className="text-orange-400 font-semibold">Rs: {accessory.price.toLocaleString()}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default AccessoriesList;
  