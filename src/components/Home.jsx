import React from "react";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { bicycles as newProducts } from "../data";

export default function Home() {
  return (
    <div>
      <section className="relative text-white">
        <div className="relative h-screen w-screen">
          <img
            src="/assets/bicycle-1.webp"
            className="absolute inset-0 w-full h-full object-cover -z-10"
            alt="bike"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(0, 0, 0, 0.5) 50%, rgba(255, 0, 0, 0.5) 50%)",
            }}
          />{" "}
        </div>
        <div className="absolute inset-0">
          <div className="container mx-auto px-4 py-24 space-y-12">
            <p className="text-3xl font-racingOneSans">Newly Launched</p>
            <h1 className="text-7xl font-racingOneSans font-bold ">
              Kryo X26
            </h1>{" "}
            <h1 className="text-7xl font-racingOneSans font-bold ">MTB</h1>
            <div className="space-y-6">
              <h2 className="text-xl font-racingOneSans mb-4">
                Specifications:
              </h2>
              <ul className="space-y-4">
                {[
                  'Lightweight 18" Frame',
                  "Steel Suspension Fork",
                  "Steel Hardtail Frame",
                ].map((spec, index) => (
                  <li key={index} className="flex space-x-2 -space-y-2">
                    <div className="h-2 w-2 bg-white rounded-full" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              to="/bicycles/1"
              className="inline-block bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 transition-colors"
            >
              BUY NOW
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 font-racingOneSans">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold italic text-center mb-12">
            New Arrivals
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {newProducts.slice(0, 4).map((bike) => (
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
                    <p className="text-sm text-gray-500">Bicycles</p>
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
                    <p className="font-bold font-sans">
                      ${bike.price.toFixed(2)}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
