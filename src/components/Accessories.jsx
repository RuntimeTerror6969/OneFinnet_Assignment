import React from 'react'
import { Link } from 'react-router-dom'
import { accessories } from '../data'

export default function Accessories() {

  return (
    <div className="container mx-auto px-4 py-16 font-racingOneSans">
      <h1 className="text-4xl font-bold mb-8">Our Accessories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {accessories.map((accessory) => (
          <div key={accessory.id} className="group">
            <Link to={`/accessories/${accessory.id}`}>
              <div className="relative aspect-square mb-4 bg-gray-100">
                <img
                  src={accessory.image}
                  alt={accessory.name}
                  fill="true"
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">{accessory.name}</h3>
                
                <p className="font-bold font-sans">${accessory.price.toFixed(2)}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

