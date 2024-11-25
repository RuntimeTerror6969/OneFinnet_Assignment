import React from "react";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { bicycles } from "../data";

export default function BicyclesPage() {

  return (
    <div className="container mx-auto px-4 py-16 font-racingOneSans">
      <h1 className="text-4xl font-bold mb-8">Our Bicycles</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {bicycles.map((bike) => (
          <div key={bike.id} className="group">
            <Link to={`/bicycles/${bike.id}`}>
              <div className="relative aspect-square mb-4 bg-gray-100">
                <img
                  src={bike.image}
                  alt={bike.name}
                  fill="true"
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-500">{bike.category}</p>
                <h3 className="font-medium">{bike.name}</h3>
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < bike.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="font-bold font-sans">${bike.price.toFixed(2)}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
