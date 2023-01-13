import React from "react";
import { Link } from "react-router-dom";
import {outdoorEvents} from "./data";

export default function OutdoorEvents() {
  console.log(outdoorEvents);
  return (
    <div className="my-4 px-4 text-center">
      <h1 className="text-gray-600 text-xl mb-2">Outdoor Events Nepal</h1>
      <div className="grid grid-cols-3 gap-4">
        {outdoorEvents.map(event => (
          <Card
            key={event.slug}
            title={event.title}
            slug={event.slug}
            description={event.description}
            image={event.image}
            imageTitle={event.imageTitle}
          />
        ))}
      </div>
    </div>
  );
}

function Card({ title, slug, description, image, imageTitle }) {
  return (
    <div className="rounded-lg shadow-lg bg-white max-w-sm">
      <Link to={`/outdoorEvents/${slug}`}>
        <img title={imageTitle} src={image} alt={title}/>
      </Link>
      <div className="p-6">
        <h2 className="text-gray-900 text-lg font-medium mb-2">{title}</h2>
        <p className="text-gray-700">{description}</p>
        <Link to={`/outdoorEvents/${slug}`} className="inline-block px-6 py-2 bg-blue-600 text-white font-medium text-xs  shadow-md">Order event</Link>
      </div>
    </div>
  );
}
