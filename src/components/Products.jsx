import React from "react";

const Products = () => {
  const productList = [
    {
      id: 1,
      name: "Product 1",
      price: 10,
      image: "https://picsum.photos/id/101/200/300",
    },
    {
      id: 2,
      name: "Product 2",
      price: 20,
      image: "https://picsum.photos/id/102/200/300",
    },
    {
      id: 3,
      name: "Product 3",
      price: 30,
      image: "https://picsum.photos/id/103/200/300",
    },
    {
      id: 4,
      name: "Product 4",
      price: 40,
      image: "https://picsum.photos/id/104/200/300",
    },
    {
      id: 5,
      name: "Product 5",
      price: 50,
      image: "https://picsum.photos/id/105/200/300",
    },
    {
      id: 6,
      name: "Product 6",
      price: 60,
      image: "https://picsum.photos/id/106/200/300",
    },
    {
      id: 7,
      name: "Product 7",
      price: 70,
      image: "https://picsum.photos/id/107/200/300",
    },
    {
      id: 8,
      name: "Product 8",
      price: 80,
      image: "https://picsum.photos/id/108/200/300",
    },
    {
      id: 9,
      name: "Product 9",
      price: 90,
      image: "https://picsum.photos/id/109/200/300",
    },
    {
      id: 10,
      name: "Product 10",
      price: 100,
      image: "https://picsum.photos/id/110/200/300",
    },
  ];

  const handleAddToCart = (product) => {
    console.log(`Added ${product.name} to cart.`);
    // Add your logic to update the cart state or perform other actions
  };

  const handlePurchase = (product) => {
    console.log(`Purchased ${product.name}.`);
    // Add your logic to handle the purchase or perform other actions
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">
        For Hosting Practice Purposes Only
      </h2>
      <ul className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {productList.map((product) => (
          <li key={product.id} className="bg-white p-4 rounded shadow">
            <img
              src={product.image}
              alt={product.name}
              className="w-full mb-4"
            />
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold">{product.name}</span>
              <span className="text-gray-600">${product.price}</span>
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => handleAddToCart(product)}
                className="px-4 py-2 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Add to Cart
              </button>
              <button
                onClick={() => handlePurchase(product)}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Purchase
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
