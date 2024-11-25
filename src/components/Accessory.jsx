import React from 'react'
import { useParams } from 'react-router-dom'
import { accessories } from '../data'
export default function Accessory() {
  const { id } = useParams();
  const accessory = accessories.find((accessory) => accessory.id === Number(id));

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="relative aspect-square">
          <img
            src={accessory.image}
            alt={accessory.name}
            fill="true"
            className="object-cover rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{accessory.name}</h1>
          <p className="text-2xl font-bold mb-6">${accessory.price.toFixed(2)}</p>
          <p className="text-gray-600 mb-6">{accessory.description}</p>
          <h2 className="text-xl font-bold mb-4">Features:</h2>
          <ul className="list-disc pl-5 mb-6">
            {accessory.features.map((feature, index) => (
              <li key={index} className="text-gray-600">{feature}</li>
            ))}
          </ul>
          <button className="w-full  bg-red-800 py-2 text-xl text-white rounded-xl">Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

