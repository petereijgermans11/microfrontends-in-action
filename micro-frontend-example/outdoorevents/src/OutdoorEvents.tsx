import React from "react";
import { Link } from "react-router-dom";
import {outdoorEvents} from "./data";

export default function OutdoorEvents() {
  return (
    <div className="my-4 px-4 text-center">
        <div>
            <div className="float-left w">
            Search: <input className="text-black-600 border-4" />
            </div>
            <div>
            <h1 className="text-4xl"><strong>Outdoor Events . . . .</strong></h1>
            </div>
        </div>

      <div className="grid grid-cols-4 gap-4">
        {outdoorEvents.map(event => (
          <Card
            key={event.slug}
            title={event.title}
            slug={event.slug}
            description={event.description}
            image={event.image}
            imageTitle={event.imageTitle}
            price={event.price}
          />
        ))}
      </div>
    </div>
  );
}

function Card({ title, slug, description, image, imageTitle, price }) {
  return (
    <div className="rounded-lg shadow-lg bg-white max-w-sm">
      <Link to={`/outdoorEvents/${slug}`}>
        <img title={imageTitle} src={image} alt={title}/>
      </Link>
      <div className="p-6">
          <h2 className="text-gray-900 text-lg font-medium mb-2">{title} <strong>{price}</strong></h2>
        <p className="text-gray-700">{description}</p>
        <Link to={`/outdoorEvents/${slug}`} className="inline-block px-6 py-2 bg-yellow-500 text-white font-medium text-xs  shadow-md">Book event</Link>
      </div>
    </div>
  );
}
