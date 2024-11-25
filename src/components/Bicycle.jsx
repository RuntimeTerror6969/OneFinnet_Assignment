import { useParams } from "react-router-dom";
import { Star } from "lucide-react";
import { bicycles } from "../data";

export default function Bicycle() {
  const { id } = useParams();

  const bicycle = bicycles.find((bike) => bike.id === Number(id));
  console.log(bicycle);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="relative aspect-square">
          <img
            src={bicycle.image}
            alt={bicycle.name}
            fill="true"
            className="object-cover rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{bicycle.name}</h1>
          <div className="flex items-center mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${
                  i < bicycle.rating
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
            <span className="ml-2 text-gray-600">({bicycle.rating} stars)</span>
          </div>
          <p className="text-2xl font-bold mb-6">${bicycle.price.toFixed(2)}</p>
          <p className="text-gray-600 mb-6">{bicycle.description}</p>
          <h2 className="text-xl font-bold mb-4">Specifications:</h2>
          <ul className="list-disc pl-5 mb-6">
            {bicycle.specs.map((spec, index) => (
              <li key={index} className="text-gray-600">
                {spec}
              </li>
            ))}
          </ul>
          <button className="w-full bg-red-800 py-2 text-xl text-white rounded-xl">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
